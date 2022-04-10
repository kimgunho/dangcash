import classNames from "classnames/bind";
import styles from "./S01.module.scss";

const cx = classNames.bind(styles);
function S01() {
  return <div className={cx("container")}></div>;
}

export default S01;
