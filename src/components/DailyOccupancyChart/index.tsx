import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DailyOccupancyChartProps {
  className?: string;
  data: Array<any>;
}

export default function DailyOccupancyChart({className, data}: DailyOccupancyChartProps) {
  return (
    <ResponsiveContainer className={cx(className)} width="99%" height="100%">
      <AreaChart data={data} margin={{top: 40, right: 40, bottom: 20, left: 0}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="occupancy" stroke="#ed7270" fill="#ed7270" />
      </AreaChart>
    </ResponsiveContainer>
  );
};