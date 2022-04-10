import classNames from "classnames/bind";
import styles from "./S06.module.scss";

const cx = classNames.bind(styles);
function S06() {
  return <div className={cx("container")}></div>;
}

export default S06;
