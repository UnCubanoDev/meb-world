/**
 * MEB WORLD — Contenido Backstage (archivo cifrado).
 * Contenido exclusivo del MVP. Los items bloqueados muestran el
 * tratamiento visual definido por Stitch.
 */

import { assets } from './assets'

export interface BackstageItem {
  id: string
  dossier: string
  status: string
  title: string
  subtitle: string
  kind: 'preview' | 'gallery' | 'demos'
  locked: boolean
  lockLabel: string
  actionLabel: string
  actionIcon: string
  image?: string
  imageAlt?: string
  images?: { src: string; label: string }[]
  meta?: string
}

export const backstageItems: BackstageItem[] = [
  {
    id: 'nuevo-preview',
    dossier: 'DOSSIER // ARCHIVE-01',
    status: 'RESTRICTED 4K TEASER',
    title: 'NUEVO PREVIEW',
    subtitle: 'Próximo lanzamiento · Teaser confidencial 4K',
    kind: 'preview',
    locked: true,
    lockLabel: 'Disponible próximamente',
    actionLabel: 'SECRET KEY',
    actionIcon: 'key',
    image: assets.previewTeaser,
    imageAlt:
      'High-fashion moody cinematic film still of artist MEB illuminated by amber studio backlights, silhouette against haze and architectural concrete surfaces, editorial high contrast 35mm film grain, nocturnal and mysterious Havana energy.',
  },
  {
    id: 'behind-the-scenes',
    dossier: 'DOSSIER // ROLL #049',
    status: '35MM ANALOG VAULT',
    title: 'BEHIND THE SCENES',
    subtitle: 'Fotografías y videos exclusivos · Camera roll personal',
    kind: 'gallery',
    locked: true,
    lockLabel: 'ROLL #049 — ENCRYPTED',
    actionLabel: '24 ARCHIVOS',
    actionIcon: 'lock',
    images: [
      {
        src: assets.roll049a,
        label: 'EXP 12A',
      },
      {
        src: assets.roll049b,
        label: 'EXP 13A',
      },
    ],
  },
  {
    id: 'demos',
    dossier: 'AUDIO TAPE // MASTER-SESSION',
    status: 'CONFIDENTIAL STEMS',
    title: 'DEMOS',
    subtitle: 'Fragmentos de canciones inéditas',
    kind: 'demos',
    locked: true,
    lockLabel: 'MASTER TAPE — ENCRYPTED',
    actionLabel: 'STEMS',
    actionIcon: 'graphic_eq',
    meta: 'MASTER TAPE',
  },
]

export const backstageStats = [
  { value: '14 ITEMS', label: 'UNRELEASED' },
  { value: 'MASTER', label: 'AUDIO TAPE' },
  { value: '35MM', label: 'ANALOG VAULT' },
] as const

export const backstageBenefits = [
  {
    icon: 'movie',
    title: 'PREVIEWS INÉDITOS',
    description: 'Avances en 4K antes del lanzamiento oficial',
  },
  {
    icon: 'photo_library',
    title: 'BÓVEDA PRIVADA',
    description: 'Tomas, grabaciones y fotos 35mm sin censura',
  },
  {
    icon: 'album',
    title: 'DROPS EXCLUSIVOS',
    description: 'Acceso prioritario a vinilos firmados y ediciones limitadas',
  },
] as const