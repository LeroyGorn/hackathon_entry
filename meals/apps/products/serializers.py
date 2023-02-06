from rest_framework import serializers

from apps.products.models import Product, UserProduct


class ProductSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField()
    name = serializers.CharField(required=False)

    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'measurement']


class UserProductSerializer(serializers.ModelSerializer):
    product = ProductSerializer()

    class Meta:
        model = UserProduct
        fields = ['id', 'product', 'quantity']

    def create(self, validated_data):
        user = self.context['request'].user
        product = Product.objects.get(
            id=validated_data["product"]["id"]
        )
        return UserProduct.objects.create(
            product=product,
            quantity=validated_data["quantity"],
            user=user
        )
