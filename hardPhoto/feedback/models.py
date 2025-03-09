from django.db import models

class Comment(models.Model):
    user_name = models.CharField(max_length=255)
    user_text = models.TextField()
    pub_time = models.DateTimeField(auto_now_add=True)
    user_photo = models.ImageField(upload_to='photos/', default=None)  # Путь сохранения файлов

    def __str__(self):
        return self.user_name