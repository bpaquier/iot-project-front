import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import { useState } from "react";

import LayoutContainer from "~/components/LayoutContainer";
import Card from "~/components/Card";
import DailyOccupancyChart from "~/components/DailyOccupancyChart";

const data = Array.from({ length: 5 }, () => {
  return {
    date: "date",
    occupancy: Math.floor(Math.random() * 100),
  };
});

export default function Stats() {
  const [floor, setFloor] = useState(1);

  return (
    <LayoutContainer className={css.container} title="Analyse">
      <Card className={css.graphCard} title="Taux d’occupation par jour">
        <DailyOccupancyChart data={data} />
      </Card>
      <Card className title="Centre d’alerte">
        {/* Content */}
      </Card>
      <Card className title="La semaine dernière">
        {/* Content */}
      </Card>
    </LayoutContainer>
  );
}
