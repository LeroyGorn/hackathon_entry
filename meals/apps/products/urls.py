from django.urls import path

from apps.products.views import ProductListAPIView, UserProductsListAPIView

urlpatterns = [
    path('', ProductListAPIView.as_view()),
    path('user/<int:user_id>/', UserProductsListAPIView.as_view()),
]
