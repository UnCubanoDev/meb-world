import { useRef, useState } from 'react'
import Icon from './Icon'

interface AudioPlayerProps {
  title: string
  duration: string
  /** Posición inicial del progreso (0-100) */
  initialProgress?: number
  /** Mostrar controles secundarios (mute/fav) */
  showControls?: boolean
  /** Variante: 'pod' (GUADALUPE) | 'waveform' (FAN HOME) */
  variant?: 'pod' | 'waveform'
  badge?: string
}

/**
 * Reproductor editorial — estilo Stitch.
 * Variante 'pod': scrubber con knob dorado (página GUADALUPE).
 * Variante 'waveform': barras de ecualizador interactivas (FAN HOME).
 */
export default function AudioPlayer({
  title,
  duration,
  initialProgress = 38,
  showControls = true,
  variant = 'pod',
  badge,
}: AudioPlayerProps) {
  const [progress, setProgress] = useState(initialProgress)

  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    setProgress(ratio * 100)
  }

  if (variant === 'waveform') {
    return <WaveformPlayer title={title} duration={duration} badge={badge} />
  }

  return (
    <div
      className="w-full max-w-[360px] mt-4 pt-3 pb-2 px-1 border-t border-b border-white/[0.06]"
      id="interactive-player-pod"
    >
      <div className="flex items-center justify-between text-[12px] font-mono mb-1">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#ffc665]"></span>
          <span className="text-on-surface font-medium tracking-wide">{title}</span>
        </div>
        <span className="text-primary font-mono text-[11px] font-semibold">{duration}</span>
      </div>

      {/* Scrubber */}
      <div
        className="w-full h-8 flex items-center cursor-pointer group my-1 relative touch-none"
        id="scrubber-touch-zone"
        onClick={handleScrub}
      >
        <div className="w-full bg-white/[0.08] h-[3px] rounded-full relative overflow-visible">
          <div
            className="bg-primary h-full rounded-full relative transition-all duration-300"
            id="player-progress-bar"
            style={{ width: `${progress}%` }}
          >
            <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-primary rounded-full shadow-[0_0_10px_#ffc665] transition-transform group-hover:scale-125"></span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-on-surface-variant pt-0.5">
        <span className="font-mono text-[11px] text-on-surface-variant/90">
          {formatPodTime(progress, duration)}
        </span>
        {showControls && (
          <div className="flex items-center gap-1">
            <button
              aria-label="Silenciar"
              className="w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              <Icon name="volume_up" className="text-[19px]" />
            </button>
            <button
              aria-label="Añadir a favoritos"
              className="w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              <Icon name="favorite" className="text-[19px]" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

/** Reproductor de waveform para FAN HOME (contenido desbloqueado) */
function WaveformPlayer({ title, duration, badge }: { title: string; duration: string; badge?: string }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [seconds, setSeconds] = useState(74)
  const [activeBars, setActiveBars] = useState(9)
  const intervalRef = useRef<number | null>(null)

  const bars = [3, 5, 7, 9, 5, 8, 6, 4, 8, 10, 7, 5, 9, 6, 4, 9, 7, 3, 6, 8, 4, 2]

  const togglePlay = () => {
    if (isPlaying) {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
      setIsPlaying(false)
      return
    }
    setIsPlaying(true)
    intervalRef.current = window.setInterval(() => {
      setSeconds((s) => {
        const next = s + 1
        return next >= 222 ? 0 : next
      })
    }, 1000)
  }

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60).toString().padStart(2, '0')
    const secs = (s % 60).toString().padStart(2, '0')
    return `${mins}:${secs}`
  }

  const handleWaveClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    setSeconds(Math.floor(ratio * 222))
    setActiveBars(Math.floor(ratio * bars.length))
  }

  return (
    <div className="relative rounded-xl p-5 bg-gradient-to-b from-[#141316] to-[#100f12] border border-white/10 shadow-card-soft flex flex-col gap-4 overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.03] rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex items-start justify-between gap-4 relative z-10">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
            <span className="font-mono text-[10px] text-primary/90 tracking-[0.15em] uppercase">
              EXCLUSIVE CUT · STUDIO SESSIONS
            </span>
          </div>
          <h3 className="font-display text-[17px] leading-tight text-on-surface font-semibold truncate">{title}</h3>
          <p className="font-mono text-[11px] text-on-surface-variant/80 mt-1 tracking-tight">
            Grabado en vivo en La Habana Vieja · Master Take 04
          </p>
        </div>
        <button
          aria-label="Play acoustic cut"
          className="w-14 h-14 shrink-0 bg-primary hover:bg-[#ffd68a] text-on-primary rounded-full flex items-center justify-center transition-all duration-300 active:scale-95 shadow-ember cursor-pointer"
          onClick={togglePlay}
        >
          <Icon name={isPlaying ? 'pause' : 'play_arrow'} filled className="text-[26px] translate-x-[0.5px]" />
        </button>
      </div>

      <div className="flex flex-col gap-2 pt-1 relative z-10">
        <div className="h-10 flex items-end gap-[3px] px-0.5 cursor-pointer select-none" onClick={handleWaveClick}>
          {bars.map((h, i) => (
            <span
              key={i}
              className={`flex-1 rounded-full transition-all duration-300 ${
                i <= activeBars ? 'bg-primary' : 'bg-white/[0.12]'
              }`}
              style={{ height: `${h * 4}px` }}
            ></span>
          ))}
        </div>
        <div className="flex justify-between items-center font-mono text-[10px] text-on-surface-variant/70 px-0.5 tracking-wider">
          <span className="tabular-nums">{formatTime(seconds)}</span>
          {badge && (
            <span className="text-primary font-medium tracking-[0.16em] text-[9px] px-2 py-0.5 rounded bg-white/[0.02] border border-primary/20">
              {badge}
            </span>
          )}
          <span className="tabular-nums">{duration}</span>
        </div>
      </div>
    </div>
  )
}

/** Convierte el progreso (0-100) en un tiempo "mm:ss" derivado de la duración total. */
function formatPodTime(progress: number, duration: string) {
  const [mins, secs] = duration.split(':').map(Number)
  const total = (mins || 0) * 60 + (secs || 0)
  const current = Math.floor((total * progress) / 100)
  const m = Math.floor(current / 60)
    .toString()
    .padStart(2, '0')
  const s = (current % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}