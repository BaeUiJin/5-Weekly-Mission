import React from "react";
import styles from "./IconAndTextButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface IconAndTextButtonProps {
  iconSource: string;
  text: string;
  onClick: () => void;
}

export const IconAndTextButton: React.FC<IconAndTextButtonProps> = ({
  iconSource,
  text,
  onClick,
}) => {
  return (
    <button className={cx("container")} onClick={onClick}>
      <img className={cx("icon")} src={iconSource} alt={`${text} 아이콘`} />
      <span className={cx("text")}>{text}</span>
    </button>
  );
};
