from django.db import models

# Create your models here.
from django.db import models 
from django.contrib.auth.models import User 


class Pupil(models.Model):
    name= models.CharField(max_length=100)
    surname = models.TextField()
    dob= models.CharField(max_length=100 )
    grade= models.CharField(max_length=100 )
    birthcert= models.CharField(max_length=100 )
    address= models.CharField(max_length=100 , default="null")
    parent=  models.CharField(max_length=100 , default="null")
    cell_number=  models.CharField(max_length=100 , default="null")
    id_number=  models.CharField(max_length=100 , default="null")



    



    

    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="pupil")

    def __str__(self):
        return self.name


