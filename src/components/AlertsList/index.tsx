import classnames from "classnames/bind";
import css from "./styles.module.scss";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

import { IAlert } from "~/types";
const cx = classnames.bind(css);

interface IProps {
  alerts: Array<IAlert>;
  removeAlert?: (alertId: number) => void;
}

function AlertsList({ alerts, removeAlert }: IProps) {
  const paddingTop = 10;

  return (
    <div className={css.container}>
      <AnimatePresence>
        {paddingTop && <motion.div />}
        {alerts.map(({ id, isVisible, message, order, type }, i) => {
          return (
            isVisible && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={i}
                className={cx(css.alert, css[type])}
                onClick={() => removeAlert(id)}
                style={{
                  transform: `translateY(${
                    (order - 1) * (100 + paddingTop)
                  }px)`,
                }}
              >
                {message}
              </motion.div>
            )
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default AlertsList;
