import { keyframes, styled } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

const overlayShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.6;
  }
`;
const contentShow = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const StyledOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.gray[950]};
  opacity: 0.6;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const StyledModalClose = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing(3)};
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: ${({ theme }) => theme.spacing(4)};
  top: ${({ theme }) => theme.spacing(4)};
`;

export const StyledModalContent = styled(Dialog.Content)`
  background-color: white;
  border-radius: 8px;
  box-shadow:
    0.3px 0.5px 0.7px ${(props) => props.theme.colors.gray[950]}0f,
    0.8px 1.6px 2px -0.8px ${(props) => props.theme.colors.gray[950]}0f,
    2.1px 4.1px 5.2px -1.7px ${(props) => props.theme.colors.gray[950]}0f,
    5px 10px 12.6px -2.5px ${(props) => props.theme.colors.gray[950]}0f;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 450px;
  max-height: 70vh;
  padding: 24px;
  overflow: auto;

  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @media (max-width: 600px) {
    min-width: unset;
    width: 100%;
    max-width: 80vw;
  }
`;

export const ModalTitle = styled.h2`
  margin: 0;
`;

export const ModalBody = styled.div`
  margin-top: 24px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  margin-top: 24px;
`;
