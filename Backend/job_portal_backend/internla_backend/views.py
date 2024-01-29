from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from internla_backend.serializers import jobseekerSerializer
<<<<<<< Updated upstream
from internla_backend.models import jobseeker
=======
from internla_backend.serializers import jobsSerializer


from internla_backend.models import jobs
from .models import *
from rest_framework import viewsets
from rest_framework.response import Response
from django.shortcuts import render
from django.core.files.storage import Storage
from rest_framework.decorators import api_view
from . serializers import *
>>>>>>> Stashed changes

# class viewJobs(viewsets.ModelViewset):
#     serializer_class = jobsSerializer
#     queryset = jobs.objects.all();

@csrf_exempt
def jobseekerApi(request,id=0):
    if request.method=='GET':
<<<<<<< Updated upstream
        jobseeker = jobseeker.objects.all()
        jobseeker_serializer= jobseekerSerializer(jobseeker,many=True)
        return JsonResponse(jobseeker_serializer.data,safe=False)
=======
        Jobs=jobs.object.all()
        jobs_serializer=jobsSerializer(Jobs,many=True)
        return JsonResponse(jobs_serializer.data, safe=False)
 
>>>>>>> Stashed changes
    elif request.method=='POST':
        jobseeker_data=JSONParser().parse(request)
        jobseeker_serializer=jobseekerSerializer(data=jobseeker_data)
        if jobseeker_serializer.is_valid():
            jobseeker_serializer.save()
            return JsonResponse('Added Successfully',safe=False)
        return JsonResponse('Failed to Add',safe=False)
    elif request.method=='PUT':
        jobseeker_data=JSONParser().parse(request)
        jobseeker=jobseeker.objects.get(id=id)
        jobseeker_serializer=jobseekerSerializer(jobseeker,data=jobseeker_data)
         

