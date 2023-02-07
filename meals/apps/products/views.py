from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

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


class UserProductsListCreateAPIView(generics.ListCreateAPIView):
    permission_classes = (
        IsAuthenticated,
    )
    pagination_class = LimitOffsetPagination
    serializer_class = UserProductSerializer

    def get_queryset(self):
        return UserProduct.objects.filter(
            user=self.request.user
        )


class UserProductsUpdateAPIView(generics.UpdateAPIView):
    permission_classes = (
        IsAuthenticated,
    )
    serializer_class = UserProductSerializer

    def get_object(self, *args, **kwargs):
        return get_object_or_404(UserProduct, id=self.kwargs.get('product_id'))
