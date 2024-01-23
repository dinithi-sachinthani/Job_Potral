from rest_framework import serializers
from .models import *


class jobseekerSerializer(serializers.ModelSerializer):
   class Meta:
      model = jobseeker
      fields = ['firstname', 'lastname', 'username']
      
       

    
