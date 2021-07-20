import classnames from "classnames/bind";
import css from "./styles.module.scss";
import { useRef, useEffect, useState } from "react";
import { dataGraph } from "./data";
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

const DAYS = [
  {
    text: "L",
    att: "monday",
  },
  {
    text: "M",
    att: "monday",
  },
  {
    text: "M",
    att: "wednesday",
  },
  {
    text: "J",
    att: "thursday",
  },
  {
    text: "V",
    att: "friday",
  },
  {
    text: "S",
    att: "saturday",
  },
  {
    text: "S",
    att: "sunday",
  },
];

interface IProps {}

function BusyTimesGraph() {
  const daysPosition = useRef(null);
  const [activeDay, setActiveDay] = useState(0);

  const getDaysPosition = () => {
    const days: NodeListOf<Element> =
      document.querySelectorAll("div[data-day]");
    daysPosition.current = [];

    days.forEach((el: any) => {
      daysPosition.current.push({
        left: el.offsetLeft,
        width: el.getBoundingClientRect().width,
      });
    });
  };

  const getOffsetLeft: any = () => {
    if (!daysPosition.current) return 0;
    return daysPosition.current[activeDay].left;
  };
  const getOffsetWidth: any = () => {
    if (!daysPosition.current) return 0;
    return Math.round(daysPosition.current[activeDay].width);
  };

  const handleClick = (i) => {
    setActiveDay(i);
    console.log("yo");
  };

  useEffect(() => {
    getDaysPosition();
  }, []);

  return (
    <div className={css.container}>
      <div className={css.days}>
        <div
          className={css.daysSelector}
          style={{
            transform: `translateX(${getOffsetLeft()}px)`,
            width: `${getOffsetWidth()}px`,
          }}
        ></div>
        {DAYS.map((day, i) => {
          return (
            <div
              onClick={() => handleClick(i)}
              data-day={day.att}
              className={cx(css.day, "day")}
            >
              <p>{day.text}</p>
            </div>
          );
        })}
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={dataGraph[activeDay]}>
          <Bar
            radius={[10, 10, 10, 10]}
            barSize={12}
            dataKey="uv"
            fill="#F2AAA1"
          />
          <XAxis
            padding={{ left: 10, right: 10 }}
            dataKey="name"
            interval="preserveStart"
            tickMargin={20}
            axisLine={{ transform: "translate(0, 10)", stroke: "#666769" }}
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
