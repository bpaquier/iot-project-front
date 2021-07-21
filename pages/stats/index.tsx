import React, { useState, useEffect } from "react";
import 'moment/locale/fr'
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";

import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import LayoutContainer from "~/components/LayoutContainer";
import Card from "~/components/Card";
import DailyOccupancyChart from "~/components/DailyOccupancyChart";

const defaultData = Array.from({ length: 5 }, () => {
  return {
    date: "date",
    occupancy: Math.floor(Math.random() * 100),
  };
});

export default function Stats() {
  function setRandomData(newStartDate = startDate, newEndDate = endDate) {
    if (newStartDate && newEndDate) {
      const data = [];
      const daysDiff = newEndDate.diff(newStartDate, 'days');
      const options = { day: 'numeric', month: 'short', year: 'numeric'};

      for (let i = 0; i <= daysDiff; i++) {
        let date = new Date(newEndDate.toDate());
        date.setDate(date.getDate() - i);
        data.unshift({
          date: date.toLocaleDateString('fr-FR', options),
          occupancy: Math.floor(Math.random() * 100),
        });
      };
      
      return data;
    };
  };

  const [startDate, setStartDate] = useState(moment().add(-6, 'days'));
  const [endDate, setEndDate] = useState(moment());
  const [data, setData] = useState(setRandomData);
  const [focusedInput, setFocusedInput] = useState(null);
  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
    setData(setRandomData(startDate, endDate));
  }

  return (
    <LayoutContainer className={css.container} title="Analyse">
      <Card className={css.graphCard} title="Taux d’occupation par jour (en %)">
        <div className={css.graphCardContentContainer}>
          <DailyOccupancyChart data={data} />
          <p className={css.inputLabel}>Sélectionnez des dates :</p>
          <DateRangePicker
            startDate={startDate}
            startDateId="start-date"
            endDate={endDate}
            endDateId="end-date"
            onDatesChange={handleDatesChange}
            focusedInput={focusedInput}
            onFocusChange={focusedInput => setFocusedInput(focusedInput)}
            startDatePlaceholderText="Début"
            endDatePlaceholderText="Fin"
            numberOfMonths={1}
            small
            showDefaultInputIcon
            inputIconPosition="after"
            isOutsideRange={day => day.isAfter(moment())}
          />
        </div>
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
