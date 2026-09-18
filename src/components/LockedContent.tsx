import Icon from './Icon'

interface LockedContentProps {
  /** Texto del sello de bloqueo */
  label: string
  /** Icono del candado */
  icon?: string
  /** Tamaño del icono circular */
  size?: 'sm' | 'md' | 'lg'
  /** Variante visual */
  variant?: 'overlay' | 'inline'
  /** Clases extra */
  className?: string
}

const sizes = {
  sm: { circle: 'w-10 h-10', icon: 'text-[19px]' },
  md: { circle: 'w-11 h-11', icon: 'text-[20px]' },
  lg: { circle: 'w-14 h-14', icon: 'text-[24px]' },
}

/**
 * Tratamiento visual de contenido bloqueado — estilo Stitch.
 * Candado circular + sello técnico con tracking amplio.
 */
export default function LockedContent({
  label,
  icon = 'lock',
  size = 'md',
  variant = 'overlay',
  className = '',
}: LockedContentProps) {
  const s = sizes[size]

  if (variant === 'inline') {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        <div
          className={`${s.circle} rounded-full border border-primary/30 bg-black/60 backdrop-blur-md flex items-center justify-center text-primary shadow-ember`}
        >
          <Icon name={icon} className={s.icon} />
        </div>
        <span className="font-mono text-[10px] text-primary uppercase tracking-[0.24em] border border-primary/20 bg-black/70 backdrop-blur-md px-3 py-1 rounded-sm">
          {label}
        </span>
      </div>
    )
  }

  return (
    <div className={`absolute inset-0 flex flex-col items-center justify-center p-4 ${className}`}>
      <div className="flex flex-col items-center gap-2">
        <div
          className={`${s.circle} rounded-full border border-primary/30 bg-black/60 backdrop-blur-md flex items-center justify-center text-primary shadow-ember`}
        >
          <Icon name={icon} className={s.icon} />
        </div>
        <span className="font-mono text-[10px] text-primary uppercase tracking-[0.24em] border border-primary/20 bg-black/70 backdrop-blur-md px-3 py-1 rounded-sm">
          {label}
        </span>
      </div>
    </div>
  )
}