import React from "react";
import styles from "./Profile.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import { defaultImage } from "@/src/components-common/ui-card-image/constant";

const cx = classNames.bind(styles);

interface ProfileProps {
  profile: { email: string; profileImageSource: string } | null;
}

export const Profile: React.FC<ProfileProps> = ({ profile }) => {
  return (
    <div className={cx("container")}>
      <div className={cx("image")}>
        <Image
          fill
          src={profile?.profileImageSource ?? defaultImage}
          alt="프로필 이미지"
          style={{ objectFit: "contain" }}
        />
      </div>
      <span className={cx("email")}>{profile?.email}</span>
    </div>
  );
};
