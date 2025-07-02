// Page du profil utilisateur
import { mockUser } from '../services/mock';
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

export default function Profile() {
  const firstName = mockUser.userInfos.firstName;
  const calorieCount = mockUser.keyData.calorieCount;
  const proteinCount = mockUser.keyData.proteinCount;
  const carbohydrateCount = mockUser.keyData.carbohydrateCount;
  const lipidCount = mockUser.keyData.lipidCount;
  return (
    <main className="flex-1 bg-[#FFFFFF] p-8">
      <ProfileHeader firstName={firstName} />
      <div className='flex gap-8'>
        <section className="mt-8 w-full justify-between flex flex-col gap-8">
          <ActivityBarChart />
          <div className='flex gap-6'>
            <AverageSessionsLineChart />
            <PerformanceRadarChart />
            <ScoreRadialBarChart />
          </div>
        </section>
        <section className='flex flex-col gap-8 mt-8 w-full max-w-[258px] justify-between'>
            <KeyInfoCard source={calories} alt={"icon-calories"} mesure={calorieCount} nomMesure={"Calories"} bgColor={'#FFE5E5'} uniteMesure={"kCal"} />
            <KeyInfoCard source={proteines} alt={"icon-proteines"} mesure={proteinCount} nomMesure={"Proteines"} bgColor={'#4AB8FF1A'} uniteMesure={"g"} />
            <KeyInfoCard source={glucides} alt={"icon-glucides"} mesure={carbohydrateCount} nomMesure={"Glucides"} bgColor={'#FFFFEF'} uniteMesure={"g"} />
            <KeyInfoCard source={lipides} alt={"icon-lipides"} mesure={lipidCount} nomMesure={"Lipides"} bgColor={'#FD51811A'} uniteMesure={"g"} />
        </section>
      </div>
    </main>
  );
}
