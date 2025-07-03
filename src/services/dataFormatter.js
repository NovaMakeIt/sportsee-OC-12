// Fonctions utilitaires pour standardiser les données de l'API
/**
 * Standardise les données utilisateur pour avoir toujours un champ 'score'.
 * @param {object} rawData - Objet 'data' de l'API /user/:id
 * @returns {object} - { id, userInfos, score, keyData }
 */
export function formatUserData(rawData) {
  if (!rawData) return null;
  return {
    id: rawData.id,
    userInfos: rawData.userInfos,
    score: rawData.todayScore !== undefined ? rawData.todayScore : rawData.score,
    keyData: rawData.keyData,
  };
}

/**
 * Renvoie les sessions d'activité sans modification (API déjà homogène)
 * @param {object} rawData - Objet 'data' de l'API /user/:id/activity
 * @returns {Array} - Tableau de sessions
 */
export function formatActivityData(rawData) {
  return rawData && rawData.sessions ? rawData.sessions : [];
}

/**
 * Renvoie les sessions moyennes sans modification (API déjà homogène)
 * @param {object} rawData - Objet 'data' de l'API /user/:id/average-sessions
 * @returns {Array} - Tableau de sessions
 */
export function formatAverageSessionsData(rawData) {
  return rawData && rawData.sessions ? rawData.sessions : [];
}

/**
 * Transforme les performances en [{ subject, value }]
 * @param {object} rawData - Objet 'data' de l'API /user/:id/performance
 * @returns {Array} - Tableau formaté pour le radar chart
 */
export function formatPerformanceData(rawData) {
  if (!rawData || !rawData.kind || !rawData.data) return [];
  // Mapping anglais -> français avec majuscule
  const kindFr = {
    cardio: 'Cardio',
    energy: 'Énergie',
    endurance: 'Endurance',
    strength: 'Force',
    speed: 'Vitesse',
    intensity: 'Intensité',
  };
  return rawData.data.map(item => ({
    subject: kindFr[rawData.kind[item.kind]] || capitalize(rawData.kind[item.kind]),
    value: item.value
  }));
}

// Utilitaire pour mettre la première lettre en majuscule (fallback)
function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

