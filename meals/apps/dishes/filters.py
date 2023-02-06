from django.db.models import Q
from django_filters import rest_framework as filters

from apps.dishes.models import Dish


class DishCategoryFilter(filters.FilterSet):
    product = filters.CharFilter(field_name='products__product__name', method='product_filter')
    category = filters.CharFilter(field_name='category', method='category_filter')

    def category_filter(self, qs, name, value):
        return qs.filter(category__in=value.split(","))

    def product_filter(self, qs, name, value):
        return qs.filter(products__product__name__in=value.split(","))

    class Meta:
        model = Dish
        fields = ['category']

