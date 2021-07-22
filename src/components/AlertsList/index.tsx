import classnames from "classnames/bind";
import css from "./styles.module.scss";
import { useState, useEffect } from "react";

import AlertItem from "~/components/AlertItem";

import { IAlert } from "~/types";
import { AnimatePresence, motion } from "framer-motion";
const cx = classnames.bind(css);

interface IProps {
  alerts: Array<IAlert>;
  removeAlert?: (alertId: number) => void;
}

function NoAlert() {
  return <h3 className={css.noAlert}>Vous n'avez pas d'alertes</h3>;
}

const MotionNoAlert = motion(NoAlert);

const MotionAlertItem = motion(AlertItem);

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
      <AnimatePresence>
        {noAlertToDisplay ? (
          <MotionNoAlert
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          />
        ) : (
          alerts.map((alert) => {
            return (
              <MotionAlertItem
                key={alert.id}
                alert={alert}
                removeAlert={removeAlert}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.2 } }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
              />
            );
          })
        )}
      </AnimatePresence>
    </div>
  );
}

export default AlertsList;
