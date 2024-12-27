from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Pupil


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user


class PupilSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pupil
        fields = ["id","name","name","surname","dob","grade","birthcert","address","parent","id_number","cell_number"]
        extra_kwargs = {"author": {"read_only": True}}




