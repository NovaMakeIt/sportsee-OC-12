// Header du dashboard
import logo from '../../assets/logo/logo.svg';

export default function Header() {
  return (
    <header className="w-full h-[91px] bg-[#020203] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center">
      <div className="flex items-center w-full max-w-[1440px] mx-auto px-8 gap-24">
        <img src={logo} alt="SportSee Logo" className="h-10 mr-12" />
        <nav className="w-full flex justify-between gap-10 ml-auto">
          <a href="#" className="font-['Roboto'] font-medium text-[24px] leading-6 text-white hover:underline">Accueil</a>
          <a href="#" className="font-['Roboto'] font-medium text-[24px] leading-6 text-white hover:underline">Profil</a>
          <a href="#" className="font-['Roboto'] font-medium text-[24px] leading-6 text-white hover:underline">Réglage</a>
          <a href="#" className="font-['Roboto'] font-medium text-[24px] leading-6 text-white hover:underline">Communauté</a>
        </nav>
      </div>
    </header>
  );
}
