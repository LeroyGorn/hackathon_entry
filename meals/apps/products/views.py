from rest_framework import generics
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import AllowAny, IsAuthenticated

from apps.products.models import Product, UserProduct
from apps.products.serializers import ProductSerializer, UserProductSerializer


class ProductListAPIView(generics.ListAPIView):
    permission_classes = (
        AllowAny,
    )
    pagination_class = LimitOffsetPagination
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.all()


class UserProductsListAPIView(generics.ListAPIView):
    permission_classes = (
        IsAuthenticated,
    )
    pagination_class = LimitOffsetPagination
    serializer_class = UserProductSerializer

    def get_queryset(self):
        return UserProduct.objects.filter(
            user_id=self.kwargs.get('user_id'),
        )
