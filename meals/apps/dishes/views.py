from django.db.models import Count
from django.shortcuts import get_object_or_404
from rest_framework.generics import ListAPIView
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from apps.dishes.filters import DishCategoryFilter
from apps.dishes.models import Dish
from apps.dishes.serializers import DishSerializer, DishProductSerializer


class DishListAPIView(ListAPIView):
    permission_classes = (
        AllowAny,
    )
    serializer_class = DishSerializer
    pagination_class = LimitOffsetPagination
    filterset_class = DishCategoryFilter

    def get_queryset(self):
        return Dish.objects.all()


class DishProductsListAPIView(ListAPIView):
    permission_classes = (
        AllowAny,
    )
    pagination_class = LimitOffsetPagination

    def get(self, request, *args, **kwargs):
        dish = get_object_or_404(Dish, id=self.kwargs.get('dish_id'))
        return Response({
            'dish': DishSerializer(dish).data,
            'products': DishProductSerializer(dish.products.all(), many=True).data
        })


class AvailableDishesListAPIView(ListAPIView):
    permission_classes = (
        IsAuthenticated,
    )
    pagination_class = LimitOffsetPagination
    serializer_class = DishSerializer

    # def get_queryset(self):
    #     result = []
    #     user_products = self.request.user.products.values_list()
    #     dishes = Dish.objects.filter(
    #         products__in=user_products
    #     ).annotate(
    #         count_products=Count('products')
    #     )
    #     for dish in dishes:
    #         if dish.count_products == user_products.filter(dish=dish).count():
    #             for user_product in user_products:
    #                 if dish.products.get(product=user_product.product).quantity <= user_product.quantity:
    #                     result.append(dish)
    #     return result
    # def get_queryset(self):
    #     user_products = self.request.user.products.values_list('product_id', 'quantity')
    #     return Dish.objects.filter(
    #         products__product__in=[p[0] for p in user_products]
    #     ).filter(
    #         products__product__in=[p[0] for p in user_products],
    #         products__quantity__lte=[p[1] for p in user_products]
    #     ).distinct()
