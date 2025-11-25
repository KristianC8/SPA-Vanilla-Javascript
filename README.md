# SPA de Catálogo de Videojuegos

Una Single Page Application (SPA) construida con Vanilla JavaScript que permite a los usuarios explorar un extenso catálogo de videojuegos de varias plataformas. La aplicación obtiene datos dinámicamente de la [API de Base de Datos de Videojuegos RAWG](https://rawg.io/apidocs).

## Características

- **Single Page Application**: Navegación fluida sin recargas de página.
- **Catálogo Extenso**: Explora miles de juegos de múltiples plataformas.
- **Funcionalidad de Búsqueda**: Encuentra juegos específicos por nombre.
- **Scroll Infinito**: Carga más juegos automáticamente a medida que te desplazas hacia abajo.
- **Diseño Responsivo**: Optimizado tanto para escritorio como para dispositivos móviles.
- **Modo Oscuro**: (Si aplica, basado en `BtnTheme.js`) Alterna entre temas claros y oscuros.
- **Detalles del Juego**: Ver información detallada sobre cada juego, incluyendo calificaciones, fechas de lanzamiento y capturas de pantalla.

## Stack Tecnológico

- **Core**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **API**: [RAWG.io API](https://rawg.io/apidocs)
- **Enrutamiento**: Enrutamiento basado en Hash (`#/`, `#/search`, `#/game/:id`)
- **Build/Serve**: No requiere empaquetador para desarrollo (usa módulos ES nativos), servido vía servidor HTTP simple o Netlify.

## Instrucciones de Configuración

1.  **Clonar el repositorio**

    ```bash
    git clone <url-del-repositorio>
    cd SPA
    ```

2.  **Instalar Dependencias**
    Aunque este es un proyecto de Vanilla JS, utiliza `axios` para las peticiones HTTP.

    ```bash
    npm install
    ```

3.  **Configuración de la API Key**
    Necesitas una API key de RAWG para obtener datos.

    - Crea un archivo llamado `api_key.js` en `app/helpers/API/`.
    - Agrega tu clave:
      ```javascript
      // app/helpers/API/api_key.js
      export default {
        KEY: 'TU_API_KEY_DE_RAWG'
      }
      ```
      _(Nota: Asegúrate de que este archivo coincida con la estructura de importación esperada por `rawg_api.js`)_

4.  **Ejecutar la Aplicación**
    Puedes usar una extensión de servidor en vivo simple (como en VS Code) o cualquier servidor de archivos estáticos.
    Si tienes `python` instalado:
    ```bash
    python -m http.server 8000
    ```
    Luego abre `http://localhost:8000` en tu navegador.

## Estructura de Carpetas

```
SPA/
├── app/
│   ├── components/   # Componentes de UI (Header, Main, GameCard, etc.)
│   ├── helpers/      # Funciones de utilidad y configuración de API
│   ├── assets/       # Activos estáticos (imágenes, estilos)
│   ├── App.js        # Componente principal de la aplicación
│   └── index.js      # Punto de entrada
├── index.html        # Archivo HTML principal
├── package.json      # Metadatos del proyecto y dependencias
└── README.md         # Documentación del proyecto
```
