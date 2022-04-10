import classNames from "classnames/bind";
import styles from "./S01.module.scss";

import deskTop_main from "../assets/images/s01/main.png";
import mobile_main from "../assets/images/s01/main_mobile.png";

const cx = classNames.bind(styles);
function S01() {
  return (
    <div className={cx("container")}>
      <div className={cx("limiter")}>
        <h2>
          <span>반려견과 산책하면 포인트가 쌓인다</span>
          DANG CASH
        </h2>
        <img className={cx("desktop")} src={deskTop_main} alt="" />
        <img className={cx("mobile")} src={mobile_main} alt="" />
        <a href="" target={"_blank"}>
          카톡 산책하기
        </a>
      </div>
    </div>
  );
}

export default S01;
