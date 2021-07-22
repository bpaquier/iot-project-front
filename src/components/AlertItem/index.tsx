import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);
import { AnimatePresence } from "framer-motion";

import { motion } from "framer-motion";
import { IAlert } from "~/types/";

interface IProps {
  alert: IAlert;
  removeAlert?: (alertId: number) => void;
}

function AlertItem(props: IProps) {
  const { id, type, order, message, isVisible, height } = props.alert;
  const { removeAlert } = props;
  const paddingTop = 10;
  return (
    isVisible && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={cx(css.item, css[type])}
        onClick={() => removeAlert(id)}
        style={{
          transform: `translateY(${(order - 1) * (height + paddingTop)}px)`,
          height: `${height}px`,
        }}
      >
        {message}
      </motion.div>
    )
  );
}

export default AlertItem;
