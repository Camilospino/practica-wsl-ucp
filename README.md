# Práctica React con WSL

Página académica sencilla creada con React y Vite. Su diseño toma como referencia general la página del programa Tecnología en Desarrollo de Software de la Universidad Católica de Pereira, sin ser una copia.

## Ejecutar en WSL

1. Abre Ubuntu desde WSL.
2. Entra a la carpeta del proyecto:

   ```bash
   cd /mnt/c/ruta/donde/descomprimiste/practica-wsl-ucp
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor:

   ```bash
   npm run dev
   ```

5. Abre en Windows la dirección que muestra la terminal, normalmente `http://localhost:5173`.

## Comandos disponibles

- `npm run dev`: inicia el proyecto para desarrollo.
- `npm run build`: genera la versión de producción.
- `npm run preview`: permite revisar la versión de producción.

## Archivos principales

- `src/main.jsx`: contenido, componentes e interacciones.
- `src/styles.css`: colores, diseño adaptable y estilos.
- `package.json`: dependencias y comandos del proyecto.

## Ideas para la práctica

- Cambiar los textos y colores.
- Agregar los semestres restantes.
- Dividir la página en componentes.
- Crear una nueva sección de docentes.
- Reemplazar el enlace de contacto por un formulario.
