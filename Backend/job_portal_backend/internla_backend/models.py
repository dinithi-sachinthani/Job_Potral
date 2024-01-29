from django.db import models

# Create your models here.
<<<<<<< Updated upstream
class jobseeker(models.Model):
    firstname=models.CharField(max_length = 255)
    lastname=models.CharField(max_length = 255)
    address=models.CharField(max_length = 255)

class company(models.Model):
    company_name=models.CharField(max_length = 255)
=======


class jobs(models.Model):
    id = models.BigAutoField(primary_key=True)
    job_title=models.CharField(max_length = 255) 
    job_category=models.CharField(max_length = 255)
    despription = models.CharField(max_length = 500)
    is_available = models.BooleanField(default=True)

   



   
 





     

>>>>>>> Stashed changes
        
