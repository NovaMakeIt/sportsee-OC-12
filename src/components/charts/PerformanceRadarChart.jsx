// RadarChart pour afficher les performances
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'
import { mockPerformance } from '../../services/mock'

export default function PerformanceRadarChart() {
  return (
    <div className="bg-[#282D30] rounded-[5px] h-[250px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={mockPerformance}>
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