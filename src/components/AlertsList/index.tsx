import classnames from "classnames/bind";
import css from "./styles.module.scss";
import { useState, useEffect } from "react";

import AlertItem from "~/components/AlertItem";

import { IAlert } from "~/types";
const cx = classnames.bind(css);

interface IProps {
  alerts: Array<IAlert>;
  removeAlert?: (alertId: number) => void;
}

function NoAlert() {
  return <h3 className={css.noAlert}>Vous n'avez pas d'alertes</h3>;
}

function AlertsList({ alerts, removeAlert }: IProps) {
  const [noAlertToDisplay, setNoAlertToDisplay] = useState(false);

  useEffect(() => {
    let empty = true;
    alerts.forEach((alert) => {
      if (alert.isVisible) empty = false;
    });
    setNoAlertToDisplay(empty);
  }, [alerts]);

  return (
    <div className={css.container}>
      {noAlertToDisplay ? (
        <NoAlert />
      ) : (
        alerts.map((alert) => {
          return (
            <AlertItem key={alert.id} alert={alert} removeAlert={removeAlert} />
          );
        })
      )}
    </div>
  );
}

export default AlertsList;
