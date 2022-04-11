import classNames from "classnames/bind";
import styles from "./S05.module.scss";

import deskTop_main from "../assets/images/s05/main.png";
import mobile_main from "../assets/images/s05/main_mobile.png";

const cx = classNames.bind(styles);
function S05() {
  return (
    <div className={cx("container")}>
      <div className={cx("limiter")}>
        <h2>
          <span className={cx("mark")}>아이폰 OS</span>
          댕캐시 빠르고 편하게
          <br />
          카톡에서 하는 법!
          <span className={cx("desc")}>
            아이폰 채팅목록에서 길게 누르고 핀 고정!
          </span>
        </h2>
        <img className={cx("desktop")} src={deskTop_main} alt="" />
        <img className={cx("mobile")} src={mobile_main} alt="" />{" "}
      </div>
    </div>
  );
}

export default S05;
