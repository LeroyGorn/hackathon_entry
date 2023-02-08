from rest_framework import serializers

from apps.dishes.models import Dish, DishProduct
from apps.products.serializers import ProductSerializer


class DishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dish
        fields = ['id', 'name', 'image', 'instructions', 'category']


class DishProductSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)

    class Meta:
        model = DishProduct
        fields = ['product', 'quantity']
