from django.contrib import admin

from apps.dishes.models import Dish, DishProduct


admin.site.register(Dish)
admin.site.register(DishProduct)
