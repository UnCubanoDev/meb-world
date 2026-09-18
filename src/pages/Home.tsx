import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import BottomNav from '../components/BottomNav'
import Hairline from '../components/Hairline'
import ReleaseCard from '../components/ReleaseCard'
import Icon from '../components/Icon'
import { featuredRelease } from '../data/releases'
import { artist } from '../data/artist'
import { assets } from '../data/assets'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col min-h-screen bg-[#070708] text-on-surface font-body antialiased">
      <Header label="HOME" badge="HABANA · DIRECTO" />

      <main className="flex flex-col relative w-full pb-28 bg-[#070708] min-h-screen">
        {/* ============ 1. HERO FULL-BLEED CINEMÁTICO ============ */}
        <section className="relative w-full min-h-[85vh] flex flex-col justify-end overflow-hidden bg-[#070708]">
          {/* Imagen de fondo */}
          <div className="absolute inset-0 w-full h-full">
            <img
              alt="Mamá Estoy Brillando portrait"
              className="w-full h-full object-cover object-top scale-100 filter brightness-95 contrast-105"
              src={assets.artistPortrait}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-[#070708]/70 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#070708]/80 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,7,8,0.85)_100%)] pointer-events-none"></div>
          </div>

          {/* Badge DIRECTO */}
          <div className="absolute top-20 left-margin z-20 flex items-center gap-2 border border-white/15 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/90">
              DIRECTO · LA HABANA
            </span>
          </div>

          {/* Contenido hero */}
          <div className="relative z-20 px-margin pb-8 pt-24 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[1px] w-6 bg-primary/70"></span>
              <span className="font-mono text-[10px] tracking-[0.35em] text-primary uppercase font-medium">
                MEB WORLD
              </span>
            </div>

            <h1 className="font-display uppercase tracking-[-0.03em] leading-[0.9] text-white flex flex-col mb-6 select-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
              <span className="text-[34px] font-light tracking-[0.04em] text-white/90">MAMÁ</span>
              <span className="text-[44px] font-black tracking-[-0.03em] -mt-1 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                ESTOY
              </span>
              <span className="text-[38px] font-black tracking-[-0.02em] text-primary drop-shadow-[0_0_35px_rgba(255,198,101,0.35)] -mt-1">
                BRILLANDO
              </span>
            </h1>

            <button
              className="group w-full min-h-[52px] flex items-center justify-between py-4 px-6 rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-xl hover:bg-white/[0.09] hover:border-primary/60 active:scale-[0.98] transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
              id="cta-entrar"
              onClick={() => navigate('/guadalupe')}
            >
              <span className="font-display text-[13px] uppercase tracking-[0.25em] text-white font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                ENTRAR A EXPLORAR
              </span>
              <div className="flex items-center gap-2 text-primary">
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/70">EXP.01</span>
                <Icon name="arrow_forward" className="text-[20px] transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </button>
          </div>
        </section>

        <Hairline />

        {/* ============ 2. ÚLTIMO LANZAMIENTO ============ */}
        <section className="px-margin pt-14 pb-12 flex flex-col bg-[#070708]">
          <div className="flex items-end justify-between mb-6">
            <div>
              <span className="font-mono text-[10px] text-primary tracking-[0.3em] uppercase block mb-1">
                NUEVO CORTE
              </span>
              <h2 className="font-display text-[24px] font-black uppercase text-white tracking-[-0.02em]">
                ÚLTIMO LANZAMIENTO
              </h2>
            </div>
            <span className="font-mono text-[10px] text-on-surface-variant tracking-[0.2em]">01 / SINGLE</span>
          </div>

          <ReleaseCard
            release={featuredRelease}
            onPlay={() => navigate('/guadalupe')}
            onVideo={() => navigate('/guadalupe')}
          />
        </section>

        <Hairline />

        {/* ============ 3. MEB BACKSTAGE TEASER ============ */}
        <section className="px-margin py-14 flex flex-col bg-[#070708] relative overflow-hidden">
          {/* Glow ambiental */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/[0.04] blur-3xl pointer-events-none"></div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 bg-primary"></span>
              <h2 className="font-display text-[22px] font-black uppercase text-white tracking-[-0.02em]">
                MEB BACKSTAGE
              </h2>
            </div>
            <span className="font-mono text-[9px] text-primary tracking-[0.3em] uppercase border border-primary/30 px-2.5 py-0.5">
              EXCLUSIVO
            </span>
          </div>

          {/* Composición asimétrica editorial */}
          <div className="relative flex flex-col border-l border-white/15 pl-5 py-2">
            <div className="flex items-center gap-1.5 text-primary mb-2">
              <Icon name="lock" className="text-[14px]" />
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase font-semibold">ZONA RESTRINGIDA</span>
            </div>
            <h3 className="font-display text-[28px] font-black uppercase text-white tracking-tight leading-none mb-3">
              ACCESO INTERNO
            </h3>
            <p className="font-body text-[16px] text-on-surface-variant italic font-light max-w-xs leading-relaxed mb-8">
              “{artist.backstageTagline}”
            </p>

            <div className="flex items-center justify-between pt-2">
              {/* Avatar stack */}
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-[#18181c] border border-white/15 flex items-center justify-center text-white/80 font-mono text-[9px]">
                  01
                </div>
                <div className="w-7 h-7 rounded-full bg-[#121215] border border-white/15 flex items-center justify-center text-white/60 font-mono text-[9px]">
                  02
                </div>
                <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center text-primary font-mono text-[9px]">
                  +8
                </div>
              </div>

              {/* CTA editorial */}
              <button
                className="group min-h-[48px] flex items-center gap-2.5 py-3.5 px-6 border border-primary/50 text-primary hover:bg-primary hover:text-black transition-all duration-300 active:scale-95 rounded-sm"
                id="backstage-btn"
                onClick={() => navigate('/backstage')}
              >
                <span className="font-display text-[11px] uppercase tracking-[0.22em] font-bold">
                  DESCUBRIR BÓVEDA
                </span>
                <Icon name="arrow_forward" className="text-[17px] group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </section>

        <Hairline />

        {/* ============ 4. CIERRE EDITORIAL MONUMENTAL ============ */}
        <section className="w-full bg-[#070708] py-16 px-margin flex flex-col items-center justify-center text-center">
          <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-[0.4em] mb-4">
            EL ARCHIVO VIVO
          </span>
          <div className="font-display text-[30px] sm:text-[34px] font-black uppercase text-white tracking-[-0.03em] leading-tight flex flex-col items-center gap-1">
            <span className="hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/guadalupe')}>
              MÚSICA
            </span>
            <span className="text-primary text-[20px] leading-none my-0.5">✦</span>
            <span className="hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/guadalupe')}>
              VIDEOS
            </span>
            <span className="text-primary text-[20px] leading-none my-0.5">✦</span>
            <span className="hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/backstage')}>
              BACKSTAGE
            </span>
          </div>
          <div className="h-[1px] w-12 bg-primary/40 my-6"></div>
          <span className="font-mono text-[10px] text-white/40 tracking-[0.3em] uppercase">
            HABANA / {artist.year} / {artist.label}
          </span>
        </section>
      </main>

      <BottomNav />
    </div>
  )
}