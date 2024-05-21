import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import { route } from "@/src/components-common/util";
import { footerText } from "./constant";
import React from "react";

const cx = classNames.bind(styles);

type FooterProps = React.PropsWithChildren<{}>;

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={cx("container")}>
      <div className={cx("items")}>
        <span className={cx("copyright")}>{footerText.codeit}</span>
        <div className={cx("links")}>
          <a className={cx("link")} href={route.개인정보처리방침}>
            {footerText.privacyPolicy}
          </a>
          <a className={cx("link")} href={route.FAQ}>
            {footerText.faq}
          </a>
        </div>
        <div className={cx("sns")}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/facebook.svg"
              alt="facebook 홈페이지로 연결된 facebook 로고"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/twitter.svg"
              alt="twitter 홈페이지로 연결된 twitter 로고"
            />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/youtube.svg"
              alt="youtube 홈페이지로 연결된 youtube 로고"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/instagram.svg"
              alt="instagram 홈페이지로 연결된 instagram 로고"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
