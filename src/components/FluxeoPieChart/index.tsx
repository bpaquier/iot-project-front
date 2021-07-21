import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  LabelList,
  Label,
  ResponsiveContainer,
} from "recharts";

import classnames from "classnames/bind";
import css from "./styles.module.scss";
import Ratio from "~/components/Ratio";
const cx = classnames.bind(css);

const data01 = [
  { name: "Etage 1", value: 68, floor: 1 },
  { name: "Etage 6", value: 136, floor: 6 },
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
  const { activeFloor, data } = props;

  return (
    <Ratio ratio={1} className={css.PieWrapper}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            isAnimationActive={false}
            dataKey="value"
            outerRadius={80}
            data={data}
            fill="#ED7270"
            label={renderLabel}
          >
            <LabelList dataKey="value" position="top" />
            {data.map((entry, i) => {
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
      </ResponsiveContainer>
    </Ratio>
  );
}
