import classNames from "classnames/bind";
import styles from "./S02.module.scss";

import deskTop_main from "../assets/images/s02/main.png";
import mobile_main from "../assets/images/s02/main_mobile.png";

const cx = classNames.bind(styles);
function S02() {
  return (
    <div className={cx("container")}>
      <div className={cx("background")}>
        <div className={cx("limiter")}>
          <h2>
            산책 시작
            <span>
              댕댕이와 산책하면 포인트가 적립!
              <br /> 산책하고 간식 용품 산다!
            </span>
          </h2>
          <img className={cx("desktop")} src={deskTop_main} alt="" />
          <img className={cx("mobile")} src={mobile_main} alt="" />
        </div>
      </div>
    </div>
  );
}

export default S02;
