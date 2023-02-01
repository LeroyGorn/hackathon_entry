from rest_framework import generics
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import AllowAny

from apps.products.models import Product
from apps.products.serializers import ProductSerializer


class ProductListAPIView(generics.ListAPIView):
    permission_classes = (
        AllowAny,
    )
    pagination_class = LimitOffsetPagination
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.all()
