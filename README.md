# MEB WORLD — MVP

Plataforma web/PWA del artista cubano **Mamá Estoy Brillando (MEB)**.
Demo comercial que replica con alta fidelidad el diseño de Google Stitch
(proyecto "MEB Noir Editorial"): música, video y backstage exclusivo.

## Flujo de la demo

```
HOME → GUADALUPE → BACKSTAGE → REGISTRO → FAN HOME
```

- **HOME** — Hero cinematográfico, último lanzamiento, teaser del backstage.
- **GUADALUPE** — Ficha del single: portada, reproductor, video, behind the song, créditos.
- **BACKSTAGE** — Bóveda privada con archivos cifrados y modal de acceso.
- **REGISTRO** — Formulario simulado (sin backend) con overlay de bienvenida.
- **FAN HOME** — Vista de miembro: preview desbloqueado, diario visual, drops.

## Stack

- Vite + React 18 + TypeScript (strict)
- Tailwind CSS v3 (design tokens MEB Noir: Syne / Geist / Space Mono, radio 0px, acento dorado `#ffc665`)
- React Router v6 (HashRouter)
- PWA: `manifest.webmanifest` + service worker (solo en producción)

## Quick start

```bash
npm install
npm run dev        # desarrollo
npm run build      # producción (dist/)
npm run preview    # servir el build
```

## Estructura

```
src/
  data/        # contenido separado de la UI (assets, releases, backstage, demoUser)
  components/  # Header, BottomNav, AudioPlayer, BackstageCard, ReleaseCard, ...
  pages/       # Home, Guadalupe, Backstage, Registro, FanHome
public/        # manifest, service worker, favicon
```

## Notas

- **Imágenes**: las URLs apuntan a los assets generados por Stitch
  (`src/data/assets.ts`), centralizadas para reemplazo fácil por los assets finales.
- **Registro simulado**: no hay backend ni autenticación; el usuario demo es "Carlos".
- **Unidad C: llena**: el cache npm está redirigido a `G:\Side Projects\MEB\.npm-cache`
  (ver `.npmrc`). No escribir archivos temporales en `C:\Users\...\Temp`.