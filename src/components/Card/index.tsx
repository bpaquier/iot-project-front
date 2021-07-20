import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

type directionType = "column" | "row" | "column-reverse" | "row-reverse";
interface IProps {
  className?: string;
  children?: React.ReactNode;
  title?: string;
  direction?: directionType;
}

function Card({ className, children, title, direction }): any {
  return (
    <div
      className={cx(className, css.card)}
      style={{ flexDirection: direction || "column" }}
    >
      <h3>{title} </h3>
      <div className={css.contentContainer}>{children}</div>
    </div>
  );
}

export default Card;
