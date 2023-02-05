from django.contrib import admin

from apps.products.models import Product, UserProduct


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    search_fields = ['name']
    list_display = ['name', 'measurement']
    list_filter = ['measurement']


@admin.register(UserProduct)
class ProductAdmin(admin.ModelAdmin):
    search_fields = ['product__name', 'user__email']
    list_display = ['product_name', 'user_email', 'quantity']
    raw_id_fields = ['product']

    def product_name(self, obj):
        return obj.product.name

    def user_email(self, obj):
        return obj.user.email
