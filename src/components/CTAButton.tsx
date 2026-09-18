import { Link } from 'react-router-dom'
import Icon from './Icon'

type Variant = 'primary' | 'ghost' | 'vip' | 'gold'

interface CTAButtonProps {
  children: React.ReactNode
  to?: string
  onClick?: () => void
  variant?: Variant
  icon?: string
  iconFilled?: boolean
  className?: string
  type?: 'button' | 'submit'
  id?: string
}

const base =
  'min-h-[50px] flex items-center justify-center gap-2 py-3.5 px-4 transition-all duration-300 active:scale-[0.98] select-none cursor-pointer'

const variants: Record<Variant, string> = {
  // Monolith: superficie clara, texto oscuro
  primary: 'bg-primary text-on-primary hover:bg-[#ffcf7d] shadow-md',
  // Ghost Frame: transparente con borde
  ghost: 'border border-white/20 bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/40 backdrop-blur-sm',
  // VIP / Archive: negro con borde dorado
  vip: 'bg-[#070708] border border-primary/50 text-primary hover:bg-primary hover:text-black',
  // Gold líquido (CTA principal de conversión)
  gold: 'bg-gradient-to-r from-[#e5a93c] via-[#ffc665] to-[#fabc4d] text-black font-bold shadow-[0_4px_30px_rgba(255,198,101,0.35)] hover:shadow-[0_4px_40px_rgba(255,198,101,0.55)]',
}

/**
 * Botón CTA — reproduce los estilos de botón del design system Stitch.
 */
export default function CTAButton({
  children,
  to,
  onClick,
  variant = 'primary',
  icon,
  iconFilled = false,
  className = '',
  type = 'button',
  id,
}: CTAButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {icon && <Icon name={icon} filled={iconFilled} className="text-[19px]" />}
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} id={id}>
      {icon && <Icon name={icon} filled={iconFilled} className="text-[19px]" />}
      {children}
    </button>
  )
}