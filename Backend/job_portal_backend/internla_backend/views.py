from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from internla_backend.serializers import jobseekerSerializer
from internla_backend.models import jobseeker

@csrf_exempt
def jobseekerApi(request,id=0):
    if request.method=='GET':
        jobseeker = jobseeker.objects.all()
        jobseeker_serializer= jobseekerSerializer(jobseeker,many=True)
        return JsonResponse(jobseeker_serializer.data,safe=False)
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
         

