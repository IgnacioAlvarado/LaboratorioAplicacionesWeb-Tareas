# LaboratorioAplicacionesWeb-Tareas
Tareas Laboratorio de Aplicaciones Web

## ¿Cómo correr la Tarea 3?

1.Abrir una terminal en la carpeta raiz del proyecto LabWeb-Tarea 3\actividad-archivos-iniciales

2.Correr "npm i"

3.Correr "npm run devstart" para correr el servidor en localhost:3000 y acceder a la página (Es requerido que esté activo para también hacer las pruebas del API de bicicletas)

4.Para correr las pruebas, en otra terminal en el directorio raiz correr el comando "npm run mochatest"

5. Para probar la funcionalidad de login se puede crear un usuario en la página en la sección de registrarse

  5,5. Luego ya se puede regresar a Home y acceder a la página de Login
  
  5,6. Sin embargo si el usuario no es verificado al momento de introducir la información del usuario, el sistema lo redigirá a la página de Login, igualmente si los datos son incorrectos.
  
  5,7. Acceder a https://ethereal.email/login e introducir las credenciales del usuario que se encuentra en el archivo mailer.js en la carpeta actividad-archivos-iniciales\mailer y dirigirse a la sección de messages
  
  5,8. Dar clic en el mensaje dirigido al correo introducido en el registro y acceder al link que se proporciona en ese correo, esto llevara al home de la página.
  
  5,9. Ya con esto se puede ir a Login e introducir los datos, si los datos son correctos y el usuario está verificado debe redirigir al Home
