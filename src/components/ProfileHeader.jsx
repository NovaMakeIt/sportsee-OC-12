// Header du profil utilisateur
export default function ProfileHeader({ firstName }) {
  return (
    <div>
      <h1 className="text-4xl font-bold">Bonjour <span className="text-red-500">{firstName}</span></h1>
      <p className="text-gray-700 mt-2">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}
