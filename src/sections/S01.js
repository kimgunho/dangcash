import classNames from "classnames/bind";
import styles from "./S01.module.scss";

const cx = classNames.bind(styles);
function S01() {
  return (
    <div className={cx("container")}>
      <div className={cx("limiter")}>
        <h2>
          <span>반려견과 산책하면 포인트가 쌓인다</span>
          DANG CASH
        </h2>
        <div className={cx("image")} />
        <a href="" target={"_blank"}>
          카톡 산책하기
        </a>
      </div>
    </div>
  );
}

export default S01;
