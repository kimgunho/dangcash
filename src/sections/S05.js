import classNames from "classnames/bind";
import styles from "./S05.module.scss";

const cx = classNames.bind(styles);
function S05() {
  return <div className={cx("container")}></div>;
}

export default S05;
