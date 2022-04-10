import classNames from "classnames/bind";
import styles from "./S04.module.scss";

const cx = classNames.bind(styles);
function S04() {
  return <div className={cx("container")}></div>;
}

export default S04;
