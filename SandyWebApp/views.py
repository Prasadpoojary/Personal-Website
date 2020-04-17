from django.shortcuts import render, redirect
from .models import  Skill, Project, Review
from django.utils import timezone
from django.http import HttpResponse
from django.db.models.signals import post_save
from django.core.mail import send_mail
# Create your views here.

def home(request):
    skill_datalist=Skill.objects.all()
    project_datelist=Project.objects.all()
    review_datalist=Review.objects.all()[::-1]
    revName_datalist=[]
    for reviewObj in review_datalist:
        revName_datalist.append(reviewObj.Review_name)
    data={'skills':skill_datalist, 'projects':project_datelist, 'reviews':review_datalist, 'reviews_names':set(revName_datalist)}
    return render(request, 'index.html',data)

def review(request):
    if request.method=='POST':
        reviewContent=request.POST['reviewContent']
        reviewName=request.POST['reviewName']
        if reviewName.isalpha():
            reviewName=reviewName.replace(reviewName[0], reviewName[0].upper())
            revObj=Review.objects.create(Review_content=reviewContent, Review_name=reviewName, Review_time=timezone.now())
            revObj.save()
            return redirect(home)
        else:

            return HttpResponse('<h1>Invalid Name</h1>')
    else:
        return redirect(home)

def sendMailSignal(sender, instance, *args, **kwargs):
    subject=str(instance)+" wrote About You"
    send_mail(subject,
              "Open this Link to see https://sandeshsandz.pythonanywhere.com/#reviews",
              'sandeshpersonalweb@gmail.com', ['prasadpoojary815@gmail.com'], fail_silently=False)


post_save.connect(sendMailSignal,sender=Review)
