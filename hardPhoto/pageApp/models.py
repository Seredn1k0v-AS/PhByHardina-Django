from django.db import models
from django.urls import reverse


class Person(models.Model):
    name = models.CharField(max_length=20)
    age = models.IntegerField()

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-name']
        indexes = [
            models.Index(fields=['-name'])
        ]

    def get_absolute_url(self):
        return reverse('post', kwargs={'post_slug': self.slug})