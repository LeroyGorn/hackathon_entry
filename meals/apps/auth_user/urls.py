from django.urls import path

from apps.auth_user.views import UserCreateView

urlpatterns = [
    path('register/', UserCreateView.as_view()),
]