import { styled } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const StyledOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.gray[950]};
  opacity: 0.4;
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
  border-radius: 6px;
  box-shadow:
    0.3px 0.5px 0.7px ${(props) => props.theme.colors.gray[950]}0f,
    0.8px 1.6px 2px -0.8px ${(props) => props.theme.colors.gray[950]}0f,
    2.1px 4.1px 5.2px -1.7px ${(props) => props.theme.colors.gray[950]}0f,
    5px 10px 12.6px -2.5px ${(props) => props.theme.colors.gray[950]}0f;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 24px;
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
