// Sidebar du dashboard
import yoga from '../../assets/icon/yoga.svg';
import natation from '../../assets/icon/natation.svg';
import velo from '../../assets/icon/velo.svg';
import musculation from '../../assets/icon/musculation.svg';
import SidebarButton from './SidebarButton';

export default function Sidebar() {
  return (
    <aside className="bg-[#020203] w-[117px] h-full flex flex-col items-center justify-between py-8">
      <div className="flex-1 flex flex-col justify-center gap-4">
        <SidebarButton icon={yoga} alt="Yoga" />
        <SidebarButton icon={natation} alt="Natation" />
        <SidebarButton icon={velo} alt="Vélo" />
        <SidebarButton icon={musculation} alt="Musculation" />
      </div>
      <div className="flex flex-col items-center mb-16">
        <span className="text-white text-[12px] font-['Roboto'] font-medium leading-6 tracking-normal rotate-[-90deg] whitespace-nowrap select-none">
          Copiryght, SportSee 2025
        </span>
      </div>
    </aside>
  );
}
