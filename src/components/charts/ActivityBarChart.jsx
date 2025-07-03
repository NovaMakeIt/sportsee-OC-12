// BarChart pour afficher l'activité quotidienne
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { useEffect, useState } from 'react'
import { fetchUserActivity } from '../../services/api'
import { formatActivityData } from '../../services/dataFormatter'

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#E60000] text-white text-xs p-2 rounded">
        <p>{payload[0].value} kg</p>
        <p>{payload[1].value} Kcal</p>
      </div>
    )
  }
  return null
}

export default function ActivityBarChart({ userId }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetchUserActivity(userId)
      .then(res => {
        if (res && res.data && res.data.sessions) {
          setData(formatActivityData(res.data))
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
    return <div className="bg-[#FBFBFB] rounded-[5px] h-full max-h-[320px] w-full p-8 flex items-center justify-center">Chargement...</div>
  }

  // Reformater les jours : 1, 2, 3...
  const formattedData = data.map((item, index) => ({
    ...item,
    day: index + 1,
  }))

  // Extraire les poids pour calculer le min/max arrondi
  const kilos = data.map((a) => a.kilogram)
  const minKg = Math.min(...kilos) - 1
  const maxKg = Math.max(...kilos) + 1
  const midKg = Math.round((minKg + maxKg) / 2)
  const yTicks = [minKg, midKg, maxKg]

  return (
    <div className="bg-[#FBFBFB] rounded-[5px] h-full max-h-[320px] w-full p-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-medium text-[#20253A]">
          Activité quotidienne
        </h2>
        <div className="flex gap-4 text-[#74798C] text-[14px] font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#282D30] inline-block"></span>
            Poids (kg)
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E60000] inline-block"></span>
            Calories brûlées (Kcal)
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={formattedData}
          barGap={8}
          margin={{ top: 20, right: 0, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            stroke="#9B9EAC"
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            dataKey="calories"
            hide
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            dataKey="kilogram"
            tickLine={false}
            axisLine={false}
            stroke="#9B9EAC"
            domain={[minKg, maxKg]}
            ticks={yTicks}
            tick={{ dx: 30 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            fill="#282D30"
            radius={[3, 3, 0, 0]}
            name="Poids (kg)"
            barSize={7}
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            fill="#E60000"
            radius={[3, 3, 0, 0]}
            name="Calories brûlées (Kcal)"
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
