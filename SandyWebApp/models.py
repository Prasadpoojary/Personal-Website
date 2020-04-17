from django.db import models

# Create your models here.
class Skill(models.Model):
    Skill_num=models.IntegerField(null=False)
    Skill_name=models.CharField(max_length=100,null=False)
    Skill_percent=models.IntegerField(null=False)

    def __str__(self):
        return  str(self.Skill_num)+' ) '+self.Skill_name+' - '+str(self.Skill_percent)

class Project(models.Model):
    Project_num=models.IntegerField(null=False)
    Project_name=models.CharField(max_length=30,null=False)
    Project_detail=models.TextField(max_length=60,null=False)
    Project_tech=models.CharField(max_length=100,null=False)
    Project_link=models.URLField(null=True,blank=True)

    def __str__(self):
        return self.Project_name

class Review(models.Model):
    Review_time=models.DateTimeField()
    Review_content=models.TextField(max_length=200)
    Review_name=models.CharField(max_length=50)

    def __str__(self):
        return self.Review_name

