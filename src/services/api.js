// Service pour les appels à l'API backend (fetch)
export async function fetchUserData(userId) {
  const res = await fetch(`http://localhost:3000/user/${userId}`);
  return res.json();
}

export async function fetchUserActivity(userId) {
  const res = await fetch(`http://localhost:3000/user/${userId}/activity`);
  return res.json();
}

export async function fetchUserAverageSessions(userId) {
  const res = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
  return res.json();
}

export async function fetchUserPerformance(userId) {
  const res = await fetch(`http://localhost:3000/user/${userId}/performance`);
  return res.json();
}

