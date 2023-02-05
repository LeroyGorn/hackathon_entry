from django.contrib import admin

from apps.dishes.models import Dish, DishProduct


@admin.register(Dish)
class DishAdmin(admin.ModelAdmin):
    search_fields = ['name']
    list_display = ['name', 'category']
    list_filter = ['category']


@admin.register(DishProduct)
class DishAdmin(admin.ModelAdmin):
    search_fields = ['dish__name', 'product__name']
    list_display = ['dish_name', 'product_name', 'quantity']

    def dish_name(self, obj):
        return obj.dish.name

    def product_name(self, obj):
        return obj.product.name
