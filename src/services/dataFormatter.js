// Fonctions utilitaires pour standardiser les données de l'API

/**
 * Formate les données utilisateur brutes pour assurer la cohérence des données dans l'application.
 * Cette fonction normalise notamment le champ 'score' qui peut être 'todayScore' ou 'score' selon la source.
 *
 * @param {object} rawData - L'objet 'data' brut reçu de l'API /user/:id.
 * @returns {object|null} Un objet contenant les données utilisateur formatées { id, userInfos, score, keyData }, ou null si les données brutes sont invalides.
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
 * Extrait et renvoie les sessions d'activité de l'utilisateur.
 * Fournit un tableau vide si les données sont absentes.
 *
 * @param {object} rawData - L'objet 'data' brut reçu de l'API /user/:id/activity.
 * @returns {Array<object>} Un tableau des sessions d'activité, ou un tableau vide.
 */
export function formatActivityData(rawData) {
  return rawData && rawData.sessions ? rawData.sessions : [];
}

/**
 * Extrait et renvoie les sessions moyennes de l'utilisateur.
 * Fournit un tableau vide si les données sont absentes.
 *
 * @param {object} rawData - L'objet 'data' brut reçu de l'API /user/:id/average-sessions.
 * @returns {Array<object>} Un tableau des sessions moyennes, ou un tableau vide.
 */
export function formatAverageSessionsData(rawData) {
  return rawData && rawData.sessions ? rawData.sessions : [];
}

/**
 * Formate les données de performance pour le graphique radar.
 * Traduit les types de performance en français et les structure pour Recharts.
 *
 * @param {object} rawData - L'objet 'data' brut reçu de l'API /user/:id/performance.
 * @returns {Array<object>} Un tableau d'objets formatés [{ subject, value }], prêt pour le graphique radar.
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

/**
 * Met en majuscule la première lettre d'une chaîne de caractères.
 *
 * @param {string} str - La chaîne de caractères à transformer.
 * @returns {string} La chaîne de caractères avec la première lettre en majuscule.
 */
function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

