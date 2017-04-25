## JouwOmgeving

##### DoD
" create polling system based on [tutorial](https://docs.djangoproject.com/en/1.11/intro/tutorial01/) and connect a React based front-end to it"



### GOALS

Before Weekend:

![Reading Rainbow](https://media.giphy.com/media/bslzwg9Qkl0aY/giphy.gif)


After weekend:

* Setup Python environment ( Python 3.6, pip and more )
* Learn to manage env virtualenv
* Install Django, DjangoRestFramework
* Build / setup polls tutorial
  * Write Cucumber spec
  * Create Api with DjangoRestFramework
* build front-end application with React, ES6, SASS


### LOG

#### Setup virtual env

`python3 -m venv env`

`source env/bin/activate`

`python --version`

`pip --version`

`deactivate`


##### Install Django

`pip install django`

`python -m django --version`


##### Create project

`django-admin startproject api`


##### Create sub-app / module

`python manage.py startapp polls`

> Let op geen django-admin maar python!

##### Migrate database

`python manage.py migrate`


##### Make migrations for pluggable app

`python manage.py makemigrations polls`


##### Create schema for version and migration again

`python manage.py sqlmigrate polls 0001`

`python manage.py migrate`


##### Run shell

`python manage.py shell`



##### Added admin and DjangoRestFramework

> Now i'm moving from building views into building JSON api



### QUESTIONS

1. How do we handle packages and versions, Ruby has gems a.k.a. RubyGems?

 `pip install -r requirements.txt`

 `pip freeze > requirements.txt`

 Found these commands to handle versions and setup virtualenv.

 > " When used in combination with the virtualenv package, you can reliably create project Python environments with a project's required dependencies."

2. Why does Django prefix fields with model name?



### RESOURCES

* [Virtual Environments](http://python-guide-pt-br.readthedocs.io/en/latest/dev/virtualenvs/)

* [Django Rest Framework](http://www.django-rest-framework.org/)

* [Git Ignore - Python](https://raw.githubusercontent.com/github/gitignore/master/Python.gitignore)


### VERSIONS

* python 3.6.1
* pip 9.0.1
