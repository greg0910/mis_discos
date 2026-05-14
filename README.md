# La Bóveda Negra 💽

**La Bóveda Negra** (anteriormente _Mis Discos_) es una aplicación web interactiva desarrollada en **React**, diseñada para exhibir una colección clandestina de álbumes musicales de culto. Está enfocada en géneros como el Hardcore, Post Hardcore, Pop Punk y Hip Hop.

La interfaz destaca por su estética oscura, brutalista y agresiva (estilo "Hardcore/Gánster"), ofreciendo una experiencia inmersiva y altamente responsiva tanto en computadoras de escritorio como en dispositivos móviles.

## ✨ Características Principales

- **Diseño "Dark/Brutalist":** Interfaz de alto impacto visual con fondos de cristal ahumado oscuro, acentos en rojo vibrante, sombras sólidas y un efecto _Glitch_ animado en el título principal.
- **Filtro de Géneros Dinámico:** Menú de navegación pegajoso (Sticky) que permite filtrar discos instantáneamente. Incluye un menú desplegable totalmente personalizado para dispositivos móviles.
- **Galería Interactiva:** Modal de información detallada que incluye:
  - Soporte para múltiples imágenes por álbum (Portada, Contraportada, Inserts).
  - Carrusel de navegación con botones en computadora y soporte de gestos táctiles (_Swipe_) en celular.
  - Sinopsis descriptiva y metadatos completos del álbum.
- **Alta Performance:** Lógica de precarga inteligente de imágenes (Preloading) que se activa al pasar el ratón o al primer toque. Combinado con scripts de Python para comprimir y optimizar las imágenes del catálogo.
- **Enlaces de Streaming Integrados:** Botones personalizados con logos SVG nativos para redirigir directamente a **Spotify, Apple Music y Tidal**.
- **UX Móvil Optimizada:** Todo el diseño se adapta de manera ultra-compacta para asegurar que la información completa se lea cómodamente sin perder funciones ni entorpecer el espacio visual.

## 🛠️ Tecnologías Utilizadas

- **React.js** (Vite)
- **Vanilla CSS** (Variables CSS, Animaciones Keyframes, Flexbox/Grid, Responsive Media Queries)
- **JSON** (Base de datos estática nativa)

## 📁 Estructura del Proyecto

```text
mis_discos/
├── public/
│   └── Discos/          # Imágenes optimizadas de los álbumes (Organizadas por ID)
├── src/
│   ├── components/      # Componentes UI reutilizables (AlbumCard, AlbumModal, Icons)
│   ├── json/            # Base de datos local (discos.json)
│   ├── pages/           # Vistas y páginas principales (Home.jsx, Home.css)
│   └── ...
└── README.md
```

## 📝 Gestión de Datos

El catálogo se gestiona fácilmente a través del archivo `src/json/discos.json`. Para añadir un nuevo disco a la bóveda, simplemente agrega un nuevo bloque JSON al arreglo siguiendo esta estructura:

```json
{
  "id": 32,
  "banda": "Nombre de la Banda",
  "album": "Título del Álbum",
  "año": 2026,
  "genero": "Hardcore",
  "portada": "/Discos/32/album_32.jpg",
  "imagenes": ["/Discos/32/front_32.jpg", "/Discos/32/rear_32.jpg"],
  "Descripcion": "Reseña o sinopsis detallada del disco...",
  "link": [
    {
      "Spotify": "url_spotify",
      "Apple Music": "url_apple",
      "Tidal": "url_tidal"
    }
  ]
}
```

---

_Diseñado y construido para los verdaderos amantes del formato físico y la crudeza del mundo underground._
