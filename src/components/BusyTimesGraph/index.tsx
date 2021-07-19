import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "9h",
    uv: 20,
  },
  {
    name: "",
    uv: 70,
  },
  {
    name: "12h",
    uv: 75,
  },
  {
    name: "",
    uv: 20,
  },
  {
    name: "15h",
    uv: 30,
  },
  {
    name: "",
    uv: 40,
  },
  {
    name: "18h",
    uv: 70,
  },
  {
    name: "",
    uv: 70,
  },
  {
    name: "21h",
    uv: 35,
  },
  {
    name: "",
    uv: 30,
  },
];

interface IProps {}

function BusyTimesGraph() {
  return (
    <div className={css.container}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={data}>
          <Bar
            radius={[10, 10, 10, 10]}
            barSize={12}
            dataKey="uv"
            fill="#F2AAA1"
          />
          <XAxis
            padding={{ left: 20, right: 20 }}
            dataKey="name"
            interval="preserveStart"
            tickMargin={20}
            axisLine={{ transform: "translate(0, 10)" }}
            tickLine={{ transform: "translate(0, 10)" }}
            tickSize={4}
            tickFormatter={(value, index) => {
              if (!value) return "";
              return value;
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BusyTimesGraph;
