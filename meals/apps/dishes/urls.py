from django.urls import path

from apps.dishes.views import DishListAPIView, DishProductsListAPIView, AvailableDishesListAPIView

urlpatterns = [
    path('', DishListAPIView.as_view()),
    path('<int:dish_id>/', DishProductsListAPIView.as_view()),
    path('available/', AvailableDishesListAPIView.as_view())
]
