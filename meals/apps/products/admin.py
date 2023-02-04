from django.contrib import admin

from apps.products.models import Product, UserProduct


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    search_fields = ['name']
    list_display = ['name', 'measurement']
    list_filter = ['measurement']


admin.site.register(UserProduct)
