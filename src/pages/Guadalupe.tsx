import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import BottomNav from '../components/BottomNav'
import Icon from '../components/Icon'
import AudioPlayer from '../components/AudioPlayer'
import MediaCard from '../components/MediaCard'
import { featuredRelease } from '../data/releases'

export default function Guadalupe() {
  const navigate = useNavigate()
  const release = featuredRelease

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0b0c] text-on-surface font-body antialiased">
      <Header label="MUSIC EDITION" variant="guadalupe" showProfile={false} />

      <main className="flex flex-col relative w-full pt-16 pb-28 bg-[#0b0b0c] min-h-screen">
        {/* Barra de retorno contextual */}
        <aside
          aria-label="Navegación de retorno"
          className="px-margin pt-4 pb-2 flex items-center justify-between border-b border-white/[0.03]"
        >
          <Link
            to="/"
            className="group flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors py-1"
          >
            <Icon name="west" className="text-[15px] transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-on-surface-variant group-hover:text-primary">
              RETORNO / HOME
            </span>
          </Link>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#ffc665]"></span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/90 font-medium">
              {release.master}
            </span>
          </div>
        </aside>

        {/* ============ 1. PORTADA + JERARQUÍA TIPOGRÁFICA ============ */}
        <section className="px-margin pt-6 pb-8 flex flex-col items-center relative overflow-hidden">
          {/* Glow ambiental */}
          <div className="absolute top-10 w-72 h-72 bg-[#ffc665]/[0.08] rounded-full blur-[90px] pointer-events-none"></div>

          {/* Portada */}
          <div className="relative w-full max-w-[340px] aspect-square rounded-sm overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] border border-white/[0.06] group">
            <img
              alt={`Portada de ${release.title} por ${release.artist}`}
              className="w-full h-full object-cover select-none transition-transform duration-1000 ease-out group-hover:scale-105"
              src={release.artwork}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2 py-0.5 border border-white/[0.08]">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span className="font-mono text-[9px] text-primary/90 tracking-widest font-bold">{release.catalog}</span>
            </div>
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-0.5 border border-white/[0.08]">
              <span className="font-mono text-[9px] text-on-surface-variant tracking-widest">{release.rpm}</span>
            </div>
          </div>

          {/* Jerarquía tipográfica */}
          <div className="w-full text-center mt-7 flex flex-col items-center">
            <span className="font-mono text-[10px] text-primary/80 tracking-[0.3em] uppercase">
              LANZAMIENTO OFICIAL
            </span>
            <h1 className="font-display text-[46px] leading-[48px] tracking-[-0.03em] text-on-surface uppercase mt-2 drop-shadow-2xl font-extrabold">
              {release.title}
            </h1>
            <p className="font-display text-[15px] text-on-surface/90 uppercase tracking-[0.25em] font-semibold mt-1">
              {release.artist}
            </p>
            <p className="font-mono text-[11px] text-on-surface-variant tracking-[0.18em] uppercase mt-2.5">
              {release.date} <span className="text-primary/60 mx-1.5">·</span> ÁLBUM: {release.album}
            </p>
          </div>

          {/* CTAs */}
          <div className="w-full max-w-[360px] grid grid-cols-2 gap-3 mt-7">
            <button
              className="group flex items-center justify-center gap-2 bg-on-surface text-black h-[50px] px-4 rounded-none hover:bg-white active:bg-primary transition-all shadow-[0_4px_20px_rgba(255,255,255,0.08)] cursor-pointer select-none"
              id="audio-trigger-btn"
            >
              <Icon name="graphic_eq" className="text-[20px] text-black" />
              <span className="font-display text-[12px] tracking-[0.2em] uppercase font-bold">ESCUCHAR</span>
            </button>
            <button
              className="flex items-center justify-center gap-2 border border-white/[0.15] bg-white/[0.02] text-on-surface h-[50px] px-4 rounded-none hover:bg-white/[0.06] hover:border-primary/50 transition-colors cursor-pointer select-none"
              id="video-anchor-btn"
              onClick={() => document.getElementById('video-stage')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            >
              <Icon name="play_arrow" className="text-[20px] text-primary" />
              <span className="font-display text-[12px] tracking-[0.2em] uppercase font-bold">VER VIDEO</span>
            </button>
          </div>

          {/* Player editorial */}
          <AudioPlayer title="Guadalupe — Single Edit" duration={release.duration} />
        </section>

        {/* ============ 2. SOBRE EL LANZAMIENTO ============ */}
        <section className="px-margin py-10 border-t border-white/[0.04]">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-primary tracking-[0.25em] uppercase font-bold">
                01 / CONCEPTO
              </span>
              <span className="w-6 h-[1px] bg-primary/40"></span>
            </div>
            <span className="font-mono text-[10px] text-on-surface-variant/60 tracking-widest uppercase">
              MEB EDITORIAL
            </span>
          </div>
          <h2 className="font-display text-[22px] tracking-[-0.01em] uppercase text-on-surface mb-3">
            Sobre el Lanzamiento
          </h2>
          <p className="font-body text-[15px] leading-[26px] text-on-surface/80 font-light max-w-prose">
            {release.description}
          </p>

          {/* Tabla de especificaciones */}
          <div className="grid grid-cols-2 gap-4 mt-6 pt-5 border-t border-white/[0.06]">
            {release.specs.map((spec) => (
              <div key={spec.label}>
                <span className="font-mono text-[9px] text-primary/80 uppercase tracking-[0.2em] block">
                  {spec.label}
                </span>
                <span className="font-body text-[13px] text-on-surface font-medium mt-1 block">{spec.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ============ 3. VIDEO OFICIAL ============ */}
        <section className="px-margin py-8 border-t border-white/[0.04]" id="video-stage">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-primary tracking-[0.25em] uppercase font-bold">
                02 / CINE
              </span>
              <span className="w-6 h-[1px] bg-primary/40"></span>
            </div>
            <span className="font-mono text-[10px] text-primary tracking-widest uppercase font-semibold border border-primary/30 px-2 py-0.5">
              {release.video.badge}
            </span>
          </div>
          <h2 className="font-display text-[22px] tracking-[-0.01em] uppercase text-on-surface mb-4">Video Oficial</h2>

          <MediaCard
            src={release.video.still}
            alt="Still del video oficial de GUADALUPE"
            ratio="aspect-video"
            playButton
            overlay={{
              title: release.video.title,
              meta: `${release.video.director} · ${release.video.duration}`,
            }}
          />
        </section>

        {/* ============ 4. BEHIND THE SONG ============ */}
        <section className="px-margin py-10 border-t border-white/[0.04]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-primary tracking-[0.25em] uppercase font-bold">
                {release.behindTheSong.label}
              </span>
              <span className="w-6 h-[1px] bg-primary/40"></span>
            </div>
            <span className="font-mono text-[10px] text-primary tracking-[0.2em] font-medium">
              {release.behindTheSong.count}
            </span>
          </div>
          <h2 className="font-display text-[22px] tracking-[-0.01em] uppercase text-on-surface mb-6">Behind the Song</h2>

          <div className="flex flex-col divide-y divide-white/[0.05]">
            {release.behindTheSong.chapters.map((chapter) => (
              <article key={chapter.id} className="py-6 flex flex-col group">
                {chapter.image && (
                  <div className="relative w-full aspect-[21/9] overflow-hidden border border-white/[0.06] mb-4 bg-black">
                    <img
                      alt={chapter.title}
                      src={chapter.image}
                      className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-sm border border-white/[0.08] px-2 py-0.5 font-mono text-[9px] text-primary tracking-widest uppercase">
                      {chapter.tag}
                    </span>
                  </div>
                )}

                {chapter.locked ? (
                  /* Bóveda VIP — contenido exclusivo */
                  <div className="p-5 border border-primary/20 bg-gradient-to-b from-primary/[0.03] to-transparent relative overflow-hidden">
                    <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
                    <div className="flex items-start justify-between">
                      <div className="flex flex-col">
                        <span className="font-mono text-[9px] text-primary tracking-[0.25em] uppercase font-bold">
                          {chapter.tag}
                        </span>
                        <h3 className="font-display text-[16px] uppercase text-on-surface mt-1 font-bold tracking-wide">
                          {chapter.title}
                        </h3>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-primary/40 flex items-center justify-center text-primary shadow-ember">
                        <Icon name="lock" className="text-[16px]" />
                      </div>
                    </div>
                    <p className="font-body text-[13px] text-on-surface-variant leading-relaxed mt-3 font-light">
                      {chapter.description}
                    </p>
                    <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon name="key" className="text-primary text-[17px]" />
                        <span className="font-mono text-[10px] text-on-surface tracking-widest uppercase font-medium">
                          MEB PASS REQUERIDO
                        </span>
                      </div>
                      <button
                        className="h-11 inline-flex items-center justify-center font-mono text-[11px] uppercase tracking-[0.22em] text-black bg-primary px-5 font-bold hover:bg-white active:bg-primary-fixed transition-colors select-none shadow-[0_2px_10px_rgba(255,198,101,0.25)]"
                        onClick={() => navigate('/backstage')}
                      >
                        {chapter.action}
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-display text-[16px] uppercase text-on-surface tracking-wider font-bold">
                        {chapter.title}
                      </h3>
                      <span className="font-mono text-[10px] text-on-surface-variant tracking-wider">{chapter.meta}</span>
                    </div>
                    <p className="font-body text-[13px] text-on-surface-variant leading-relaxed mt-2 font-light">
                      {chapter.description}
                    </p>
                    <div className="mt-3">
                      <button className="inline-flex items-center gap-2 h-11 px-3 -ml-3 rounded-none font-mono text-[11px] text-primary uppercase tracking-[0.2em] hover:text-white transition-colors cursor-pointer select-none active:text-primary/70">
                        {chapter.action}{' '}
                        <Icon name={chapter.actionIcon} className="text-[15px] translate-y-[-0.5px]" />
                      </button>
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* ============ 5. CRÉDITOS ============ */}
        <section className="px-margin py-10 border-t border-white/[0.04]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-primary tracking-[0.25em] uppercase font-bold">
                FICHA TÉCNICA
              </span>
              <span className="w-6 h-[1px] bg-primary/40"></span>
            </div>
            <span className="font-mono text-[10px] text-on-surface-variant/60 tracking-widest uppercase">
              CRÉDITOS OFICIALES
            </span>
          </div>
          <h2 className="font-display text-[22px] tracking-[-0.01em] uppercase text-on-surface mb-6">Créditos</h2>
          <div className="flex flex-col divide-y divide-white/[0.04]">
            {release.credits.map((credit) => (
              <div key={credit.role} className="py-3 flex flex-col">
                <span className="font-mono text-[9px] text-on-surface-variant uppercase tracking-[0.22em]">
                  {credit.role}
                </span>
                <span className="font-body text-[13px] text-on-surface font-medium mt-0.5">{credit.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ============ 6. CIERRE: EXPLORE MEB WORLD ============ */}
        <section className="px-margin pt-6 pb-12 text-center flex flex-col items-center border-t border-white/[0.04]">
          <div className="w-full py-10 px-4 flex flex-col items-center relative overflow-hidden">
            <span className="font-mono text-[10px] text-primary tracking-[0.3em] uppercase mb-2">
              UNIVERSO AUDIOVISUAL
            </span>
            <h3 className="font-display text-[30px] leading-tight uppercase text-on-surface tracking-[-0.02em] font-bold mb-3">
              Explore MEB World
            </h3>
            <p className="font-body text-[13px] text-on-surface-variant leading-relaxed max-w-xs mb-7 font-light">
              Accede a lanzamientos secretos, archivos de gira y entradas exclusivas a la comunidad nocturna.
            </p>
            <div className="flex flex-col w-full gap-2.5 justify-center max-w-[290px]">
              <button
                className="w-full flex items-center justify-center gap-2 bg-primary text-black font-mono text-[11px] uppercase tracking-[0.2em] font-bold py-3.5 px-4 shadow-[0_4px_20px_rgba(255,198,101,0.2)] hover:bg-white transition-all"
                onClick={() => navigate('/backstage')}
              >
                <Icon name="lock_open" className="text-[16px]" />
                Ir al Backstage
              </button>
              <button
                className="w-full flex items-center justify-center gap-2 border border-white/[0.12] bg-white/[0.02] text-on-surface font-mono text-[11px] uppercase tracking-[0.2em] font-medium py-3 px-4 hover:border-white/30 transition-all"
                onClick={() => navigate('/')}
              >
                <Icon name="roofing" className="text-[16px]" />
                Volver a Home
              </button>
            </div>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  )
}