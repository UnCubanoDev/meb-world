import Icon from './Icon'
import LockedContent from './LockedContent'
import type { BackstageItem } from '../data/backstage'

interface BackstageCardProps {
  item: BackstageItem
  onLockedClick?: (item: BackstageItem) => void
}

/**
 * Tarjeta de archivo Backstage — dossier cifrado estilo Stitch.
 * Soporta los 3 tipos: preview (16:9), galería (diptych 35mm) y demos (consola de audio).
 */
export default function BackstageCard({ item, onLockedClick }: BackstageCardProps) {
  const handleClick = () => {
    if (item.locked && onLockedClick) onLockedClick(item)
  }

  return (
    <article className="relative w-full group transition-all duration-300">
      {/* Dossier header */}
      <div className="flex items-center justify-between py-1.5 px-1 font-mono text-[9px] tracking-[0.25em] text-on-surface-variant uppercase border-b border-white/[0.08] mb-2">
        <div className="flex items-center gap-2">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              item.status.includes('RESTRICTED') || item.status.includes('CONFIDENTIAL')
                ? 'bg-primary/90 animate-pulse shadow-[0_0_6px_#ffc665]'
                : 'bg-white/40'
            }`}
          ></span>
          <span className="text-white/90">{item.dossier}</span>
        </div>
        <span className={item.status.includes('RESTRICTED') || item.status.includes('CONFIDENTIAL') ? 'text-primary/70' : 'text-on-surface-variant'}>
          {item.status}
        </span>
      </div>

      {/* Media según tipo */}
      {item.kind === 'preview' && item.image && (
        <div className="relative aspect-[16/9] w-full overflow-hidden border border-white/[0.07] bg-surface-container-lowest">
          <div
            className="w-full h-full bg-cover bg-center filter blur-md grayscale contrast-125 opacity-30 transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${item.image}')` }}
            role="img"
            aria-label={item.imageAlt}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90 pointer-events-none"></div>
          <LockedContent label={item.lockLabel} />
          <CornerMarks />
        </div>
      )}

      {item.kind === 'gallery' && item.images && (
        <div className="relative aspect-[16/10] w-full overflow-hidden border border-white/[0.07] bg-black p-1.5">
          <div className="grid grid-cols-2 gap-1.5 h-full">
            {item.images.map((img) => (
              <div key={img.label} className="relative overflow-hidden bg-surface-container-lowest">
                <div
                  className="w-full h-full bg-cover bg-center filter blur-md grayscale contrast-150 opacity-25"
                  style={{ backgroundImage: `url('${img.src}')` }}
                ></div>
                <span className="absolute bottom-1 left-1 font-mono text-[8px] text-white/30 tracking-widest">
                  {img.label}
                </span>
              </div>
            ))}
          </div>
          {/* Sello cifrado */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black/40 backdrop-blur-[3px]">
            <div className="w-10 h-10 rounded-full border border-white/20 bg-black/70 flex items-center justify-center text-primary mb-2 shadow-lg">
              <Icon name="lock" className="text-[19px]" />
            </div>
            <span className="font-mono text-[10px] text-white/90 tracking-[0.24em] bg-surface-container-high/90 border border-white/10 px-3 py-1">
              {item.lockLabel}
            </span>
          </div>
        </div>
      )}

      {item.kind === 'demos' && (
        <div
          className="border border-white/[0.07] bg-gradient-to-b from-[#121214] to-[#0d0d0f] p-4 relative overflow-hidden group/audio cursor-pointer"
          onClick={handleClick}
        >
          <div className="flex items-center justify-between mb-3.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Icon name="graphic_eq" className="text-primary text-[19px]" />
              </div>
              <div>
                <h2 className="font-display text-[15px] text-white tracking-[0.14em] uppercase font-medium">
                  {item.title}
                </h2>
                <p className="font-body text-[11px] text-on-surface-variant font-light">{item.subtitle}</p>
              </div>
            </div>
            <div className="h-7 px-2.5 rounded-full border border-primary/30 bg-black/60 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="font-mono text-[9px] text-primary uppercase tracking-[0.2em]">{item.actionLabel}</span>
            </div>
          </div>
          {/* Consola de ecualizador */}
          <div className="relative w-full h-14 bg-black/80 border border-white/[0.08] px-3.5 flex items-center justify-between gap-1.5 overflow-hidden rounded-sm">
            {[3, 6, 2, 8, 10, 6, 4, 9, 11, 5, 3, 7, 10, 4, 2].map((h, i) => (
              <div
                key={i}
                className={`w-1 rounded-full ${i >= 4 && i <= 6 ? 'bg-primary/70' : i === 3 || i === 12 ? 'bg-primary/40' : 'bg-white/20'}`}
                style={{ height: `${h * 4}px` }}
              ></div>
            ))}
            <div className="absolute inset-0 backdrop-blur-[2px] bg-black/75 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Icon name="lock" className="text-primary text-[16px]" />
                <span className="font-mono text-[9px] text-primary uppercase tracking-[0.24em]">
                  {item.lockLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Meta + acción */}
      <div className="pt-3 pb-1 flex items-center justify-between">
        <div className="flex flex-col min-w-0 pr-3">
          <h2 className="font-display text-[16px] text-white tracking-[0.14em] uppercase font-medium">
            {item.title}
          </h2>
          <p className="font-body text-[12px] text-on-surface-variant font-light mt-0.5">{item.subtitle}</p>
        </div>
        <button
          className={`h-11 shrink-0 flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 rounded-sm cursor-pointer ${
            item.kind === 'preview'
              ? 'min-w-[120px] px-4 border border-primary/40 bg-black/60 hover:border-primary/80 text-primary shadow-ember'
              : 'px-3.5 border border-white/20 bg-surface-container-high/90 hover:border-primary/50 text-white'
          }`}
          onClick={handleClick}
          type="button"
        >
          {item.kind === 'preview' ? (
            <>
              <span className="font-display text-[10px] tracking-[0.2em] uppercase font-bold text-primary">
                {item.actionLabel}
              </span>
              <Icon name={item.actionIcon} className="text-[16px] text-primary" />
            </>
          ) : (
            <>
              <Icon name={item.actionIcon} className="text-primary text-[15px]" />
              <span className="font-mono text-[10px] tracking-[0.18em] text-white/90 uppercase">
                {item.actionLabel}
              </span>
            </>
          )}
        </button>
      </div>
    </article>
  )
}

/** Marcas de visor en esquinas (estilo cámara) */
function CornerMarks() {
  return (
    <>
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/30"></div>
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/30"></div>
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/30"></div>
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/30"></div>
    </>
  )
}