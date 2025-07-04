// Card pour afficher une info clé (calories, protéines, etc.)
/**
 * Affiche une carte d'information clé (ex: calories, protéines).
 *
 * @component
 * @param {object} props - Les propriétés du composant.
 * @param {string} props.source - L'URL de l'icône à afficher.
 * @param {string} props.alt - Le texte alternatif pour l'icône.
 * @param {number} props.mesure - La valeur numérique de la mesure.
 * @param {string} props.nomMesure - Le nom de la mesure (ex: "Calories").
 * @param {string} props.bgColor - La couleur de fond pour le conteneur de l'icône.
 * @param {string} props.uniteMesure - L'unité de la mesure (ex: "kCal").
 * @returns {JSX.Element}
 */
export default function KeyInfoCard({source, alt, mesure, nomMesure, bgColor, uniteMesure}) {
  return <div className="flex w-full h-full max-h-[124px] bg-[#FBFBFB] p-8 gap-6 items-center">
    <img src={source} alt={alt} className={`bg-[${bgColor}] p-4 rounded`} />
    <div>
      <p className="font-bold text-[20px] leading-[24px] tracking-[0px]">{mesure}<span>{uniteMesure}</span></p>
      <p className="text-[#74798C] font-medium text-[14px] leading-[24px] tracking-[0px]">{nomMesure}</p>
    </div>
  </div>;
}
