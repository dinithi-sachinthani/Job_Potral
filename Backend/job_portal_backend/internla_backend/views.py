from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from internla_backend.serializers import jobseekerSerializer
from internla_backend.serializers import jobsSerializer

from internla_backend.models import jobseeker
from internla_backend.models import jobs
from .models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import render
from django.core.files.storage import Storage
from rest_framework.decorators import api_view
from . serializers import *

@csrf_exempt
def jobsAPI(request,pk=0):
    if request.method=='GET':
        Jobs=jobs.object.all()
        jobs_serializer=jobsSerializer(jobs,many=True)
        return JsonResponse(jobs_serializer.data, safe=False)
 
    elif request.method=='POST':
        jobs_data=JSONParser().parse(request)
        jobs_serializer=jobseekerSerializer(data=jobs_data)
        if jobs_serializer.is_valid():
            jobs_serializer.save()
            return JsonResponse("jobs added successfull",safe=False)
        return JsonResponse("Failed to add",safe=False)
    elif request.method=='DELETE':
        Job=jobs.object.get(Id=pk)
        Job.delete()
        return JsonResponse("job deleteted",safe=False)

    
        




 

