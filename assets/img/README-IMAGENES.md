# 📸 INSTRUCCIONES PARA IMÁGENES

Este archivo explica cómo agregar tus imágenes al proyecto.

## 🖼️ Imágenes requeridas

Coloca TODAS estas imágenes en la carpeta `assets/img/`:

### Logo (CRÍTICO)
```
logo-pablo-testa-artista-plastico-gba-sur.png
- Dimensiones: 540x180px (ratio 3:1)
- Formato: PNG con fondo transparente
- Peso: < 50KB
- Descripción: Tu logo actual renombrado
```

### Foto del artista
```
pablo-testa-retrato.jpg
- Dimensiones: 800x800px (cuadrado)
- Formato: JPG
- Peso: < 150KB
- Descripción: Foto profesional tuya, preferiblemente trabajando
```

### Murales Exteriores (4 imágenes)
```
mural-exterior-1.jpg
mural-exterior-2.jpg
mural-exterior-3.jpg
mural-exterior-4.jpg

- Dimensiones: 1200x900px (horizontal)
- Formato: JPG
- Peso: < 200KB cada una
- Descripción: Tus mejores murales en fachadas/exteriores
```

### Murales Interiores (4 imágenes)
```
mural-interior-1.jpg
mural-interior-2.jpg
mural-interior-3.jpg
mural-interior-4.jpg

- Dimensiones: 1200x900px
- Formato: JPG
- Peso: < 200KB cada una
- Descripción: Murales en interiores, oficinas, casas, etc.
```

### Obras en Lienzo (4 imágenes)
```
lienzo-1.jpg
lienzo-2.jpg
lienzo-3.jpg
lienzo-4.jpg

- Dimensiones: 1200x900px
- Formato: JPG
- Peso: < 200KB cada una
- Descripción: Pinturas sobre lienzo, obras de galería
```

### Proyectos Comerciales (4 imágenes)
```
proyecto-comercial-1.jpg
proyecto-comercial-2.jpg
proyecto-comercial-3.jpg
proyecto-comercial-4.jpg

- Dimensiones: 1200x900px
- Formato: JPG
- Peso: < 200KB cada una
- Descripción: Trabajos para marcas, restaurantes, etc.
```

## 🛠️ Cómo optimizar las imágenes

### Opción 1: Online (gratis)
1. Ve a [TinyPNG.com](https://tinypng.com)
2. Sube tus imágenes
3. Descarga versiones comprimidas

### Opción 2: Con Photoshop
1. Abre la imagen
2. Image → Image Size → 1200x900px
3. File → Export → Save for Web
4. Formato: JPEG, Calidad: 80%
5. Guardar

### Opción 3: Herramientas gratuitas
- **GIMP** (gratis, Windows/Mac/Linux)
- **Paint.NET** (gratis, Windows)
- **Squoosh.app** (online, gratis)

## 📝 Checklist antes de subir

- [ ] Todas las imágenes tienen el nombre correcto
- [ ] Todas pesan menos de 200KB
- [ ] Todas tienen las dimensiones correctas
- [ ] El logo tiene fondo transparente (PNG)
- [ ] Las fotos están bien iluminadas y enfocadas
- [ ] Representan tu mejor trabajo

## 🚀 Cómo subir las imágenes

### Si ya tienes el repositorio en GitHub:

1. Coloca todas las imágenes en `assets/img/`
2. En terminal:
   ```bash
   git add assets/img/
   git commit -m "Add portfolio images"
   git push origin main
   ```

### Si todavía no subiste el proyecto:

1. Coloca todas las imágenes en `assets/img/`
2. Luego sigue las instrucciones del README.md para deploy

## ⚠️ IMPORTANTE

Sin las imágenes, la landing mostrará:
- Imágenes rotas (iconos de error)
- Layout afectado

**Prioridad máxima:** Logo + 1 imagen de cada categoría mínimo.

Después puedes ir agregando más imágenes progresivamente.

## 💡 Tip profesional

Para mejores resultados SEO, cada vez que agregues una imagen nueva:

1. Nómbrala descriptivamente: `mural-exterior-abstracto-lomas-5.jpg`
2. En `index.html`, actualiza el `alt`: 
   ```html
   alt="Mural exterior abstracto en tonos azules, Lomas de Zamora"
   ```

## 📞 ¿Necesitas ayuda con las imágenes?

Servicios que pueden ayudarte:
- **Fiverr**: Edición profesional de fotos
- **Canva**: Crear gráficos simples
- **Remove.bg**: Quitar fondos automáticamente
