// RadialBarChart pour afficher le score moyen
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts'
import { useEffect, useState } from 'react'
import { fetchUserData } from '../../services/api'

/**
 * Affiche le score de l'utilisateur sous forme de graphique radial.
 * Le score représente le pourcentage de l'objectif atteint.
 *
 * @component
 * @param {object} props - Les propriétés du composant.
 * @param {number} props.userId - L'ID de l'utilisateur pour récupérer les données.
 * @returns {JSX.Element}
 */
export default function RadialScoreChart({ userId }) {
  const [score, setScore] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetchUserData(userId)
      .then(res => {
        if (res && res.data && (res.data.todayScore !== undefined || res.data.score !== undefined)) {
          setScore(res.data.todayScore || res.data.score)
        } else {
          setScore(null)
        }
        setLoading(false)
      })
      .catch(() => {
        setScore(null)
        setLoading(false)
      })
  }, [userId])

  if (loading || score === null) {
    return <div className="bg-[#FBFBFB] rounded-[5px] h-full max-h-[250px] w-full flex items-center justify-center">Chargement...</div>
  }
  const data = [
    {
      name: 'score',
      value: score * 100,
      fill: '#FF0000',
    },
  ]

  return (
    <div className="bg-[#FBFBFB] rounded-[5px] h-full max-h-[250px] w-full relative flex flex-col justify-between p-4">
      <h2 className="text-sm font-medium text-[#20253A]">Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="80%"
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={450}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            tick={false}
          />
          <RadialBar
            background
            dataKey="value"
            cornerRadius={10}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center mt-4">
        <p className="text-xl xl:text-2xl font-bold text-[#282D30]">
          {score * 100}%
        </p>
        <p className="text-[9px] xl:text-sm max-w-[20%] font-medium text-[#74798C] text-center leading-tight xl:leading-[26px]">
          de votre objectif
        </p>
      </div>
    </div>
  )
}