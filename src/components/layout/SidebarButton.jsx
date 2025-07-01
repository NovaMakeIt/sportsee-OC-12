// Bouton d'icône pour la sidebar
export default function SidebarButton({ icon, alt = "icon" }) {
  return (
    <button
      className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md hover:cursor-pointer"
      tabIndex={-1}
    >
      <img src={icon} alt={alt} className="w-8 h-8" />
    </button>
  );
}
