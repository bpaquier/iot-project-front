import React, { useState, useEffect } from "react";
import "moment/locale/fr";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import axios from "axios";

import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import LayoutContainer from "~/components/LayoutContainer";
import Card from "~/components/Card";
import List from "~/components/CardList";
import DailyOccupancyChart from "~/components/DailyOccupancyChart";
import GraphOccupation from "~/components/GraphOccupation";
import AlertsList from "~/components/AlertsList";

import { alertsData } from "./data";
import { useUpdatedPresence } from "~/hooks/useUpdatesPresence";

let defaultStartDate = new Date();
defaultStartDate.setDate(defaultStartDate.getDate() - 2);
//@ts-ignore
defaultStartDate = defaultStartDate.toJSON();
const defaultEndDate = new Date().toJSON();
let defaultData = [];
const setDefaultData = () => {
  axios({
    baseURL: "https://fluxeo-back.herokuapp.com",
    url: `/presence-7-days/${defaultStartDate}/${defaultEndDate}`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
  .then((rep) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    let data = rep.data.data.map(obj => {
      const rObj = {
        date: null,
        occupation: obj.averagePresence,
      };
      //@ts-ignore
      rObj.date = new Date(obj.date).toLocaleDateString("fr-FR", options);
      return rObj;
    });
    defaultData = data;
  })
  .catch((rep) => {
    console.log(rep);
  });
};
setDefaultData();

export default function Stats() {
  const [startDate, setStartDate] = useState(moment("20-07-2021", "DD-MM-YYYY"));
  const [endDate, setEndDate] = useState(moment());
  const [data, setData] = useState(defaultData);
  const [focusedInput, setFocusedInput] = useState(null);
  const [alerts, setAlerts] = useState(alertsData);
  const list = useUpdatedPresence();
  const [floorHovered, setFloorHovered] = useState(null);
  const [filteredList, setFilteredList] = useState([]);

  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
    if (startDate && endDate) {
      axios({
        baseURL: "https://fluxeo-back.herokuapp.com",
        url: `/presence-7-days/${startDate.toDate().toJSON()}/${endDate.toDate().toJSON()}`,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((rep) => {
        const options = { day: "numeric", month: "short", year: "numeric" };
        let data = rep.data.data.map(obj => {
          const rObj = {
            date: null,
            occupation: obj.averagePresence,
          };
          //@ts-ignore
          rObj.date = new Date(obj.date).toLocaleDateString("fr-FR", options);
          return rObj;
        });
        setData(data);
      })
      .catch((rep) => {
        console.log(rep);
      });
    }
  };

  const removeAlert = (id: number) => {
    const newArr = alerts.map((alert, i) => {
      if (alert.id < id) {
        return alert;
      } else if (alert.id == id) {
        return {
          ...alert,
          isVisible: false,
        };
      } else if (alert.id > id) {
        return {
          ...alert,
          order: alert.order - 1,
        };
      }
    });
    setAlerts(newArr);
  };

  useEffect(() => {
    if (!list.data) return;
    const serializedList = list.data.filter((item) => item.is_present);
    setFilteredList(serializedList);
  }, [list.data]);

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
            onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
            startDatePlaceholderText="Début"
            endDatePlaceholderText="Fin"
            numberOfMonths={1}
            small
            openDirection={"up"}
            showDefaultInputIcon
            inputIconPosition="after"
            isOutsideRange={(day) => day.isAfter(moment()) || day.isBefore(moment("20-07-2021", "DD-MM-YYYY"))}
          />
        </div>
      </Card>
      <div className={css.alertsContainer}>
        <h2>Centre d'alertes</h2>
        <AlertsList alerts={alerts} removeAlert={removeAlert} />
      </div>

      <div className={css.listContainer}>
        <List
          className={css.list}
          title="Liste des personnes"
          list={filteredList}
        />
      </div>
      <Card title="La semaine dernière">
        <GraphOccupation />
      </Card>
    </LayoutContainer>
  );
}
