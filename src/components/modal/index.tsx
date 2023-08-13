import * as Dialog from '@radix-ui/react-dialog';
import { IconX } from '@tabler/icons-react';
import { ModalBody, StyledModalContent, ModalFooter, StyledOverlay, StyledModalClose, ModalTitle } from './styles';

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode
}

export function Modal({ open, setOpen, children }: ModalProps) {

  function handleClose() {
    setOpen(false)
  }

  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <StyledOverlay />
        <StyledModalContent >
          <Dialog.Close asChild>
            <StyledModalClose aria-label="fechar" onClick={handleClose}>
              <IconX />
            </StyledModalClose>
          </Dialog.Close>
          {children}
        </StyledModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;