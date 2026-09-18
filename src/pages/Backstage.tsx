import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import BottomNav from '../components/BottomNav'
import Icon from '../components/Icon'
import BackstageCard from '../components/BackstageCard'
import { backstageItems, backstageStats, type BackstageItem } from '../data/backstage'
import { artist } from '../data/artist'

export default function Backstage() {
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('SOLICITAR MEMBRESÍA')
  const [joining, setJoining] = useState(false)

  const triggerAccessModal = (item: BackstageItem) => {
    setModalTitle(item.title)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const handleJoinAction = () => {
    setJoining(true)
    setTimeout(() => {
      setJoining(false)
      setModalOpen(false)
      navigate('/registro')
    }, 900)
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0b0c] text-on-surface font-body antialiased">
      <Header label="BACKSTAGE" variant="backstage" badge="PRIVATE VAULT" />

      <main className="flex flex-col relative w-full pt-20 pb-28 bg-[#0b0b0c] min-h-screen">
        {/* ============ HERO: BÓVEDA CLANDESTINA ============ */}
        <section className="relative px-margin pt-space-xl pb-space-lg flex flex-col items-center text-center">
          {/* Glow radial ámbar */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-80 h-44 bg-primary/10 rounded-full blur-[90px] pointer-events-none"></div>

          {/* Sello clasificado */}
          <div className="flex items-center gap-3 mb-space-md opacity-80">
            <span className="h-[1px] w-6 bg-gradient-to-r from-transparent to-primary/40"></span>
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-primary tracking-[0.3em] uppercase">
              <Icon name="security" className="text-primary text-[12px]" />
              <span>PRIVATE VAULT // 003</span>
            </div>
            <span className="h-[1px] w-6 bg-gradient-to-l from-transparent to-primary/40"></span>
          </div>

          {/* Título monumental */}
          <h1 className="font-display text-[34px] sm:text-[40px] leading-[1.08] tracking-[0.16em] uppercase text-white font-extralight mb-3">
            MEB BACKSTAGE
          </h1>
          <p className="font-body text-[15px] text-on-surface-variant tracking-[0.06em] italic font-light max-w-xs leading-relaxed">
            {artist.backstageTagline}
          </p>

          {/* Telemetría técnica */}
          <div className="flex items-center justify-between w-full max-w-xs mt-space-lg pt-4 border-t border-white/[0.06] text-on-surface-variant/70 font-mono text-[10px] tracking-[0.2em] uppercase">
            {backstageStats.map((stat, i) => (
              <span key={stat.label} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-white/20">/</span>}
                <span className="text-primary font-bold">{stat.value}</span> {stat.label}
              </span>
            ))}
          </div>
        </section>

        {/* ============ ARCHIVOS CIFRADOS ============ */}
        <section className="px-margin flex flex-col gap-6 py-space-sm">
          {backstageItems.map((item) => (
            <BackstageCard key={item.id} item={item} onLockedClick={triggerAccessModal} />
          ))}
        </section>

        {/* ============ CTA MODULAR ÁMBAR ============ */}
        <section className="px-margin pt-space-xl pb-space-lg flex flex-col items-center">
          <div className="relative w-full py-8 px-6 flex flex-col items-center text-center overflow-hidden border border-primary/20 bg-gradient-to-b from-[#181612] via-[#0f0e0d] to-[#0b0b0c] shadow-[0_0_50px_rgba(255,198,101,0.06)]">
            {/* Glow ambiental */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-32 bg-primary/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative w-12 h-12 flex items-center justify-center text-primary mb-4 border border-primary/30 bg-black/50 backdrop-blur-md shadow-ember">
              <Icon name="key" className="text-[24px]" />
            </div>
            <h2 className="font-display text-[22px] text-white tracking-[0.18em] uppercase font-light mb-2">
              DESBLOQUEA EL ARCHIVO
            </h2>
            <p className="font-body text-[13px] text-on-surface-variant font-light max-w-xs leading-relaxed mb-6">
              Acceso directo a grabaciones privadas, masters de estudio y material de gira sin censura.
            </p>

            {/* Botón dorado líquido */}
            <button
              className="group relative w-full h-14 px-6 overflow-hidden bg-gradient-to-r from-[#e5a93c] via-[#ffc665] to-[#fabc4d] text-black font-display text-[13px] tracking-[0.24em] uppercase font-bold flex items-center justify-center gap-2.5 shadow-[0_4px_30px_rgba(255,198,101,0.35)] hover:shadow-[0_4px_40px_rgba(255,198,101,0.55)] active:scale-[0.98] transition-all duration-300 rounded-sm cursor-pointer"
              id="joinBackstageBtn"
              onClick={handleJoinAction}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/30 to-transparent opacity-60 pointer-events-none"></span>
              <Icon name="diamond" filled className="text-[20px] relative z-10 text-black" />
              <span className="relative z-10 font-bold text-black">
                {joining ? 'CONECTANDO CON EL VAULT...' : 'UNIRME AL BACKSTAGE'}
              </span>
            </button>

            {/* Sellos de confianza */}
            <div className="flex items-center justify-center gap-6 mt-6 text-on-surface-variant/70 font-mono text-[10px] tracking-[0.22em] uppercase">
              <div className="flex items-center gap-1.5">
                <Icon name="verified_user" className="text-[13px] text-primary" />
                <span>PASAPORTE VIP</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-primary/40"></span>
              <div className="flex items-center gap-1.5">
                <Icon name="bolt" className="text-[13px] text-primary" />
                <span>ACCESO INSTANTÁNEO</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FOOTER ARCHIVO ============ */}
        <footer className="px-margin pt-space-xs pb-space-lg flex flex-col items-center text-center">
          <div className="h-[1px] w-8 bg-primary/30 mb-space-sm"></div>
          <p className="font-mono text-[10px] text-on-surface-variant/80 tracking-[0.24em] uppercase max-w-xs leading-relaxed">
            Contenido exclusivo. Adelantos. Detrás de cámaras.
          </p>
          <span className="font-display text-[9px] text-white/30 tracking-[0.28em] mt-2 uppercase">
            MEB ARCHIVE SYSTEM // ALL RIGHTS RESERVED
          </span>
        </footer>
      </main>

      {/* ============ MODAL DE ACCESO ============ */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center px-margin bg-black/90 backdrop-blur-xl transition-opacity duration-300 ${
          modalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        id="vaultModal"
      >
        <div className="relative w-full max-w-sm border border-primary/30 bg-[#121214] p-6 shadow-2xl flex flex-col items-center text-center">
          <button
            className="absolute top-4 right-4 text-on-surface-variant hover:text-white"
            onClick={closeModal}
            aria-label="Cerrar"
          >
            <Icon name="close" className="text-[20px]" />
          </button>
          <div className="w-12 h-12 border border-primary/40 bg-black/60 flex items-center justify-center text-primary mb-3 shadow-ember">
            <Icon name="encrypted" className="text-[26px]" />
          </div>
          <span className="font-mono text-[10px] text-primary uppercase tracking-[0.26em] mb-1">
            ACCESO RESTRINGIDO
          </span>
          <h3 className="font-display text-[18px] text-white uppercase tracking-[0.14em] mb-2 font-medium">
            {modalTitle}
          </h3>
          <p className="font-body text-[13px] text-on-surface-variant font-light mb-6 leading-relaxed">
            Este contenido es exclusivo para los miembros del club MEB Backstage. Únete para desbloquear las llaves
            maestras.
          </p>
          <button
            className="w-full py-3.5 bg-gradient-to-r from-primary to-primary-container text-black font-display text-[12px] uppercase tracking-[0.22em] font-bold shadow-lg active:scale-95 transition-transform"
            onClick={handleJoinAction}
          >
            OBTENER PASE
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}