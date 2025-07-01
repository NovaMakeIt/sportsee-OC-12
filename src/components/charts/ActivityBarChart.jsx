// BarChart pour afficher l'activité quotidienne
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { mockActivity } from '../../services/mock';

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length === 2) {
    return (
      <div
        style={{
          width: 39,
          height: 63,
          background: '#E60000',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFF',
        }}
      >
        <div style={{ fontWeight: 500, fontSize: 7, lineHeight: '24px', textAlign: 'center' }}>{payload[0].value}kg</div>
        <div style={{ fontWeight: 500, fontSize: 7, lineHeight: '24px', textAlign: 'center' }}>{payload[1].value}Kcal</div>
      </div>
    );
  }
  return null;
}

export default function ActivityBarChart() {
  // Pour l'axe X, on veut juste 1 à 7
  const data = mockActivity.map((item, idx) => ({ ...item, dayLabel: idx + 1 }));

  return (
    <div className="bg-white rounded-xl p-6 shadow-md w-full h-[320px]">
      <h2 className="font-medium text-[15px] leading-6 text-[#20253A] mb-4">Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data} barGap={8}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="dayLabel" tickLine={false} axisLine={false} />
          {
(() => {
  const kgValues = data.map(d => d.kilogram);
  const min = Math.min(...kgValues);
  const max = Math.max(...kgValues);
  const middle = (min + max) / 2;
  const ticks = [min, middle, max];
  return (
    <YAxis
      yAxisId="kg"
      dataKey="kilogram"
      orientation="right"
      axisLine={false}
      tickLine={false}
      domain={[min, max]}
      ticks={ticks}
      tickFormatter={v => Number.isInteger(v) ? v : v.toFixed(1)}
    />
  );
})()}

          <YAxis yAxisId="cal" dataKey="calories" hide />
          <Tooltip cursor={{ fill: '#e5e5e5' }} content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            wrapperStyle={{ top: -30, right: 0 }}

          />
          <Bar yAxisId="kg" dataKey="kilogram" name="Poids (kg)" fill="#282D30" radius={[10, 10, 0, 0]} barSize={7} />
          <Bar yAxisId="cal" dataKey="calories" name="Calories brûlées (kCal)" fill="#E60000" radius={[10, 10, 0, 0]} barSize={7} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
