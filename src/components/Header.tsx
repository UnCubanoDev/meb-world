import { Link } from 'react-router-dom'
import Icon from './Icon'

interface HeaderProps {
  /** Etiqueta bajo el logo (HOME, BACKSTAGE, etc.) */
  label: string
  /** Variante visual del header */
  variant?: 'home' | 'backstage' | 'guadalupe' | 'registro' | 'fan'
  /** Badge derecho (ej: HABANA · DIRECTO) */
  badge?: string
  /** Mostrar botón de perfil */
  showProfile?: boolean
}

/**
 * Header fijo superior — MEB WORLD.
 * Reproduce el header editorial de Stitch (logo + badge + perfil).
 */
export default function Header({ label, variant = 'home', badge, showProfile = true }: HeaderProps) {
  const isGuadalupe = variant === 'guadalupe'
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-50 pt-safe bg-gradient-to-b from-[#070708]/90 via-[#070708]/40 to-transparent backdrop-blur-md transition-all duration-300">
      <div className="h-16 px-margin flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="font-display text-[15px] font-black tracking-[0.25em] text-white uppercase leading-none">
              MEB WORLD
            </span>
            <span
              className={`font-mono text-[9px] tracking-[0.3em] uppercase mt-1 flex items-center gap-1.5 ${
                isGuadalupe ? 'text-white/70' : 'text-primary'
              }`}
            >
              <span
                className={`w-1 h-1 rounded-full animate-pulse ${isGuadalupe ? 'bg-white/60' : 'bg-primary'}`}
              ></span>
              {label}
              <Icon name="workspace_premium" className="text-[11px] text-primary/80" />
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          {badge && (
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
              <span className="font-mono text-[9px] text-primary font-bold tracking-[0.2em] uppercase">{badge}</span>
            </div>
          )}
          {showProfile && (
            <Link
              to="/fan"
              aria-label="Profile"
              className="w-9 h-9 rounded-full border border-primary/50 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary backdrop-blur-sm active:scale-95 transition-transform hover:border-primary"
            >
              <Icon name="person" className="text-[18px]" />
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}