from django.contrib import admin

from apps.dishes.models import Dish, DishProduct


@admin.register(Dish)
class DishAdmin(admin.ModelAdmin):
    search_fields = ['name']
    list_display = ['name', 'category']
    list_filter = ['category']


admin.site.register(DishProduct)
