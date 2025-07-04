// LineChart pour afficher la durée des sessions
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from 'recharts'
import { useEffect, useState } from 'react'
import { fetchUserAverageSessions } from '../../services/api'
import { formatAverageSessionsData } from '../../services/dataFormatter'

/**
 * Affiche une infobulle personnalisée pour le graphique des sessions moyennes.
 *
 * @param {object} props - Les propriétés de l'infobulle.
 * @param {boolean} props.active - Indique si l'infobulle est active.
 * @param {Array} props.payload - Les données à afficher dans l'infobulle.
 * @returns {JSX.Element|null}
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="w-[39px] h-[25px] bg-white text-black text-[8px] font-medium text-center leading-[24px] shadow rounded-sm"
        style={{ lineHeight: '24px' }}
      >
        {`${payload[0].value} min`}
      </div>
    )
  }
  return null
}

/**
 * Affiche un graphique en ligne représentant la durée moyenne des sessions de l'utilisateur.
 *
 * @component
 * @param {object} props - Les propriétés du composant.
 * @param {number} props.userId - L'ID de l'utilisateur pour récupérer les données.
 * @returns {JSX.Element}
 */
export default function AverageSessionsChart({ userId }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetchUserAverageSessions(userId)
      .then(res => {
        if (res && res.data && res.data.sessions) {
          setData(formatAverageSessionsData(res.data))
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
    return <div className="bg-[#FF0000] rounded-[5px] h-full max-h-[250px] w-full p-8 flex items-center justify-center text-white">Chargement...</div>
  }
  return (
    <div className="bg-[#FF0000] rounded-[5px] h-full max-h-[250px] w-full p-8">
      <h2 className="text-white text-sm opacity-50 mb-4">
        Durée moyenne des sessions
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="day"
            stroke="#ffffff"
            opacity={0.5}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
            padding={{ left: 10, right: 10 }}
            tickFormatter={day => ['L','M','M','J','V','S','D'][day-1]}
          />
          <Tooltip
            content={<CustomTooltip />}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="url(#lineGradient)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 4,
              stroke: 'white',
              strokeWidth: 2,
              fill: 'white',
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}