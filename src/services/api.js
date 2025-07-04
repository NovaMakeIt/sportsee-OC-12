// Service pour les appels à l'API backend (fetch)
/**
 * Récupère les données principales de l'utilisateur depuis l'API.
 * @param {number} userId - L'ID de l'utilisateur.
 * @returns {Promise<object>} Les données de l'utilisateur.
 */
export async function fetchUserData(userId) {
  const res = await fetch(`http://localhost:3000/user/${userId}`);
  return res.json();
}

/**
 * Récupère les données d'activité de l'utilisateur depuis l'API.
 * @param {number} userId - L'ID de l'utilisateur.
 * @returns {Promise<object>} Les données d'activité.
 */
export async function fetchUserActivity(userId) {
  const res = await fetch(`http://localhost:3000/user/${userId}/activity`);
  return res.json();
}

/**
 * Récupère les données sur la durée moyenne des sessions de l'utilisateur depuis l'API.
 * @param {number} userId - L'ID de l'utilisateur.
 * @returns {Promise<object>} Les données des sessions moyennes.
 */
export async function fetchUserAverageSessions(userId) {
  const res = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
  return res.json();
}

/**
 * Récupère les données de performance de l'utilisateur depuis l'API.
 * @param {number} userId - L'ID de l'utilisateur.
 * @returns {Promise<object>} Les données de performance.
 */
export async function fetchUserPerformance(userId) {
  const res = await fetch(`http://localhost:3000/user/${userId}/performance`);
  return res.json();
}

