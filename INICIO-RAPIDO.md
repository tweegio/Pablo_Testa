# 🚀 GUÍA RÁPIDA DE INICIO - 5 PASOS

## ⚡ Start Rápido (30 minutos)

### PASO 1: Descargar y extraer (2 min)
1. Descarga el archivo `pablo-testa-landing.zip`
2. Extrae en tu computadora
3. Abre la carpeta `pablo-testa-landing`

### PASO 2: Reemplazar imágenes placeholder (10 min)
Las imágenes actuales son SVG temporales. Reemplázalas con tus fotos reales.

**Prioridad CRÍTICA:**
```
assets/img/logo-pablo-testa-artista-plastico-gba-sur.png
└─→ Tu logo (540x180px, PNG, <50KB)

assets/img/pablo-testa-retrato.jpg
└─→ Tu foto trabajando (800x800px, JPG, <150KB)
```

**Resto de imágenes:**
- Sigue las instrucciones en `assets/img/README-IMAGENES.md`
- Puedes ir agregándolas de a poco

### PASO 3: Actualizar información de contacto (5 min)

Abre `index.html` y busca/reemplaza (Ctrl+F):

```
BUSCAR → REEMPLAZAR CON

5491112345678 → tu número de WhatsApp (ej: 5491134567890)
contacto@pablotesta.com → tu email real
@pablotesta → tu usuario de Instagram
```

### PASO 4: Subir a GitHub (10 min)

**Opción A: GitHub Desktop (más fácil)**
1. Descarga [GitHub Desktop](https://desktop.github.com/)
2. File → Add Local Repository → selecciona carpeta `pablo-testa-landing`
3. Publish repository (hazlo público)
4. Listo!

**Opción B: Terminal**
```bash
cd pablo-testa-landing
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TU-USUARIO/pablo-testa-landing.git
git branch -M main
git push -u origin main
```

### PASO 5: Activar GitHub Pages (3 min)

1. Ve a tu repo en GitHub
2. Settings → Pages
3. Source: Branch `main`, folder `/root`
4. Save
5. Espera 2 minutos

Tu sitio estará en: `https://TU-USUARIO.github.io/pablo-testa-landing/`

## ✅ Checklist Post-Deploy

Después de que el sitio esté online:

- [ ] Verificar que se ve correctamente en el navegador
- [ ] Probar en móvil (responsive)
- [ ] Actualizar URLs en `index.html` con tu URL real de GitHub Pages
- [ ] Actualizar `sitemap.xml` con tu URL real
- [ ] Probar todos los botones de contacto (WhatsApp, email)
- [ ] Verificar que las imágenes cargan correctamente

## 🎯 Próximos Pasos (primera semana)

### Día 1-2: SEO Básico
- [ ] Crear Google My Business
- [ ] Subir sitemap a Google Search Console
- [ ] Optimizar bio de Instagram con link

### Día 3-4: Contenido
- [ ] Reemplazar TODAS las imágenes placeholder
- [ ] Revisar textos y personalizarlos más si es necesario
- [ ] Subir primeras 10 fotos a Instagram con link

### Día 5-7: Promoción
- [ ] Compartir landing en tus redes
- [ ] Enviar a 5 clientes previos
- [ ] Pedir primeras 3 reseñas en Google

## 📚 Documentación Completa

Para información detallada, consulta:

- **README.md** - Instrucciones completas de deploy y mantenimiento
- **docs/SEO-STRATEGY.md** - Estrategia SEO para 12 meses
- **assets/img/README-IMAGENES.md** - Guía de optimización de imágenes

## 🆘 Problemas Comunes

### "El sitio no se ve"
- Espera 5 minutos después de activar Pages
- Verifica que el repositorio sea público
- Revisa Settings → Pages que esté activado

### "Las imágenes no cargan"
- Verifica los nombres exactos de archivo
- Asegúrate de que estén en `assets/img/`
- Haz git push después de agregar imágenes

### "Los botones no funcionan"
- Actualiza los números de teléfono/emails en `index.html`
- Verifica que no haya espacios extras

## 💪 Tienes dudas?

1. Revisa primero el **README.md**
2. Busca en Google: "github pages [tu problema]"
3. Consulta [GitHub Pages Docs](https://pages.github.com/)

---

**Tiempo total estimado:** 30 minutos  
**Nivel de dificultad:** Principiante ⭐⭐☆☆☆  

¡Éxito con tu landing page! 🎨🚀
