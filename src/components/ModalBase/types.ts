import { type Props as ReactModalProps } from 'react-modal';

export interface ModalBaseProps extends ReactModalProps {
  isOpen: boolean;
  onClose: () => void;
}
