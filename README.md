# Proyecto ASTRA - Cartel de Película

## Instrucciones para subir imágenes

Para que el cartel funcione correctamente, necesitas subir las siguientes imágenes:

1. Crea una carpeta `public/images` (ya creada automáticamente)
2. Sube las siguientes imágenes a esa carpeta:
   - `Imagen 1.jpg` - Primera imagen de fondo
   - `Imagen 2.jpg` - Segunda imagen de fondo
   - `imagen 3.jpg` - Tercera imagen de fondo
   - `imagen 4.jpg` - Cuarta imagen de fondo
   - `Imagen 5.jpg` - Quinta imagen de fondo
   - `Imagen 6.jpg` - Sexta imagen de fondo
   - `Imagen 7.jpg` - Séptima imagen de fondo
   - `Imagen 8.jpg` - Octava imagen de fondo
   - `logo.jpg` - Logo del proyecto

3. Para añadir más imágenes:
   - Sube las nuevas imágenes a la carpeta `/public/images/`
   - Añade las rutas a las nuevas imágenes en el archivo `src/App.tsx` en el array `localImages`
   - Ejemplo: Si añades una imagen llamada "NuevaImagen.jpg", agrega la línea `'/images/NuevaImagen.jpg',` al array

## Características del cartel

- Título "ASTRA" con efecto de brillo
- Eslogan "UN VIAJE A LO DESCONOCIDO"
- Producción "HYPERDRIVE REBELS"
- Lista del reparto y equipo
- Rotación automática de imágenes de fondo
- Efecto de partículas para ambiente espacial
- Texto con efecto de máquina de escribir mostrando las herramientas de IA utilizadas
- Indicadores de navegación para cambiar manualmente entre imágenes