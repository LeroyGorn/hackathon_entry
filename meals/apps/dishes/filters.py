from django_filters import rest_framework as filters

from apps.dishes.models import Dish


class DishCategoryFilter(filters.FilterSet):
    product = filters.CharFilter(field_name='products__product__name', lookup_expr='iexact')

    class Meta:
        model = Dish
        fields = ['category']

