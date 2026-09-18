/**
 * MEB WORLD — Fan demo.
 * Usuario simulado para la demo comercial del MVP.
 */

export const demoUser = {
  name: 'Carlos',
  pass: 'MEMBER PASS · VERIFIED',
  tier: 'TIER 1 ACCESS',
  priority: 'PRIORIDAD: RANGO ALTO (CARLOS)',
  guaranteed: 'CUPO GARANTIZADO (CARLOS)',
  members: '1,429 MIEMBROS',
} as const

export const fanContent = {
  preview: {
    label: 'EXCLUSIVE CUT · STUDIO SESSIONS',
    title: 'Guadalupe — Acoustic Studio Session',
    subtitle: 'Grabado en vivo en La Habana Vieja · Master Take 04',
    duration: '03:42',
    badge: 'MASTER TAKE 04',
  },
  gallery: {
    label: 'DIARIO VISUAL',
    count: 'ENTRY #014',
    entry: 'ENTRY #014',
    title: 'Las mil y una noches',
    note: 'Esta madrugada rompimos el molde. Lo que empezó como un murmullo en el Malecón terminó siendo el eje gravitacional de todo el disco. Nadie más ha escuchado esto todavía; ustedes son la base.',
    noteLabel: 'NOTAS PRIVADAS DEL ARTISTA',
    noteAuthor: '— MEB, 03:18 AM',
    meta: '35MM · LA HABANA · 03:18 AM',
  },
  drop: {
    label: 'PRÓXIMO DROP',
    status: 'COMING SOON',
    title: 'VINILO EDICIÓN LIMITADA 001',
    subtitle: 'Prensado en cera dorada de 180g · 300 unidades numeradas a mano',
    window: 'ACCESO EXCLUSIVO EN 48 HORAS',
    availability: 'CUPO GARANTIZADO',
  },
} as const