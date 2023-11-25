# Mi Aplicación de Noticias

Este proyecto es una aplicación web de noticias desarrollada con React, Redux y Node.js con Express. La aplicación muestra una lista de noticias almacenadas en una base de datos MongoDB y utiliza Google Analytics 4 (GA4) para el seguimiento de eventos.

## Configuración y Ejecución

1. **Instalación de Dependencias:**

   ```bash
   npm install
   ```

2. **Configuración de la Base de Datos:**

   - Asegúrate de tener una instancia de MongoDB ejecutándose.

3. **Configuración de Google Analytics:**

   - Crea una propiedad de Google Analytics 4 y obtén el ID de seguimiento.
   - Coloca el ID de seguimiento en el archivo `src/App.js` donde se inicializa ReactGA.

4. **Ejecución de la Aplicación:**

   ```bash
   npm start
   ```

   La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Estructura del Proyecto

- **`src/`**: Contiene el código fuente de la aplicación React y el servidor Node.js.
  - **`components/`**: Componentes React reutilizables.
  - **`actions/`**: Acciones Redux.
  - **`reducers/`**: Reductores Redux.
  - **`api/`**: Configuración y funciones para interactuar con la API.
  - **`App.js`**: Componente principal de la aplicación.

- **`public/`**: Archivos estáticos públicos.

- **`server/`**: Configuración y archivos relacionados con el servidor Node.js.

## Tecnologías Utilizadas

- React
- Redux
- Node.js
- Express
- MongoDB
- Material-UI
- Google Analytics 4

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

## Requisitos del Sistema

- Node.js v18
