from django.shortcuts import render
from rest_framework import viewsets
from .models import Jobs
from .serializers import JobsSerializer
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
class viewJobs(viewsets.ModelViewSet):
    serializer_class = JobsSerializer
    queryset = Jobs.objects.all();

@csrf_exempt
def jobsAPI(request,pk=0):
    if request.method=='GET':
        Jobs=Jobs.object.all()
        jobs_serializer=JobsSerializer(Jobs,many=True)
        return JsonResponse(jobs_serializer.data, safe=False)
 
    elif request.method=='POST':
        jobs_data=JSONParser().parse(request)
        jobs_serializer=JobsSerializer(data=jobs_data)
        if jobs_serializer.is_valid():
            jobs_serializer.save()
            return JsonResponse("jobs added successfull",safe=False)
        return JsonResponse("Failed to add",safe=False)
    elif request.method=='DELETE':
        Job=Jobs.object.get(Id=pk)
        Job.delete()
        return JsonResponse("job deleteted",safe=False)
