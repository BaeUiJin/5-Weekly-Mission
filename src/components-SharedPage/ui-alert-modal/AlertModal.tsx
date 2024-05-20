import styles from "./AlertModal.module.scss";
import classNames from "classnames/bind";
import { Modal } from "@/common/ui-modal";
import { ModalContentBox } from "@/common/ui-modal-content-box";
import { ModalContentButton } from "@/common/ui-modal-content-button";
import { ModalContentTitle } from "@/common/ui-modal-content-title";
import { ModalContentDescription } from "@/common/ui-modal-content-description";
import type { AlertModalProps } from "@/common/types/modal-prop-types";

const cx = classNames.bind(styles);

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  title,
  buttonText,
  onCloseClick,
  selectedLinkUrl,
  onKeyDown,
}) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <div className={cx("modal-header")}>
            <ModalContentTitle>{title}</ModalContentTitle>
            <ModalContentDescription>{selectedLinkUrl}</ModalContentDescription>
          </div>
        }
        content={
          <div className={cx("modal-content")}>
            <ModalContentButton themeColor="red">
              {buttonText}
            </ModalContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
