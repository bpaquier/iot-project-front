import classnames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classnames.bind(css);

interface FooterProps {
  className?: string;
}

function Footer({ className }: FooterProps) {
  return <footer className={cx(className, css.content)}></footer>;
}

export default Footer;
