import { Link } from 'react-router-dom'
import Icon from './Icon'
import type { Release } from '../data/releases'

interface ReleaseCardProps {
  release: Release
  onPlay?: () => void
  onVideo?: () => void
}

/**
 * Tarjeta de lanzamiento — sección ÚLTIMO LANZAMIENTO del HOME.
 * Reproduce la composición flotante de Stitch (artwork + metadata + CTAs).
 */
export default function ReleaseCard({ release, onPlay, onVideo }: ReleaseCardProps) {
  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Glow ambiental */}
      <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl pointer-events-none opacity-60"></div>

      {/* Artwork */}
      <Link
        to={`/${release.id}`}
        className="relative w-full aspect-square overflow-hidden rounded-lg shadow-card border border-white/10 group"
      >
        <img
          alt={`${release.title} single artwork`}
          src={release.artwork}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"></div>
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-sm">
          <span className="font-mono text-[10px] text-primary tracking-[0.18em]">{release.date}</span>
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-sm">
          <Icon name="album" filled className="text-[15px] text-primary" />
          <span className="font-mono text-[10px] text-white/90 tracking-[0.15em] uppercase">
            {release.album}
          </span>
        </div>
      </Link>

      {/* Metadata + CTAs */}
      <div className="w-full pt-6 flex flex-col">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <Link
              to={`/${release.id}`}
              className="font-display text-[30px] font-extrabold uppercase text-white tracking-tight leading-none hover:text-primary transition-colors"
            >
              {release.title}
            </Link>
            <span className="font-mono text-[11px] text-on-surface-variant mt-2 tracking-wide">
              Prod. MEB &amp; El Cuarto Studio · {release.duration}
            </span>
          </div>
          <button
            aria-label="Añadir a favoritos"
            className="w-12 h-12 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors border border-white/10 active:scale-90"
            id="like-btn"
          >
            <Icon name="favorite" className="text-[22px]" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <button
            className="min-h-[50px] flex items-center justify-center gap-2 py-3.5 px-4 bg-primary text-on-primary hover:bg-[#ffcf7d] active:scale-[0.98] transition-all rounded-sm shadow-md"
            id="play-btn"
            onClick={onPlay}
          >
            <Icon name="play_arrow" filled className="text-[20px]" />
            <span className="font-display text-[12px] uppercase tracking-[0.2em] font-black">ESCUCHAR</span>
          </button>
          <button
            className="min-h-[50px] flex items-center justify-center gap-2 py-3.5 px-4 border border-white/20 bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/40 active:scale-[0.98] transition-all backdrop-blur-sm rounded-sm"
            onClick={onVideo}
          >
            <Icon name="videocam" className="text-[19px]" />
            <span className="font-display text-[12px] uppercase tracking-[0.2em] font-bold">VER VIDEO</span>
          </button>
        </div>
      </div>
    </div>
  )
}