# Habitantes-Angular-Django

Procedimiento en general del despliegue. 

Para el apartado **Backend**, utilizando django rest serializer, lo que se debe hacer:
- Creamos el entorno virtual:
            python -m virtualenv venv
- Activamos el entorno virtual, el caso de linux:
	source venv/bin/activate
- Actualizamos la versión de django y instalamos los módulos que vamos a trabajar:
	- sudo pip install django --upgrade
	- pip install django-cors-headers
	- pip install djangorestframework

- Levantar el servidor con el puerto por defecto el 8000, ya que los endpoints están consumidos en angular por este puerto:
	python manage.py runserver

Si esto no funciona puede ser porque los módulos no están instalados o un error en la versión de Django, los comandos de  las installed_apps para este desarrollo son los siguientes, son los mismos dados en los pasos anteriores:

- sudo pip install django --upgrade
- pip install django-cors-headers
- pip install djangorestframework

Luego de hacer esto volvemos a intentar con el comando: python manage.py runserver.

Para el **Frontend**, si no se encuentran las librerías de node_modules, pues dentro de el proyecto se procede a:
- Ejecutar el siguiente comando para instalar las librerías faltantes:
	npm install
- Se levanta el proyecto que correrá en el puerto 4200 
	ng serve -o

La explicación de forma global sobre las tecnologías usadas se detalla así: En el apartado Back se trabajó de la forma más sencilla creando dos modelos, uno para la Ciudad que va a permitir relacionar un id en referencia a la ciudad donde pertenece el usuario o habitante. Y el otro modelo es toda la información principal del Habitante.

Cabe resaltar que la forma de cargar las ciudades, para este caso se hizo con un CRUD de manera manual, ejemplificando ciertas ciudades principales. A futuro se puede dar una mejor solución consumiendo un api de todos los departamentos y ciudades de Colombia, o también descargando alguna lista con las ciudades y realizando un recorrido por medio de bucles y directivas como *nfor en angular.

En los mismos archivos cargados en git hub, se encuentra el Diagrama de modelo de clases, el cual muestra el planteamiento que se hizo para este desarrollo, donde los habitantes están relacionados con una llave foránea para id de la ciudad con una relación de uno a muchos.

Para el apartado front end, se utilizaron librerías de bootstrap, jquery y popper.js y pop ups de sweetalert2. Además para realizar los formularios se podían aplicar tecnologías de event binding junto a una comunicación de componentes two way binding ( combinación de property binding y event binding [(ngModel)] ). 

Pero también es interesante utilizar lo que se aplicó en este desarrollo, lo cual fue trabajar con reactive forms, definiendo el modelo de usuario, se hace la construcción de un FormGroup utilizando tambien FormBuilder y todo esto nos permite relacionar los campos del formulario por medio de un formControlName, esto es una tecnología ordenada y nos permite personalizar las necesidades de acuerdo a la información de interés a completar o solicitar.  

A futuro se pueden agregar diversas validaciones en el typescript más dinámicas y estilizadas, no solo campos con directivas required o que validen ciertos regex pattern.

Se hizo una relación por medio de los servicios de front para comunicarse con el back y poder consumir todos los endpoints adecuadamente. En este caso encontramos para localhost:4200/usuarios, el listado de los usuarios y ahí mismo podemos dirigirnos por medio de botones que conectan otras urls, a agregar o editar algún usuario o eliminarlo directamente. En la dirección localhost:4200/ciudades, encontramos la lista de ciudades y botones que nos dirigen a otras urls para hacer el CRUD de ciudades. Por lo demás, en general se trabajaron formularios para agregar como editar, y páginas en forma de grid para listar la información, tratando de aplicar diseños responsivos.

Por último se adjunta un breve video de menos de 1 min, si se quiere se puede aumentar la velocidad de reproducción a x1.25, en este cortometraje se observa el funcionamiento de la aplicación.
 
https://youtu.be/vZ4TPgiqiMk 
