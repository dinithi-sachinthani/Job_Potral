from django.db import models


class jobseeker(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    username = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    date_of_birth = models.IntegerField(max_length=100)
    phone_no = models.IntegerField(max_length=100) 
    password = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    education = models.CharField(max_length=100)
    



