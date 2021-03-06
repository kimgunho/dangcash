import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import link from "../assets/link";

import kakao_icon from "../assets/images/kakaoIcon.png";

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("header")}>
      <div className={cx("limiter")}>
        <h1 className={cx("logo")}>DANG CASH</h1>
        <a href={link} target={"_blank"} rel="noreferrer">
          <span>산책하기</span>
          <img src={kakao_icon} alt="카카오" />
        </a>
      </div>
    </header>
  );
}

export default Header;
