import Icon from './Icon'
import { demoUser } from '../data/demoUser'

/**
 * Perfil de fan — cabecera del FAN HOME (estado de miembro verificado).
 */
export default function FanProfile() {
  return (
    <section className="flex flex-col gap-3 pt-1">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] text-primary/80 tracking-[0.25em] uppercase">MEB BACKSTAGE</span>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-primary/25 rounded-full backdrop-blur-md shadow-ember">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#ffc665]"></span>
          <span className="font-display text-[9px] text-on-surface tracking-[0.18em] uppercase font-semibold">
            {demoUser.pass}
          </span>
        </div>
      </div>
      <div className="flex flex-col pt-2 border-b border-white/[0.05] pb-5">
        <span className="font-mono text-[10px] text-primary tracking-[0.22em] uppercase font-medium">BIENVENIDO</span>
        <h2 className="font-display text-[36px] leading-[40px] text-on-surface tracking-tight font-bold mt-1">
          Bienvenido, {demoUser.name}
        </h2>
        <p className="font-body text-[14px] text-on-surface-variant/80 mt-1.5 font-light">
          Tu acceso al universo de MEB.
        </p>
      </div>
    </section>
  )
}

/** Etiqueta UNLOCKED */
export function UnlockedBadge() {
  return (
    <span className="font-display text-[9px] tracking-wider px-2 py-0.5 bg-primary/[0.12] text-primary rounded-sm border border-primary/20">
      UNLOCKED 🔓
    </span>
  )
}

/** Icono de candado para drops */
export function LockIcon() {
  return (
    <div className="w-9 h-9 shrink-0 rounded-full border border-primary/25 bg-primary/[0.06] flex items-center justify-center text-primary shadow-inner">
      <Icon name="lock" className="text-[17px]" />
    </div>
  )
}