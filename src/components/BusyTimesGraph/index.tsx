import css from "./styles.module.scss";
import { useRef, useEffect, useState } from "react";
import { dataGraph } from "./data";

import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from "recharts";
import BusyTimesLabel from "../BusyTimesLabel";
import BusyTimesDays from "../BusyTimesDays";

function BusyTimesGraph() {
  // Refs
  const daysPosition = useRef(null);

  // States
  const [activeDay, setActiveDay] = useState(0);
  const [selectedData, setSelectedData] = useState(1);

  // Functions
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

  const handleClick = (i: number): void => {
    setActiveDay(i);
  };

  const getInitialData = () => {
    const now = Date.now();
    const day = new Date(now).getDay();
    setActiveDay(day - 1);
    // Todo grab inital hours data
  };

  // UseEffect
  useEffect(() => {
    getDaysPosition();
    getInitialData();
  }, []);

  useEffect(() => {}, [selectedData, activeDay]);

  return (
    <div className={css.containerBusyTime}>
      <BusyTimesDays
        handleClick={handleClick}
        daysPosition={daysPosition}
        activeDay={activeDay}
      />
      <BusyTimesLabel data={dataGraph[activeDay][selectedData]} />
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={dataGraph[activeDay]}>
          <Bar
            radius={[10, 10, 10, 10]}
            barSize={12}
            dataKey="uv"
            onClick={(data) => {
              setSelectedData(data["data-index"]);
            }}
          >
            {dataGraph[activeDay].map((entry, i) => (
              <Cell
                key={`cell-${i}`}
                data-active={i === selectedData}
                data-index={i}
                fill={i === selectedData ? "#ED7270" : "#F2AAA1"}
              />
            ))}
          </Bar>
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
