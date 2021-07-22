import classnames from "classnames/bind";
import css from "./styles.module.scss";
import { useEffect } from "react";

import AlertItem from "~/components/AlertItem";
import { AnimatePresence, motion } from "framer-motion";

import { IAlert } from "~/types";
const cx = classnames.bind(css);

interface IProps {
  alerts: Array<IAlert>;
  removeAlert?: (alertId: number) => void;
}

const MotionAlertItem = motion(AlertItem);

function AlertsList({ alerts, removeAlert }: IProps) {
  return (
    <AnimatePresence>
      <div className={css.container}>
        {alerts.map((alert) => {
          return (
            <MotionAlertItem
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={alert.id}
              alert={alert}
              removeAlert={removeAlert}
            />
          );
        })}
      </div>
    </AnimatePresence>
  );
}

export default AlertsList;
