from rest_framework import fields,serializers
from internla_backend.models import jobseeker
from .models import *

class jobseekerSerializer(serializers.ModelSerializer):
    class Meta:
        model = jobseeker
        fields = '_all_'
class jobsSerializer(serializers.ModelSerializer):
        class Meta:
             
          model= jobs
          field = '_all_'


        
        