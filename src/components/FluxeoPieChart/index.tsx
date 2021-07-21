import React, { useState } from "react";
import { PieChart, Pie, Tooltip, Cell, LabelList, Label } from "recharts";

import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

const data01 = [
  { name: "Etage 1", value: 68, floor: 1 },
  { name: "Etage 2", value: 136, floor: 2 },
];

function renderLabel({ name }) {
  return name;
}

interface FloorData {
  name: string;
  value: number;
  floor: number;
}

interface IProps {
  activeFloor: number;
  data?: Array<FloorData>;
}

export default function FluxeoPieChart(props: IProps) {
  const { activeFloor } = props;

  return (
    <div className={css.container}>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          cx={200}
          cy={200}
          outerRadius={80}
          data={data01}
          fill="#ED7270"
          label={renderLabel}
        >
          <LabelList dataKey="value" position="top" />
          {data01.map((entry, i) => {
            return (
              <Cell
                key={`cell-${i}`}
                fill={activeFloor === entry.floor ? "#ED7270" : "#DFE1E6"}
              />
            );
          })}
        </Pie>

        <Tooltip />
      </PieChart>
    </div>
  );
}
