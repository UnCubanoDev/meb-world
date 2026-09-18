interface SectionHeaderProps {
  /** Etiqueta técnica (ej: NUEVO CORTE, 01 / CONCEPTO) */
  label: string
  /** Título de la sección */
  title: string
  /** Meta derecha (ej: 01 / SINGLE) */
  meta?: string
  /** Estilo de la etiqueta: 'primary' | 'muted' */
  labelStyle?: 'primary' | 'muted'
  /** Tamaño del título */
  titleSize?: 'lg' | 'xl'
}

/**
 * Encabezado de sección editorial — estilo Stitch.
 */
export default function SectionHeader({
  label,
  title,
  meta,
  labelStyle = 'primary',
  titleSize = 'lg',
}: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between mb-6">
      <div>
        <span
          className={`font-mono text-[10px] tracking-[0.3em] uppercase block mb-1 ${
            labelStyle === 'primary' ? 'text-primary' : 'text-on-surface-variant'
          }`}
        >
          {label}
        </span>
        <h2
          className={`font-display uppercase text-white tracking-[-0.02em] ${
            titleSize === 'xl' ? 'text-[24px] font-black' : 'text-[22px] font-black'
          }`}
        >
          {title}
        </h2>
      </div>
      {meta && <span className="font-mono text-[10px] text-on-surface-variant tracking-[0.2em]">{meta}</span>}
    </div>
  )
}

/** Encabezado con línea decorativa (estilo GUADALUPE: 01 / CONCEPTO ———) */
export function EditorialHeader({
  label,
  meta,
  title,
}: {
  label: string
  meta?: string
  title?: string
}) {
  const withLine = true
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] text-primary tracking-[0.25em] uppercase font-bold">{label}</span>
          {withLine && <span className="w-6 h-[1px] bg-primary/40"></span>}
        </div>
        {meta && (
          <span className="font-mono text-[10px] text-on-surface-variant/60 tracking-widest uppercase">{meta}</span>
        )}
      </div>
      {title && (
        <h2 className="font-display text-[22px] tracking-[-0.01em] uppercase text-on-surface mb-3">{title}</h2>
      )}
    </div>
  )
}