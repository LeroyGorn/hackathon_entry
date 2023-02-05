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
    serializer_class = DishSerializer

    def get_queryset(self):
        results = []
        user_products = {p.product: p.quantity for p in self.request.user.products.all()}
        for dish in Dish.objects.all():
            all_products = True
            for dish_product in dish.products.all():
                product = dish_product.product
                quantity = dish_product.quantity
                if product not in user_products or quantity > user_products[product]:
                    all_products = False
                    break
            if all_products:
                results.append(dish)
        return results


class CategoryDishListAPIView(ListAPIView):
    permission_classes = (
        AllowAny,
    )

    def get(self, *args, **kwargs):
        return Response({
            "category": [i for i in Dish.CategoryChoice],
        })
