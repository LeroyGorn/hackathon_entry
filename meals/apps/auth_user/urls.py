from django.urls import path

from apps.auth_user.views import UserCreateView, UserLoginView, UserLogoutView

urlpatterns = [
    path('register/', UserCreateView.as_view()),
    path('login/', UserLoginView.as_view(), name="user_login"),
    path('logout/', UserLogoutView.as_view(), name="user_logout"),
]
