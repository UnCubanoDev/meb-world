/**
 * Separador hairline — línea estructural de 1px con degradado.
 */
export default function Hairline() {
  return (
    <div className="w-full px-margin">
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </div>
  )
}