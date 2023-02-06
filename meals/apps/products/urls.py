from django.urls import path

from apps.products.views import ProductListAPIView, UserProductsListCreateAPIView, UserProductsUpdateAPIView

urlpatterns = [
    path('', ProductListAPIView.as_view()),
    path('user/<int:user_id>/', UserProductsListCreateAPIView.as_view()),
    path('user/update/<int:product_id>/', UserProductsUpdateAPIView.as_view()),
]
