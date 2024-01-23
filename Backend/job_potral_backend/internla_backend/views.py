from django.shortcuts import render
from rest_framework.views import APIView
from.models import *
from.serializers import *
from rest_framework.response import Response

class ReactView(APIView):
    def get(self, request):
        output = [{"firstname":output.firstname,
                   "lastname":output.lastname,
                   "username":output.username}
                   for output in jobseeker.objects.all()]
        return Response(output)
    def post(self, request):
        serializers = jobseekerSerializer(data=request.data)
        if serializers.is_valid(raise_exception=True):
            

