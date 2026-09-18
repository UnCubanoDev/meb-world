import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import BottomNav from '../components/BottomNav'
import Icon from '../components/Icon'
import { assets } from '../data/assets'
import { backstageBenefits } from '../data/backstage'

export default function Registro() {
  const navigate = useNavigate()
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!nombre.trim() || !email.trim()) {
      setError('Completa ambos campos para unirte al Backstage.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Introduce un correo electrónico válido.')
      return
    }
    setError('')
    setSuccess(true)
    setTimeout(() => navigate('/fan'), 1800)
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0b0c] text-on-surface font-body antialiased">
      <Header label="REGISTRO" variant="registro" showProfile={false} />

      <main className="flex flex-col relative w-full pt-16 pb-28 bg-[#0b0b0c] min-h-screen">
        {/* Barra de retorno */}
        <aside
          aria-label="Navegación de retorno"
          className="px-margin pt-4 pb-2 flex items-center justify-between border-b border-white/[0.03]"
        >
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors py-1 cursor-pointer"
          >
            <Icon name="arrow_back" className="text-[15px] transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-on-surface-variant group-hover:text-primary">
              Volver
            </span>
          </button>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#ffc665]"></span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/90 font-medium">
              PASE ARCHIVO // CORTESÍA
            </span>
          </div>
        </aside>

        {/* ============ BACKDROP CINEMATOGRÁFICO ============ */}
        <section className="relative w-full h-[300px] overflow-hidden">
          <img
            alt="Mamá Estoy Brillando en el escenario"
            src={assets.photoSession}
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-[#0b0b0c]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0c]/70 via-transparent to-transparent"></div>

          {/* Sello de acceso */}
          <div className="absolute top-6 left-margin flex items-center gap-2 border border-white/15 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/90">
              MAMÁ ESTOY BRILLANDO · CAPÍTULO 04: MEMBRESÍA
            </span>
          </div>

          <div className="absolute bottom-0 left-margin right-margin pb-6">
            <span className="font-mono text-[10px] text-primary tracking-[0.3em] uppercase block mb-1">
              HAVANA / ARCHIVE
            </span>
            <h1 className="font-display text-[34px] leading-[38px] uppercase text-white tracking-[-0.02em] font-black">
              ENTRA A
              <br />
              <span className="text-primary">MEB WORLD</span>
            </h1>
            <p className="font-body text-[14px] text-on-surface-variant font-light mt-2">
              Forma parte del universo de MEB.
            </p>
          </div>
        </section>

        {/* ============ BENEFICIOS ============ */}
        <section className="px-margin pt-8 pb-6">
          <div className="flex items-center gap-2 mb-4">
            <Icon name="verified" filled className="text-primary text-[16px]" />
            <span className="font-mono text-[10px] text-primary tracking-[0.25em] uppercase font-bold">
              ¿QUÉ OBTIENES AL INSTANTE?
            </span>
          </div>
          <div className="flex flex-col divide-y divide-white/[0.05] border-y border-white/[0.05]">
            {backstageBenefits.map((benefit) => (
              <div key={benefit.title} className="py-3.5 flex items-center gap-3">
                <div className="w-8 h-8 shrink-0 border border-primary/25 bg-primary/[0.05] flex items-center justify-center text-primary">
                  <Icon name={benefit.icon} className="text-[16px]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-[13px] uppercase text-on-surface tracking-[0.12em] font-semibold">
                    {benefit.title}
                  </span>
                  <span className="font-body text-[12px] text-on-surface-variant font-light">{benefit.description}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="font-mono text-[10px] text-on-surface-variant/70 uppercase tracking-[0.18em] text-center mt-4">
            Acceso inmediato · 100% cortesía de artista · Sin pagos
          </p>
        </section>

        {/* ============ FORMULARIO ============ */}
        <section className="px-margin pt-2 pb-10">
          <div className="flex items-center gap-2 mb-5">
            <span className="font-mono text-[10px] text-primary tracking-[0.25em] uppercase font-bold">
              FORMULARIO DE ACCESO
            </span>
            <span className="w-6 h-[1px] bg-primary/40"></span>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
            <label className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-[0.22em]">
                NOMBRE O ALIAS
              </span>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre o alias"
                className="h-[52px] px-4 bg-[#121214] border border-white/[0.1] text-on-surface placeholder:text-on-surface-variant/40 font-body text-[15px] outline-none focus:border-primary/60 focus:bg-[#161618] transition-colors rounded-none"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-[0.22em]">
                CORREO ELECTRÓNICO
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tucorreo@ejemplo.com"
                className="h-[52px] px-4 bg-[#121214] border border-white/[0.1] text-on-surface placeholder:text-on-surface-variant/40 font-body text-[15px] outline-none focus:border-primary/60 focus:bg-[#161618] transition-colors rounded-none"
              />
            </label>

            {error && (
              <p className="font-body text-[12px] text-[#ff8a80] flex items-center gap-1.5">
                <Icon name="error" className="text-[15px]" />
                {error}
              </p>
            )}

            <button
              type="submit"
              className="group relative w-full h-14 px-6 overflow-hidden bg-gradient-to-r from-[#e5a93c] via-[#ffc665] to-[#fabc4d] text-black font-display text-[13px] tracking-[0.24em] uppercase font-bold flex items-center justify-center gap-2.5 shadow-[0_4px_30px_rgba(255,198,101,0.35)] hover:shadow-[0_4px_40px_rgba(255,198,101,0.55)] active:scale-[0.98] transition-all duration-300 rounded-sm cursor-pointer mt-1"
              id="submitJoinBtn"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/30 to-transparent opacity-60 pointer-events-none"></span>
              <Icon name="diamond" filled className="text-[20px] relative z-10 text-black" />
              <span className="relative z-10 font-bold text-black">UNIRME AL BACKSTAGE</span>
            </button>

            <p className="text-center font-mono text-[9px] text-on-surface-variant/60 uppercase tracking-[0.2em] pt-1">
              Acceso inmediato · 100% cortesía de artista · Sin pagos
            </p>
          </form>
        </section>
      </main>

      {/* ============ OVERLAY DE ÉXITO ============ */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center px-margin bg-black/95 backdrop-blur-xl transition-all duration-500 ${
          success ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        id="successOverlay"
      >
        <div className="relative w-full max-w-sm border border-primary/40 bg-[#121214] p-8 flex flex-col items-center text-center shadow-2xl">
          <div className="w-14 h-14 rounded-full border border-primary/50 bg-primary/10 flex items-center justify-center text-primary mb-4 shadow-ember">
            <Icon name="verified" filled className="text-[30px]" />
          </div>
          <span className="font-mono text-[10px] text-primary uppercase tracking-[0.26em] mb-1">
            MEMBRESÍA ACTIVADA
          </span>
          <h2 className="font-display text-[24px] text-white uppercase tracking-[0.1em] mb-2 font-bold">
            ¡Bienvenido a MEB!
          </h2>
          <p className="font-body text-[13px] text-on-surface-variant font-light leading-relaxed">
            Tu pase de acceso está listo. Te esperamos dentro del archivo.
          </p>
          <div className="flex items-center gap-2 mt-5 font-mono text-[10px] text-primary tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            REDIRIGIENDO AL FAN HOME...
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}