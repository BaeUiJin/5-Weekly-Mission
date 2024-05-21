import styles from "./NavigationBar.module.scss";
import classNames from "classnames/bind";
import { route } from "@/src/components-common/util";
import { Cta } from "@/src/components-common/ui-cta";
import { Profile } from "@/src/components-user/ui-profile";
import { logoImage, navText } from "./constant";

const cx = classNames.bind(styles);

export interface NavigationBarProps {
  profile: { email: string; profileImageSource: string } | null;
  isSticky: boolean;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
  profile,
  isSticky,
}) => {
  return (
    <nav className={cx("container", { sticky: isSticky })}>
      <div className={cx("items")}>
        <a href={route.랜딩}>
          <img
            className={cx("logo")}
            src={logoImage}
            alt="Linkbrary 서비스 로고"
          />
        </a>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <a href={route.로그인}>
            <Cta>
              <span className={cx("signin")}>{navText.login}</span>
            </Cta>
          </a>
        )}
      </div>
    </nav>
  );
};
