# Backend

Primero se deben instalar las librerías usando el comando

    npm install

Despues, se debe asegurar que el proceso de mongoDB este en ejecución. Con esto listo se puede iniciar el proyecto usando el comando

    npm run start

El proyecto creará una base de datos llamada `challengeSophos` y añadira diez documentos a una colección llamada `catalogItems`. Por último, la API quedará escuchando por el puerto `3001`.

La API tiene expuestos los siguientes endpoints:

 - GET - http://localhost:3001/
 Retona todos los catalogItem

- GET - http://localhost:3001/:type
	Retorna los catalogItem que cumplen con el tipo especificado en el parámetro `:type`. Este puede tener dos valores `(serie ó pelicula)`.