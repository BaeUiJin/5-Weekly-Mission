import styles from "./SearchBar.module.scss";
import classNames from "classnames/bind";
import { searchImage } from "./constant";
import React, { useState } from "react";

const cx = classNames.bind(styles);

interface SearchBarProps {
  onKeywordSubmit: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onKeywordSubmit }) => {
  const [input, setInput] = useState("");

  const handleSearchLink = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onKeywordSubmit(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSearchLink} className={cx("container")}>
      <input
        className={cx("input")}
        type="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="링크를 검색해 보세요."
      />
      <img
        src={searchImage}
        alt="검색창인 것을 알려주는 돋보기 아이콘"
        className={cx("icon")}
      />
    </form>
  );
};
