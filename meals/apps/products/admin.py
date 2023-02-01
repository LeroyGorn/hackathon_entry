from django.contrib import admin

from apps.products.models import Product, UserProduct


admin.site.register(Product)
admin.site.register(UserProduct)
