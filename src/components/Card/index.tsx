import classnames from "classnames/bind";
import PageContainer from "../PageContainer";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

type directionType = "column" | "row" | "column-reverse" | "row-reverse";
interface IProps {
  className?: string;
  containerClassName?: string;
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
  containerClassName,
}: IProps) {
  return (
    <div
      className={cx(className, css.card, { center })}
      style={{ flexDirection: direction || "column" }}
    >
      <h3>{title} </h3>
      <div className={cx(css.contentContainer, { center }, containerClassName)}>
        {children}
      </div>
    </div>
  );
}

export default Card;
