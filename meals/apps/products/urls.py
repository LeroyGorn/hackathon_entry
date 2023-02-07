from django.urls import path

from apps.products.views import ProductListAPIView, UserProductsListCreateAPIView, UserProductsUpdateAPIView

urlpatterns = [
    path('', ProductListAPIView.as_view()),
    path('user_products/', UserProductsListCreateAPIView.as_view()),
    path('user_products/<int:user_product_id>/', UserProductsUpdateAPIView.as_view()),
]
