import classnames from "classnames/bind";
import css from "./styles.module.scss";
import { useState, useEffect } from "react";
const cx = classnames.bind(css);

interface IProps {
  className?: string;
  data: {
    name: string;
    uv: number;
  };
}

function BusyTimesLabel({ className, data }: any) {
  const [label, setLabel] = useState(null);

  const getLabelText = (amount) => {
    if (amount < 30) {
      return "Très peu fréquenté";
    } else if (amount < 60) {
      return "Peu fréquenté";
    } else if (amount < 50) {
      return "Fréquenté";
    } else if (amount < 75) {
      return "Très fréquenté";
    } else if (amount >= 75) {
      return "Fortement fréquenté";
    }
  };

  useEffect(() => {
    if (data) {
      setLabel({ hour: data.name, text: getLabelText(data.uv) });
    }
  }, [data]);

  return (
    <div className={css.labelContainer}>
      <p>
        {label && (
          <>
            <span className={css.labelTime}>{label.hour}</span>
            <span> : </span>
            <span className={css.labelText}>{label.text}</span>
          </>
        )}
      </p>
    </div>
  );
}

export default BusyTimesLabel;
