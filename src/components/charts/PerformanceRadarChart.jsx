// RadarChart pour afficher les performances
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'
import { useEffect, useState } from 'react'
import { fetchUserPerformance } from '../../services/api'
import { formatPerformanceData } from '../../services/dataFormatter'

/**
 * Affiche les performances de l'utilisateur sous forme de graphique en radar.
 * Chaque axe du radar représente un type de performance (ex: Cardio, Energie).
 *
 * @component
 * @param {object} props - Les propriétés du composant.
 * @param {number} props.userId - L'ID de l'utilisateur pour récupérer les données.
 * @returns {JSX.Element}
 */
export default function PerformanceRadarChart({ userId }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetchUserPerformance(userId)
      .then(res => {
        if (res && res.data && res.data.data && res.data.kind) {
          setData(formatPerformanceData(res.data))
        } else {
          setData([])
        }
        setLoading(false)
      })
      .catch(() => {
        setData([])
        setLoading(false)
      })
  }, [userId])

  if (loading || !data) {
    return <div className="bg-[#282D30] rounded-[5px] h-full max-h-[250px] w-full flex items-center justify-center text-white">Chargement...</div>
  }
  return (
    <div className="bg-[#282D30] rounded-[5px] h-full max-h-[250px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#FFFFFF" strokeOpacity={0.6} radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            stroke="#FFFFFF"
            tick={{ fontSize: 12 }}
            tickLine={false}
          />
          <Radar
            name="Performance"
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}