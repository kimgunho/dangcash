import classNames from "classnames/bind";
import styles from "./S06.module.scss";

const cx = classNames.bind(styles);
function S06() {
  return (
    <div className={cx("container")}>
      <div className={cx("limiter")}>
        <h2>댕캐시! 지금 시작하세요!</h2>
        <a href="" target={"_blank"}>
          시작하기
        </a>
      </div>
    </div>
  );
}

export default S06;
