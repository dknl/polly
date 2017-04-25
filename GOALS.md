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


##### Create App

`django-admin startproject api`



### QUESTIONS

How do we handle packages and versions, Ruby has gems a.k.a. RubyGems?

 `pip install -r requirements.txt`

 `pip freeze > requirements.txt`

 Found these commands to handle versions and setup virtualenv.

 > " When used in combination with the virtualenv package, you can reliably create project Python environments with a project's required dependencies."




### RESOURCES

* [Virtual Environments](http://python-guide-pt-br.readthedocs.io/en/latest/dev/virtualenvs/)

* [Django Rest Framework](http://www.django-rest-framework.org/)

* [Git Ignore - Python](https://raw.githubusercontent.com/github/gitignore/master/Python.gitignore)


### VERSIONS

* python 3.6.1
* pip 9.0.1
