from django.urls import path
from . import views

urlpatterns = [
    

      path("add/", views.PupilCreate.as_view(), name="incidents"),
     
    path("nikola/delete/<int:pk>/", views.PupilDelete.as_view(), name="delete"),
]