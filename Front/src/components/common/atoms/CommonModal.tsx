import Image from "next/image";
import { FC, ReactNode } from "react";
import Modal from "react-modal";
import styled from "styled-components";

interface ICommonModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode | ReactNode[];
}
const CommonModal: FC<ICommonModalProps> = ({
  onClose,
  isOpen,
  title,
  children,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      style={{
        content: { inset: 0, padding: 0 },
      }}
    >
      <ModalHeader>
        <LeftIconContainer onClick={onClose}>
          <Image src={"/img/icon/arrowBack.svg"} width={24} height={24} />
        </LeftIconContainer>
        {title}
      </ModalHeader>
      {children}
    </Modal>
  );
};

const ModalHeader = styled.header`
  display: flex;
  padding: 16px;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  color: #424242;
  height: 56px;
  align-items: center;
  justify-content: center;
`;

const LeftIconContainer = styled.a`
  position: absolute;
  left: 16px;
`;

export default CommonModal;
