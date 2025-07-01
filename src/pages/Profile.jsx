// Page du profil utilisateur
import { mockUser } from '../services/mock';
import ProfileHeader from '../components/ProfileHeader';

export default function Profile() {
  const firstName = mockUser.userInfos.firstName;
  return (
    <main>
      <ProfileHeader firstName={firstName} />
    </main>
  );
}
