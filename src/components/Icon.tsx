interface IconProps {
  name: string
  className?: string
  filled?: boolean
  style?: React.CSSProperties
}

/** Wrapper para Material Symbols Outlined */
export default function Icon({ name, className = 'text-[20px]', filled = false, style }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{ fontVariationSettings: `'FILL' ${filled ? 1 : 0}`, ...style }}
      aria-hidden="true"
    >
      {name}
    </span>
  )
}