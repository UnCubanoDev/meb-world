import Icon from './Icon'

interface MediaCardProps {
  src: string
  alt: string
  ratio?: string
  className?: string
  /** Overlay inferior (título + meta) */
  overlay?: { title: string; meta?: string }
  /** Badge superior derecha */
  badge?: string
  /** Pill inferior izquierda */
  pill?: { icon?: string; text: string }
  /** Mostrar botón de play centrado */
  playButton?: boolean
  onClick?: () => void
}

/**
 * Marco de media editorial — ratios estrictos (1:1, 4:5, 16:9, 21:9).
 */
export default function MediaCard({
  src,
  alt,
  ratio = 'aspect-square',
  className = '',
  overlay,
  badge,
  pill,
  playButton = false,
  onClick,
}: MediaCardProps) {
  return (
    <div
      className={`relative w-full ${ratio} overflow-hidden border border-white/[0.08] bg-black group cursor-pointer ${className}`}
      onClick={onClick}
    >
      <img
        alt={alt}
        src={src}
        className="w-full h-full object-cover opacity-85 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-95"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 pointer-events-none"></div>

      {badge && (
        <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-0.5 border border-white/[0.08] font-mono text-[9px] text-on-surface-variant tracking-widest">
          {badge}
        </span>
      )}

      {pill && (
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2 py-0.5 border border-white/[0.08]">
          {pill.icon && <Icon name={pill.icon} filled className="text-[13px] text-primary" />}
          <span className="font-mono text-[9px] text-primary/90 tracking-widest font-bold">{pill.text}</span>
        </div>
      )}

      {playButton && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full border border-primary/70 bg-black/50 backdrop-blur-md text-primary flex items-center justify-center shadow-ember-lg transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:text-black">
            <Icon name="play_arrow" className="text-[26px] translate-x-0.5" />
          </div>
        </div>
      )}

      {overlay && (
        <div className="absolute bottom-0 inset-x-0 p-3.5 flex items-end justify-between bg-gradient-to-t from-black via-black/80 to-transparent">
          <div className="flex flex-col">
            <span className="font-display text-[12px] text-on-surface uppercase tracking-wider font-semibold">
              {overlay.title}
            </span>
            {overlay.meta && (
              <span className="font-mono text-[10px] text-primary/90 mt-0.5 tracking-wider">{overlay.meta}</span>
            )}
          </div>
          <Icon name="fullscreen" className="text-on-surface-variant hover:text-white text-[18px] transition-colors" />
        </div>
      )}
    </div>
  )
}