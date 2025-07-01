// Page du profil utilisateur
import { mockUser } from '../services/mock';
import ProfileHeader from '../components/ProfileHeader';
import ActivityBarChart from '../components/charts/ActivityBarChart';

export default function Profile() {
  const firstName = mockUser.userInfos.firstName;
  return (
    <main className="flex-1 bg-[#F7F7F7] p-8">
      <ProfileHeader firstName={firstName} />
      <section className="mt-8 w-full max-w-4xl">
        <ActivityBarChart />
      </section>
    </main>
  );
}
