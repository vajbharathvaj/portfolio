from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def renderfront(request, *args, **kwargs):
	return render(request, 'front/index.html')


