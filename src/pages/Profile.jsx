// Page du profil utilisateur
import { useEffect, useState } from 'react';
import { fetchUserData } from '../services/api';
import { formatUserData } from '../services/dataFormatter';
import ProfileHeader from '../components/ProfileHeader';
import ActivityBarChart from '../components/charts/ActivityBarChart';
import AverageSessionsLineChart from '../components/charts/AverageSessionsLineChart';
import PerformanceRadarChart from '../components/charts/PerformanceRadarChart';
import ScoreRadialBarChart from '../components/charts/ScoreRadialBarChart';
import KeyInfoCard from '../components/cards/KeyInfoCard';

import calories from '../assets/icon/calories.svg';
import proteines from '../assets/icon/proteines.svg';
import glucides from '../assets/icon/glucides.svg';
import lipides from '../assets/icon/lipides.svg';

/**
 * Affiche la page de profil de l'utilisateur.
 * Ce composant récupère les données de l'utilisateur, gère les états de chargement et d'erreur,
 * et affiche les différents graphiques et cartes d'information.
 *
 * @component
 * @returns {JSX.Element}
 */
export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const userId = 12; // à adapter

  useEffect(() => {
    setLoading(true);
    fetchUserData(userId)
      .then(data => {
        setUser(formatUserData(data.data));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [userId]);

  if (loading || !user) {
    return <main className="flex-1 bg-[#FFFFFF] p-8 flex items-center justify-center"><span>Chargement...</span></main>;
  }

  const firstName = user.userInfos.firstName;
  const calorieCount = user.keyData.calorieCount;
  const proteinCount = user.keyData.proteinCount;
  const carbohydrateCount = user.keyData.carbohydrateCount;
  const lipidCount = user.keyData.lipidCount;

  return (
            <main className="flex-1 bg-[#FFFFFF] p-8 overflow-y-auto xl:overflow-y-hidden">
      <ProfileHeader firstName={firstName} />
      <div className='flex flex-col xl:flex-row gap-8'>
        <section className="mt-8 w-full flex flex-col gap-8 justify-between">
          <div className='h-activity-chart-responsive'>
            <ActivityBarChart userId={userId} />
          </div>
          <div className='flex flex-col xl:flex-row gap-6'>
            <AverageSessionsLineChart userId={userId} />
            <div className="flex flex-col md:flex-row gap-6 xl:contents">
              <PerformanceRadarChart userId={userId} />
              <ScoreRadialBarChart userId={userId} />
            </div>
          </div>
        </section>
        <section className='flex flex-col md:flex-row xl:flex-col gap-8 mt-8 w-full xl:max-w-[258px] justify-between'>
            <KeyInfoCard source={calories} alt={"icon-calories"} mesure={calorieCount} nomMesure={"Calories"} bgColor={'#FFE5E5'} uniteMesure={"kCal"} />
            <KeyInfoCard source={proteines} alt={"icon-proteines"} mesure={proteinCount} nomMesure={"Proteines"} bgColor={'#4AB8FF1A'} uniteMesure={"g"} />
            <KeyInfoCard source={glucides} alt={"icon-glucides"} mesure={carbohydrateCount} nomMesure={"Glucides"} bgColor={'#FFFFEF'} uniteMesure={"g"} />
            <KeyInfoCard source={lipides} alt={"icon-lipides"} mesure={lipidCount} nomMesure={"Lipides"} bgColor={'#FD51811A'} uniteMesure={"g"} />
        </section>
      </div>
    </main>
  );
}

