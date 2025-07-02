// LineChart pour afficher la durée des sessions
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from 'recharts'
import { mockAverageSessions } from '../../services/mock'

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

export default function AverageSessionsChart() {
  return (
    <div className="bg-[#FF0000] rounded-[5px] h-full max-h-[250px] w-full p-8">
      <h2 className="text-white text-sm opacity-50 mb-4">
        Durée moyenne des sessions
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={mockAverageSessions}
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