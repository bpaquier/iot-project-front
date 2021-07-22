import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);
import { AnimatePresence } from "framer-motion";

import { motion } from "framer-motion";
import { IAlert } from "~/types/";

import CloseIcon from "~/components/Svgs/CloseIcon";
import ErrorIcon from "~/components/Svgs/ErrorIcon";
import SuccessIcon from "~/components/Svgs/SuccessIcon";
import WarningIcon from "~/components/Svgs/WarningIcon";
import InfoIcon from "~/components/Svgs/InfoIcon";

const Icons = {
  success: <SuccessIcon />,
  info: <InfoIcon />,
  warning: <WarningIcon />,
  error: <ErrorIcon />,
};

interface IProps {
  alert: IAlert;
  removeAlert?: (alertId: number) => void;
}

function AlertItem(props: IProps) {
  const { id, type, order, message, isVisible, height } = props.alert;
  const { removeAlert } = props;
  const paddingTop = 10;
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={cx(css.item, css[type])}
          style={{
            transform: `translateY(${(order - 1) * (height + paddingTop)}px)`,
            height: `${height}px`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          <div className={css.left}>
            <div className={css.icon}>{Icons[type]}</div>
            <div className={css.text}> {<p>{message}</p>}</div>
          </div>
          <div onClick={() => removeAlert(id)} className={css.right}>
            <CloseIcon />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AlertItem;
