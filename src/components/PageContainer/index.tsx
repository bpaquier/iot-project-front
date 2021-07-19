import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

interface IProps {
  className?: string;
  children?: React.ReactNode;
}

function PageContainer({ children, className }: IProps) {
  return <div className={css.pageContainer}>{children}</div>;
}

export default PageContainer;
