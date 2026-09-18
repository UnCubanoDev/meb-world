/**
 * MEB WORLD — Lanzamientos.
 * Contenido del single GUADALUPE (único lanzamiento del MVP).
 * Los campos marcados como [DEMO] son placeholders claramente identificados.
 */

import { assets } from './assets'

export interface Release {
  id: string
  title: string
  artist: string
  date: string
  album: string
  albumYear: string
  type: string
  artwork: string
  duration: string
  catalog: string
  rpm: string
  master: string
  description: string
  specs: { label: string; value: string }[]
  video: {
    title: string
    duration: string
    director: string
    still: string
    badge: string
  }
  behindTheSong: {
    label: string
    count: string
    chapters: {
      id: string
      tag: string
      title: string
      meta: string
      description: string
      image?: string
      action: string
      actionIcon: string
      locked?: boolean
    }[]
  }
  credits: { role: string; name: string }[]
}

export const releases: Release[] = [
  {
    id: 'guadalupe',
    title: 'GUADALUPE',
    artist: 'Mamá Estoy Brillando',
    date: '03.07.2026',
    album: 'LAS MIL Y UNA NOCHES',
    albumYear: '2025',
    type: 'SINGLE',
    artwork: assets.guadalupeArtwork,
    duration: '03:42',
    catalog: 'MEB-026-HQ',
    rpm: '45 RPM',
    master: 'MASTER AUDIO 96kHz',
    description:
      'Una inmersión sonora y visual en el misticismo nocturno. \u2018Guadalupe\u2019 marca la nueva era conceptual de Mamá Estoy Brillando, entrelazando raíces cubanas con texturas electrónicas de vanguardia y poesía visceral.',
    specs: [
      { label: 'RITMO Y RAÍZ', value: 'Afrocubano / Minimal' },
      { label: 'TONALIDAD', value: 'Re Menor / 118 BPM' },
    ],
    video: {
      title: 'GUADALUPE (Official Music Video)',
      duration: '04:12',
      director: 'Dir. Rodrigo Serrano',
      still: assets.videoStill,
      badge: '4K UHD',
    },
    behindTheSong: {
      label: '03 / ARCHIVO',
      count: '3 CAPÍTULOS',
      chapters: [
        {
          id: 'fotografia',
          tag: '01 / SESIÓN',
          title: 'Fotografía',
          meta: '14 FOTOS INÉDITAS',
          description:
            'Archival studio sessions & chiaroscuro stills capturando la transición nocturna del imaginario visual de La Habana.',
          image: assets.photoSession,
          action: 'Explorar Galería',
          actionIcon: 'arrow_forward',
        },
        {
          id: 'making-of',
          tag: '02 / RODAJE',
          title: 'Making Of',
          meta: 'VIDEO DOC · 08:30 MIN',
          description:
            'Visual production notes & directing the scene. Apuntes de guión original, desgloses escénicos y diseño lumínico.',
          image: assets.makingOf,
          action: 'Ver Notas',
          actionIcon: 'play_circle',
        },
        {
          id: 'boveda-vip',
          tag: '03 / BÓVEDA VIP',
          title: 'Contenido Exclusivo',
          meta: '',
          description:
            'Secret acoustic vocal takes y maquetas en cinta de carrete abierto registradas a las 4:00 AM en Centro Habana. Acceso reservado para portadores del pase Backstage.',
          action: 'Desbloquear',
          actionIcon: 'lock',
          locked: true,
        },
      ],
    },
    credits: [
      { role: 'DIRECCIÓN & VISIÓN', name: 'Rodrigo Serrano & Mamá Estoy Brillando' },
      { role: 'PRODUCCIÓN MUSICAL', name: 'Alain Pérez, Kike Delgado & MEB Lab' },
      { role: 'ARTE Y FOTOGRAFÍA', name: 'Camila Valdés (Havana / Paris)' },
      { role: 'MEZCLA & MÁSTER INMERSIVO', name: 'Sterling Sound · Dolby Atmos Edition' },
    ],
  },
]

export const featuredRelease = releases[0]