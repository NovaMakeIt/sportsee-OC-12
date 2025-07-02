// RadialBarChart pour afficher le score moyen
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts'
import { mockUser } from '../../services/mock'

export default function RadialScoreChart() {
  const data = [
    {
      name: 'score',
      value: mockUser.todayScore * 100,
      fill: '#FF0000',
    },
  ]

  return (
    <div className="bg-[#FBFBFB] rounded-[5px] h-[250px] w-full relative flex flex-col justify-between p-4">
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
          {mockUser.todayScore * 100}%
        </p>
        <p className="text-[9px] xl:text-sm max-w-[20%] font-medium text-[#74798C] text-center leading-tight xl:leading-[26px]">
          de votre objectif
        </p>
      </div>
    </div>
  )
}