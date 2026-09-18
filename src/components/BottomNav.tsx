import { Link, useLocation } from 'react-router-dom'
import Icon from './Icon'

interface NavItem {
  path: string
  label: string
  icon: string
  filled?: boolean
}

const publicItems: NavItem[] = [
  { path: '/', label: 'HOME', icon: 'roofing' },
  { path: '/guadalupe', label: 'MUSIC', icon: 'graphic_eq' },
  { path: '/backstage', label: 'BACKSTAGE', icon: 'lock_open' },
  { path: '/fan', label: 'PROFILE', icon: 'account_circle' },
]

const memberItems: NavItem[] = [
  { path: '/', label: 'INICIO', icon: 'home' },
  { path: '/guadalupe', label: 'AUDIO', icon: 'graphic_eq' },
  { path: '/fan', label: 'BACKSTAGE', icon: 'vpn_key', filled: true },
  { path: '/guadalupe', label: 'DROPS', icon: 'shopping_bag' },
  { path: '/fan', label: 'PERFIL', icon: 'person' },
]

interface BottomNavProps {
  /** true = navegación de miembro (FAN HOME) */
  member?: boolean
}

/**
 * Navegación inferior fija — estilo Stitch.
 * Variante pública (HOME/MUSIC/BACKSTAGE/PROFILE) y de miembro.
 */
export default function BottomNav({ member = false }: BottomNavProps) {
  const { pathname } = useLocation()
  const items = member ? memberItems : publicItems

  const isActive = (item: NavItem) => {
    if (item.path === '/') return pathname === '/'
    return pathname.startsWith(item.path)
  }

  return (
    <nav
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-50 pb-safe bg-[#070708]/95 backdrop-blur-2xl border-t border-white/10"
      data-active-classes="text-primary font-bold"
    >
      <div className="flex justify-around items-center h-16 px-space-xs">
        {items.map((item) => {
          const active = isActive(item)
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex flex-col items-center justify-center gap-1 h-full min-w-[64px] min-h-[48px] py-1 transition-colors ${
                active ? 'text-primary' : 'text-white/40 hover:text-white'
              }`}
            >
              <span className="relative flex flex-col items-center justify-center">
                <Icon
                  name={item.icon}
                  filled={item.filled || active}
                  className={`text-[22px] ${active ? 'text-primary' : ''}`}
                />
                <span
                  className={`font-mono text-[9px] tracking-[0.25em] uppercase mt-0.5 ${
                    active ? 'font-bold text-primary' : ''
                  }`}
                >
                  {item.label}
                </span>
                {active && (
                  <span className="w-1 h-1 rounded-full bg-primary mt-0.5 shadow-[0_0_8px_#ffc665]"></span>
                )}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}