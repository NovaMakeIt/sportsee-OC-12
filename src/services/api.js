// Service pour les appels à l'API backend (fetch)
export async function fetchUserData(userId) {
  const res = await fetch(`http://localhost:3000/user/${userId}`);
  return res.json();
}
