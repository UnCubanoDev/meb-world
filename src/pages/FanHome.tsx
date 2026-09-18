import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import BottomNav from '../components/BottomNav'
import Icon from '../components/Icon'
import AudioPlayer from '../components/AudioPlayer'
import FanProfile, { UnlockedBadge, LockIcon } from '../components/FanProfile'
import { fanContent } from '../data/demoUser'
import { assets } from '../data/assets'

export default function FanHome() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0b0c] text-on-surface font-body antialiased">
      <Header label="VIP PASSHOLDER ROOM" variant="fan" badge="MEMBER" />

      <main className="flex flex-col relative w-full pt-16 pb-28 bg-[#0b0b0c] min-h-screen">
        {/* ============ PERFIL DE FAN ============ */}
        <section className="px-margin pt-6">
          <FanProfile />
        </section>

        {/* ============ PREVIEW DESBLOQUEADO ============ */}
        <section className="px-margin pt-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-primary tracking-[0.25em] uppercase font-bold">
                {fanContent.preview.label}
              </span>
              <span className="w-6 h-[1px] bg-primary/40"></span>
            </div>
            <UnlockedBadge />
          </div>

          <AudioPlayer
            title={fanContent.preview.title}
            duration={fanContent.preview.duration}
            variant="waveform"
            badge="24-BIT / 96KHZ FLAC"
          />
        </section>

        {/* ============ DIARIO VISUAL ============ */}
        <section className="px-margin pt-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-primary tracking-[0.25em] uppercase font-bold">
                {fanContent.gallery.label}
              </span>
              <span className="w-6 h-[1px] bg-primary/40"></span>
            </div>
            <span className="font-mono text-[10px] text-on-surface-variant tracking-widest uppercase">
              {fanContent.gallery.count}
            </span>
          </div>

          <article className="relative w-full aspect-[4/5] overflow-hidden border border-white/[0.07] bg-black group">
            <img
              alt={fanContent.gallery.title}
              src={assets.roll049a}
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>

            {/* Marca de archivo */}
            <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm border border-white/[0.08] px-2 py-0.5 font-mono text-[9px] text-primary tracking-widest uppercase">
              {fanContent.gallery.entry}
            </span>

            {/* Nota del artista */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Icon name="edit_note" className="text-[13px] text-primary" />
                <span className="font-mono text-[9px] text-primary/90 tracking-[0.2em] uppercase">
                  {fanContent.gallery.noteLabel}
                </span>
              </div>
              <h3 className="font-display text-[17px] uppercase text-white tracking-[0.1em] font-bold mb-1">
                {fanContent.gallery.title}
              </h3>
              <p className="font-body text-[12px] text-white/70 italic font-light leading-relaxed">
                “{fanContent.gallery.note}”
              </p>
              <div className="flex items-center justify-between mt-2.5">
                <div className="flex items-center gap-2 font-mono text-[9px] text-primary/80 tracking-[0.2em] uppercase">
                  <Icon name="photo_camera" className="text-[12px]" />
                  <span>{fanContent.gallery.meta}</span>
                </div>
                <span className="font-mono text-[9px] text-white/50 tracking-[0.15em]">
                  {fanContent.gallery.noteAuthor}
                </span>
              </div>
            </div>
          </article>
        </section>

        {/* ============ DROP: VINILO EDICIÓN LIMITADA ============ */}
        <section className="px-margin pt-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-primary tracking-[0.25em] uppercase font-bold">
                {fanContent.drop.label}
              </span>
              <span className="w-6 h-[1px] bg-primary/40"></span>
            </div>
            <span className="font-mono text-[10px] text-primary tracking-widest uppercase font-semibold border border-primary/30 px-2 py-0.5">
              {fanContent.drop.status}
            </span>
          </div>

          <div className="relative w-full border border-white/[0.08] bg-gradient-to-b from-[#141316] to-[#0f0e11] p-5 flex flex-col gap-4 overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/[0.05] rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex items-center gap-4">
              <LockIcon />
              <div className="flex flex-col min-w-0">
                <h3 className="font-display text-[16px] uppercase text-on-surface tracking-[0.1em] font-bold">
                  {fanContent.drop.title}
                </h3>
                <p className="font-body text-[12px] text-on-surface-variant font-light">
                  {fanContent.drop.subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 font-mono text-[10px] text-on-surface-variant/80 uppercase tracking-[0.18em]">
                <Icon name="schedule" className="text-[14px] text-primary" />
                <span>{fanContent.drop.window}</span>
              </div>
              <span className="font-mono text-[10px] text-primary uppercase tracking-[0.18em] font-bold">
                {fanContent.drop.availability}
              </span>
            </div>
          </div>
        </section>

        {/* ============ CTA FINAL: EXPLORAR ARCHIVO ============ */}
        <section className="px-margin pt-10 pb-4">
          <button
            className="group w-full min-h-[54px] flex items-center justify-between py-4 px-6 border border-primary/40 bg-primary/[0.04] hover:bg-primary hover:text-black transition-all duration-300 active:scale-[0.98] rounded-sm"
            id="exploreArchiveBtn"
            onClick={() => navigate('/backstage')}
          >
            <span className="font-display text-[12px] uppercase tracking-[0.22em] font-bold text-primary group-hover:text-black flex items-center gap-2">
              <Icon name="lock_open" className="text-[17px]" />
              EXPLORAR ARCHIVO COMPLETO
            </span>
            <Icon
              name="arrow_forward"
              className="text-[19px] text-primary group-hover:text-black group-hover:translate-x-1 transition-all duration-300"
            />
          </button>
        </section>
      </main>

      <BottomNav />
    </div>
  )
}