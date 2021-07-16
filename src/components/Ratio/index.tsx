import { ReactNode } from "react";
import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

interface RatioProps {
  className?: string;
  containerClassName?: string;
  ratio: number;
  onClick?: () => any;
  children?: ReactNode;
}

function Ratio({
  className,
  containerClassName,
  ratio,
  onClick,
  children,
}: RatioProps) {
  const style = {
    paddingBottom: 100 * ratio + "%",
  };
  return (
    <div style={style} className={cx(className, css.ratio)} onClick={onClick}>
      <div className={cx(css.container, containerClassName)}>{children}</div>
    </div>
  );
}

export default Ratio;
