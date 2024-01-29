from django.db import models

# Create your models here.
class Jobs(models.Model):
    id = models.BigAutoField(primary_key=True)
    job_title=models.CharField(max_length = 255) 
    job_category=models.CharField(max_length = 255)
    despription = models.CharField(max_length = 500)
    is_available = models.BooleanField(default=True)