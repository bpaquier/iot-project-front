import { useState, useEffect } from "react";

import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import { useUpdatedPresence } from "~/hooks/useUpdatesPresence";
import Ratio from "~/components/Ratio";

import LayoutContainer from "~/components/LayoutContainer";
import Card from "~/components/Card";

import Building from "~/components/Building";
import FluxeoPieChart from "~/components/FluxeoPieChart";
import OccupationCard from "~/components/OccupationCard";
import List from "~/components/CardList";
import AlertsList from "~/components/AlertsList";

import { alertsData } from "./data";

export default function Home() {
  const list = useUpdatedPresence();
  const [floorHovered, setFloorHovered] = useState(null);
  const [filteredList, setFilteredList] = useState([]);
  const [dataForPie, setDataForPie] = useState([]);
  const [alerts, setAlerts] = useState(alertsData);

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
        console.log("-1");
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

  useEffect(() => {
    if (filteredList.length === 0 || !filteredList) return;
    const getFloors = list.data
      .map((item) => item?.position?.floor)
      .reduce(
        (unique, item) => (unique?.includes(item) ? unique : [...unique, item]),
        []
      )
      .filter((item) => item);

    const floorsData = getFloors.map((floor) => ({
      name: `Etage ${floor}`,
      floor: parseInt(floor),
      value: filteredList.filter((item) => item?.position?.floor == floor)
        .length,
    }));
    setDataForPie(floorsData);
  }, [filteredList]);

  return (
    <LayoutContainer title="Accueil" className={css.container}>
      <Ratio ratio={0.9} className={cx(css.homeItem, css.building)}>
        <Card title="Image du batiment cliquable" className={css.cardBuilding}>
          <Building
            floorHovered={floorHovered}
            setFloorHovered={setFloorHovered}
            className={css.buildingImg}
          ></Building>
        </Card>
      </Ratio>
      <Card
        className={cx(css.homeItem, css.occupation)}
        title="Occupation du bâtiment"
      >
        <OccupationCard quantity={filteredList?.length} />
      </Card>

      <Card
        className={cx(css.homeItem, css.persons)}
        title="Nombre de personne dans l'étage"
      >
        <FluxeoPieChart activeFloor={floorHovered} data={dataForPie} />
      </Card>

      <div className={css.alertsContainer}>
        <h2>Centre d'alertes</h2>
        <AlertsList alerts={alerts} removeAlert={removeAlert} />
      </div>

      <div className={css.listContainer}>
        <List
          title="Liste des personnes"
          className={css.list}
          list={filteredList}
        />
      </div>
    </LayoutContainer>
  );
}
