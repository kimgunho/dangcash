import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer>
      <p className={cx("companyTitle")}>DANG CASH</p>
      <p className={cx("copyright")}>
        서울시 서울구 서울로 123 댕캐시 Copyright by dangcash
      </p>
    </footer>
  );
}

export default Footer;
