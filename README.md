<h1 align="center">Hola 🖖🏽, Soy Aldo Zunino</h1>
<h3 align="center">Un Desarrollador Full Stack Trainee de Argentina</h3>

# 💫 Sobre Mi:

🔭 Actualmente me encuentro trabajando de manera Freelance.

🌱 Me encuentro aprendiendo sobre: HTML5, CSS3, JavaScript, NodeJS, React, Angular, Whimsical, Figma, Bootstrap, Tailwind, GIT, GitHub, SASS, MySQL, EXPRESS, Seo.

📫 Mi mail para contacto es: zunino.aldo@gmail.com

👨‍💻 La gran mayoría de mis proyectos van a estar disponibles en: https://github.com/ZuninoAldo

⚡ Usualmente suelo ser: proactivo, cooperador, divertido, apasionado, perseverante, paciente, entre otras cosas.



## 🌐 Encontrame en:
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/aldo-leonel-zunino-becerra) 

# 💻 Hard Skills:
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![PowerShell](https://img.shields.io/badge/PowerShell-%235391FE.svg?style=for-the-badge&logo=powershell&logoColor=white) ![Windows Terminal](https://img.shields.io/badge/Windows%20Terminal-%234D4D4D.svg?style=for-the-badge&logo=windows-terminal&logoColor=white) ![GithubPages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white) ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![WordPress](https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white) ![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![GitLab](https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white) ![Gitpod](https://img.shields.io/badge/gitpod-f06611.svg?style=for-the-badge&logo=gitpod&logoColor=white) ![Home Assistant](https://img.shields.io/badge/home%20assistant-%2341BDF5.svg?style=for-the-badge&logo=home-assistant&logoColor=white) ![Portfolio](https://img.shields.io/badge/Portfolio-%23000000.svg?style=for-the-badge&logo=firefox&logoColor=#FF7139)

# 📊 GitHub Estadísticas:
![](https://github-readme-stats.vercel.app/api?username=ZuninoAldo&theme=dark&hide_border=false&include_all_commits=true&count_private=true)

![](https://github-readme-streak-stats.herokuapp.com/?user=ZuninoAldo&theme=dark&hide_border=false)

![](https://github-readme-stats.vercel.app/api/top-langs/?username=ZuninoAldo&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact)

## 🏆 GitHub Trofeos:
![](https://github-profile-trophy.vercel.app/?username=ZuninoAldo&theme=radical&no-frame=false&no-bg=true&margin-w=4)

### 🔝 Top Contribución Repo
![](https://github-contributor-stats.vercel.app/api?username=ZuninoAldo&limit=5&theme=dark&combine_all_yearly_contributions=true)

---

[![](https://visitcount.itsvg.in/api?id=ZuninoAldo&icon=2&color=13)](https://visitcount.itsvg.in)

Backend de E-commerce - Entrega Final

Este proyecto es el backend para una aplicación de e-commerce, desarrollado con Node.js, Express y MongoDB. Implementa una arquitectura por capas profesional, gestión de usuarios con autenticación y autorización por roles (JWT y Passport), y una lógica de compra completa.

🚀 Cómo Iniciar el Proyecto

Sigue estos pasos para levantar el servidor en tu entorno local.

Requisitos Previos

Asegúrate de tener instalado el siguiente software:

Node.js (versión 16 o superior recomendada)

npm (generalmente se instala con Node.js)

MongoDB o una cuenta de MongoDB Atlas para la base de datos.

Postman o un cliente API similar para probar los endpoints.

1. Clonar el Repositorio

Bash

git clone https://github.com/ZuninoAldo/Backend-II-Zunino

cd nombre-de-tu-repo

2. Instalar Dependencias

Ejecuta el siguiente comando para instalar todos los paquetes necesarios definidos en package.json.

Bash

npm install

3. Configuración de Variables de Entorno

Este proyecto utiliza variables de entorno para manejar datos sensibles como las credenciales de la base de datos y los secretos de autenticación.

Puedes solicitarlas al creador del proyecto mediante los medios de comunicación disponibles en el proyecto y en el perfil de GitHub.

4. Ejecutar el Servidor
Una vez configurado, puedes iniciar el servidor con el siguiente comando:

Bash

npm start

O si tienes un script de desarrollo (ej: con nodemon):

Bash

npm run dev

El servidor estará corriendo en http://localhost:PUERTO, donde PUERTO es el valor que definiste en tu archivo .env.

5. Probar los Endpoints
Usa Postman para interactuar con la API. Algunos de los endpoints principales son:

POST /api/sessions/register - Para registrar un nuevo usuario.

POST /api/sessions/login - Para iniciar sesión y obtener el token JWT.

GET /api/sessions/current - Para verificar los datos del usuario logueado.

POST /api/products - Para crear un producto (requiere rol de admin).

POST /api/carts/:cid/product/:pid - Para agregar un producto al carrito (requiere rol de user).

POST /api/carts/:cid/purchase - Para finalizar una compra.

Muchas Gracias.
ZuninoAldo.