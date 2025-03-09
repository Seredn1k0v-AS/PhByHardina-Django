from django import forms
from .models import Comment

class AddPostForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ["user_name","user_text","user_photo"]
        widgets = {
            'user_name': forms.TextInput(attrs={'placeholder': 'Ваше имя'}),
            'user_text': forms.Textarea(attrs={'placeholder': 'Ваш комментарий'}),
            # 'user_photo': forms.ImageField(attrs={'placeholder': 'Ваше фото'}),
            'user_photo': forms.ClearableFileInput(attrs={'class': 'form-control-file', 'id': 'fileInput'}),
        }