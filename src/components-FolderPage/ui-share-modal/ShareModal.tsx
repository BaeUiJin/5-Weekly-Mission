import styles from "./ShareModal.module.scss";
import classNames from "classnames/bind";
import { Modal } from "@/common/ui-modal";
import { ModalContentBox } from "@/common/ui-modal-content-box";
import { ModalContentDescription } from "@/common/ui-modal-content-description";
import { ModalContentTitle } from "@/common/ui-modal-content-title";
import { ReactComponent as KaKaoIcon } from "./kakao.svg";
import { ReactComponent as FacebookIcon } from "./facebook.svg";
import { ReactComponent as LinkIcon } from "./link.svg"; // TODO: IMAGE 컴포넌트로 수정할 것
import React from "react";
import type { ShareModalProps } from "@/common/types/modal-prop-types";

const cx = classNames.bind(styles);

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onCloseClick,
  folderName,
  onKeyDown,
  onKakaoClick,
  onFacebookClick,
  onLinkCopyClick,
}) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <div className={cx("modal-header")}>
            <ModalContentTitle>폴더 공유</ModalContentTitle>
            <ModalContentDescription>{folderName}</ModalContentDescription>
          </div>
        }
        content={
          <div className={cx("modal-content")}>
            <button onClick={onKakaoClick} className={cx("button")}>
              <KaKaoIcon />
              <span>카카오톡</span>
            </button>
            <button onClick={onFacebookClick} className={cx("button")}>
              <FacebookIcon />
              <span>페이스북</span>
            </button>
            <button onClick={onLinkCopyClick} className={cx("button")}>
              <LinkIcon />
              <span>링크 복사</span>
            </button>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
