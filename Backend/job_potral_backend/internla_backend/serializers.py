from rest_framework import serializers
from internla_backend.models import jobseeker

class jobseekerSerializer(serializers.ModelSerializer):
   class Meta:
      model = jobseeker
      fields = '_all_'

    
