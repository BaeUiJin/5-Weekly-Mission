import styles from "./Layout.module.scss";
import classNames from "classnames/bind";
import { useGetUser } from "@/components-user/data-access-user";
import { Footer } from "@/common/ui-footer";
import { NavigationBar } from "@/common/ui-navigation-bar";
import React, { useMemo } from "react";

const cx = classNames.bind(styles);

type LayoutProps = React.PropsWithChildren<{
  isSticky: boolean;
}>;

export type profileType = { email: string; profileImageSource: string } | null;

export const Layout: React.FC<LayoutProps> = ({
  children,
  isSticky = true,
}) => {
  const { user } = useGetUser();
  const profile: profileType = useMemo(() => {
    if (!user) return null;
    const { email, profileImageSource, ...rest } = user;
    return { email, profileImageSource };
  }, [user]);

  return (
    <div>
      <NavigationBar profile={profile} isSticky={isSticky} />
      <main className={cx("main")}>{children}</main>
      <Footer />
    </div>
  );
};
