import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer>
      <p className={cx("companyTitle")}>DANG CASH</p>
      <p className={cx("copyright")}>
        서울특별시 강남구 영동대로 602, 6층 G208호
      </p>
    </footer>
  );
}

export default Footer;
