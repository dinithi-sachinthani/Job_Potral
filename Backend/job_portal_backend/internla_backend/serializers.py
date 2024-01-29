from rest_framework import serializers
<<<<<<< Updated upstream
from internla_backend.models import jobseeker
=======
from internla_backend.models import jobs
from .models import *
>>>>>>> Stashed changes

class jobseekerSerializer(serializers.ModelSerializer):
    class Meta:
        model = jobs
        fields = '_all_'
        