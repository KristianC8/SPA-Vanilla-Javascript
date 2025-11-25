# Documentación de Arquitectura

Este documento proporciona una visión general de alto nivel de la arquitectura para la SPA de Catálogo de Videojuegos.

## Patrón de Diseño

El proyecto sigue una **Arquitectura Basada en Componentes** utilizando Vanilla JavaScript. Imita la estructura de frameworks modernos (como React) pero implementa la lógica de forma nativa.

- **Punto de Entrada**: `index.html` carga `app/index.js`.
- **Inicialización**: `index.js` escucha el evento `DOMContentLoaded` para montar el componente `App` en el elemento DOM con `id="root"`.

## Enrutamiento

El enrutamiento se maneja del lado del cliente utilizando el patrón **HashRouter**.

- **Archivo**: `app/components/Router.js`
- **Mecanismo**:
  - La aplicación escucha el evento `hashchange` en el objeto `window`.
  - Basado en `window.location.hash`, la función `Router` determina qué componentes renderizar en la vista principal.
  - **Rutas**:
    - `#/`: Página de inicio (Mejores Juegos)
    - `#/search`: Resultados de búsqueda
    - `#/Games`: Biblioteca de juegos
    - `#/Platforms`: Listado de plataformas
    - `#/game/:id` (implícito): Vista de detalles del juego

## Estructura de Componentes

Los componentes se implementan como **Funciones de JavaScript** que retornan elementos HTML (nodos DOM) o cadenas que representan HTML.

- **Ubicación**: `app/components/`
- **Componentes Clave**:
  - `App.js`: El componente raíz que orquesta el diseño (Header, Main, Footer).
  - `Header.js`: Contiene la navegación y la búsqueda.
  - `Main.js`: El contenedor donde el `Router` inyecta contenido dinámico.
  - `GameCard.js`: Componente reutilizable para mostrar vistas previas de juegos individuales.
  - `Loader.js`: Retroalimentación visual durante la obtención asíncrona de datos.

## Flujo de Datos

Los datos se obtienen de la API de RAWG utilizando JavaScript asíncrono (`async/await`) y `axios`.

- **Helpers de API**: `app/helpers/rawg_api.js` define los endpoints de la API.
- **Obtención (Fetching)**: `app/helpers/ajax.js` (implícito) o llamadas directas de fetch dentro de los componentes manejan las peticiones HTTP.
- **Gestión de Estado**:
  - **Estado Local**: Gestionado dentro de los componentes o mediante variables de clausura (closure).
  - **Estado Global**: Uso mínimo de `localStorage` para persistir preferencias (como el tema o el estado del menú).
  - **Estado de la URL**: El hash de la URL actúa como la fuente de verdad para la vista actual.

## Scroll Infinito

La aplicación implementa un patrón de scroll infinito para cargar más juegos a medida que el usuario se desplaza hacia abajo.

- **Archivo**: `app/helpers/infite_scroll.js`
- **Lógica**: Detecta cuando el usuario llega al final de la página y dispara una nueva petición a la API para obtener la siguiente página de resultados.
