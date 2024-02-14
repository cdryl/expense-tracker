import { FC, PropsWithChildren } from "react";
import Modal from "react-modal";
import { ModalBaseProps } from "./types";
import clsx from "clsx";

const ModalBase: FC<PropsWithChildren<ModalBaseProps>> = ({
  isOpen,
  children,
  onClose,
  className,
  role = "dialog",
  ...props
}) => (
  <Modal
    isOpen={isOpen}
    role={role}
    onRequestClose={onClose}
    className={clsx(
      className,
      "relative outline-0 overflow-auto max-h-full bg-purple-light rounded-2xl shadow-lg flex flex-col shrink-0"
    )}
    overlayClassName={{
      base: "flex justify-center items-center fixed inset-0 min-h-svh backdrop-blur-sm z-[999] flex-col",
      afterOpen: "",
      beforeClose: "blur-none",
    }}
    shouldFocusAfterRender
    shouldCloseOnOverlayClick
    shouldCloseOnEsc
    shouldReturnFocusAfterClose
    {...props}
  >
    {children}
  </Modal>
);

export default ModalBase;
