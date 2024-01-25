from django.db import models

# Create your models here.
class jobseeker(models.Model):
    firstname=models.CharField(max_length = 255)
    lastname=models.CharField(max_length = 255)
    address=models.CharField(max_length = 255)

class company(models.Model):
    company_name=models.CharField(max_length = 255)
        
