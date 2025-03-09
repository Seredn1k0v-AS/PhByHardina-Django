from django.http import HttpResponse
from django.shortcuts import render
from .models import Person


def index(request):
    return render(request, 'pageApp/index.html')

def price(request):
    return render(request, 'pageApp/price.html')



# # получаем все объекты
# people = Person.objects.all()
# print(people.query)
#
# # получаем объекты с возрастом, равным 31
# people = people.filter(age = 31)
# print(people.query)
#
# # здесь происходит выполнения запроса в БД
# for person in people:
#     print(f"{person.id}.{person.name} - {person.age}")
