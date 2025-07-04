// Mock de données pour le développement sans backend
export const mockUser = {
  id: 12,
  userInfos: { firstName: 'Karl', lastName: 'Dovineau', age: 31 },
  todayScore: 0.12,
  keyData: { calorieCount: 1930, proteinCount: 155, carbohydrateCount: 290, lipidCount: 50 },
};

// Activité quotidienne mockée pour le BarChart
export const mockActivity = [
  { day: '2025-07-01', kilogram: 80, calories: 240 },
  { day: '2025-07-02', kilogram: 80, calories: 220 },
  { day: '2025-07-03', kilogram: 81, calories: 280 },
  { day: '2025-07-04', kilogram: 81, calories: 290 },
  { day: '2025-07-05', kilogram: 80, calories: 160 },
  { day: '2025-07-06', kilogram: 78, calories: 162 },
  { day: '2025-07-07', kilogram: 76, calories: 390 },
  { day: '2025-07-08', kilogram: 75, calories: 210 },
  { day: '2025-07-09', kilogram: 75, calories: 220 },
  { day: '2025-07-10', kilogram: 74, calories: 300 },
];

// Mock pour la durée moyenne des sessions (du lundi au dimanche)
export const mockAverageSessions = [
  { day: 'L', sessionLength: 30 },
  { day: 'M', sessionLength: 23 },
  { day: 'M', sessionLength: 45 },
  { day: 'J', sessionLength: 50 },
  { day: 'V', sessionLength: 0 },
  { day: 'S', sessionLength: 60 },
  { day: 'D', sessionLength: 40 },
];

export const mockPerformance = [
  { subject: 'Intensité', value: 80 },
  { subject: 'Vitesse', value: 90 },
  { subject: 'Force', value: 70 },
  { subject: 'Endurance', value: 60 },
  { subject: 'Énergie', value: 80 },
  { subject: 'Cardio', value: 50 },
];