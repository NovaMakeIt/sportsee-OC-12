// Card pour afficher une info clé (calories, protéines, etc.)
export default function KeyInfoCard({source, alt, mesure, nomMesure, bgColor, uniteMesure}) {
  return <div className="flex w-full h-full max-h-[124px] bg-[#FBFBFB] p-8 gap-6 items-center">
    <img src={source} alt={alt} className={`bg-[${bgColor}] p-4 rounded`} />
    <div>
      <p className="font-bold text-[20px] leading-[24px] tracking-[0px]">{mesure}<span>{uniteMesure}</span></p>
      <p className="text-[#74798C] font-medium text-[14px] leading-[24px] tracking-[0px]">{nomMesure}</p>
    </div>
  </div>;
}
