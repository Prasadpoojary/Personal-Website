from django.contrib import admin
from .models import Skill, Project,Review

#
admin.site.site_header='Sandesh Sandy'
admin.site.register(Skill)
admin.site.register(Project)
admin.site.register(Review)