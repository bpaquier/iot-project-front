import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

type directionType = "column" | "row" | "column-reverse" | "row-reverse";
interface IProps {
  className?: string;
  children?: React.ReactNode;
  title?: string;
  direction?: directionType;
  center?: boolean;
}

function Card({
  className,
  children,
  title,
  direction,
  center = true,
}: IProps) {
  return (
    <div
      className={cx(className, css.card, { [css.center]: center })}
      style={{ flexDirection: direction || "column" }}
    >
      <h3>{title} </h3>
      <div className={cx(css.contentContainer, { [css.center]: center })}>
        {children}
      </div>
    </div>
  );
}

export default Card;
