import classNames from "classnames/bind";
import styles from "./S02.module.scss";

const cx = classNames.bind(styles);
function S02() {
  return <div className={cx("container")}></div>;
}

export default S02;
