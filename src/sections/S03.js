import classNames from "classnames/bind";
import styles from "./S03.module.scss";

import deskTop_main from "../assets/images/s03/main.png";
import mobile_main from "../assets/images/s03/main_mobile.png";

const cx = classNames.bind(styles);
function S03() {
  return (
    <div className={cx("container")}>
      <div className={cx("limiter")}>
        <h2>
          장소 추천
          <span>
            산책하면서 내가 있는곳 강아지와 갈수 있는 모든 곳!
            <br /> 카카오톡에서 전부 알려드립니다!
          </span>
        </h2>
        <img className={cx("desktop")} src={deskTop_main} alt="" />
        <img className={cx("mobile")} src={mobile_main} alt="" />
      </div>
    </div>
  );
}

export default S03;
