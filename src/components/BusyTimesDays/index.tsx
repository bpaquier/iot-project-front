import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

import { DAYS } from "./data";

interface IProps {
  handleClick: (i: number) => void;
  daysPosition: {
    current: [{ left: number; width: number }];
  };
  activeDay: number;
}

function BusyTimesDays({ handleClick, daysPosition, activeDay }: IProps) {
  const getOffsetLeft: any = () => {
    if (!daysPosition.current) return 0;
    return daysPosition.current[activeDay].left;
  };
  const getOffsetWidth: any = () => {
    if (!daysPosition.current) return 0;
    return Math.round(daysPosition.current[activeDay].width);
  };
  return (
    <div className={css.days}>
      <div
        className={css.daysSelector}
        style={{
          transform: `translateX(${getOffsetLeft()}px)`,
          width: `${getOffsetWidth()}px`,
        }}
      ></div>
      {DAYS.map((day, i) => {
        return (
          <div
            key={i}
            onClick={() => handleClick(i)}
            className={cx(css.day, "day")}
          >
            <div data-day={day.att} className={css.dayTextContainer}>
              <p>{day.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BusyTimesDays;
