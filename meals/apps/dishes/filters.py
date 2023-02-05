from django_filters import rest_framework as filters

from apps.dishes.models import Dish


class DishCategoryFilter(filters.FilterSet):
    class Meta:
        model = Dish
        fields = ['category']
