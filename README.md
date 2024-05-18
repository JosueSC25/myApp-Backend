Instrucciones para correr el proyecto:

1. Realizar el comando npm install desde la terminal.
2. Realizar el comando npm start par iniciar el proyecto
    Esto nos creara una conexion en el puerto 3000
3. Hacer uso de Postman
    Si aun no lo tienes descargado, puedes descargarlo
    desde su sitio oficial https://www.postman.com/
4. Ya en Postman podemos agregar, ver o eliminar metas y tareas
5. Debemos seleccionar el metodo que queramos usar, 
    por ejemplo para agregar una tarea debemos usar el metodo
    "POST" y colocar la ruta = localhost:3000/tasks/addTask
6. Antes de presionar el boton SEND, debemos asegurarnos que 
    en el HEADER este colocada la autorizacion 
7. La autorizacion es = galileo24
8. Teniendo esto en cuenta ya podremos hacer uso de los otros 2 
    metodos: GET Y DELETE

Actualizacion 1.1

9. Se cambio la configuracion al puerto 3001, esto para que no haya incoveniente al momento de levantar la app principal
10. Se actualizaron los status de cada peticion para que el usuario pueda interpretar de mejor manera la respueta por parte del servidor. 

Actualizacion 1.2 "Conexion base de datos"

11. Se creo la conexion a la base de datos MongoDB
12. Se modifico el codigo para que tanto las tasks como las goals hagan la query a la base de datos.