# Proyecto Final

Este proyecto es un ecommerce desarrollado con React y firebase. El ecommerce es de Lofstore, un emprendimiento mio el cual se dedica a vender ropa, por lo tanto todo el proyecto esta relacionado a eso.

# Funcionalidades

- **Home:** Muestra un banner el cual contiene un carrusel con 3 imagenes y luego se encuentra un listado de 5 productos con nombre, precio, SKU y descripción.
- **Detalle del producto:** Página individual de cada producto, con información detallada sobre nombre,precio,sku y descripción de cada producto.
- **Registro de usuario:** Formulario con nombre, apellido, email y contraseña conectado con firebase.
- **Login:** Inicio de sesión mediante email y contraseña conectado con firebase.
- **Persistencia en base de datos:** Los datos se almacenan en Firebase Firestore.
- **Contacto:** Apartado de información y preguntas frecuentes.

# Tecnologías utilizadas

- React
- React Router DOM
- Firebase (Authentication y Firestore)
- CSS
- MUI (Material UI)

## Estructura del proyecto
Mis componentes se encuentran dentro de src en la carpeta components. Cada componente esta dentro de su respectiva carpeta con su archivo jsx y css.

## Configuracion de firebase
const firebaseConfig = {
  apiKey: "AIzaSyARTKctavbKrnMxDPKPFZ9aj18wjtT8psE",
  authDomain: "productos-utn-curso.firebaseapp.com",
  projectId: "productos-utn-curso",
  storageBucket: "productos-utn-curso.firebasestorage.app",
  messagingSenderId: "122011441859",
  appId: "1:122011441859:web:455c61e7954758a189a076"
};

##  Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/gastondls/tp-obligatorio-2
cd tp-obligatorio-2

## Ejecutar la app
npm run dev

## Link al repositorio
https://github.com/gastondls/tp-obligatorio-2


