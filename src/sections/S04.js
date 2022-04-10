import classNames from "classnames/bind";
import styles from "./S04.module.scss";

import deskTop_main from "../assets/images/s04/main.png";
import mobile_main from "../assets/images/s04/main_mobile.png";

const cx = classNames.bind(styles);
function S04() {
  return (
    <div className={cx("container")}>
      <div className={cx("limiter")}>
        <h2>
          <span className={cx("mark")}>안드로이드 OS</span>
          댕캐시 빠르고 편하게 카톡에서 하는 법!
          <span className={cx("desc")}>
            채팅목록에서 꾹눌러서 홈화면으로 추가
          </span>
        </h2>
        <img className={cx("desktop")} src={deskTop_main} alt="" />
        <img className={cx("mobile")} src={mobile_main} alt="" />{" "}
      </div>
    </div>
  );
}

export default S04;
