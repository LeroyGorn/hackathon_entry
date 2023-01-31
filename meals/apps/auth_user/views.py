from rest_framework import generics
from rest_framework.permissions import AllowAny
from apps.auth_user.serializers import UserSerializer


class UserCreateView(generics.CreateAPIView):
    permission_classes = (
        AllowAny,
    )
    serializer_class = UserSerializer
