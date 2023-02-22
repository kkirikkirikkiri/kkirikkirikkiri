import CommonModal from "components/common/atoms/CommonModal";
import IMAGE_LIST from "constants/bannerList";
import media from "constants/media";
import useMediaQuery from "hooks/useMediaQuery";
import { FC, useMemo, useState } from "react";
import styled from "styled-components";
interface IBannerModalProps {
  currentIndex: number;
}
const BannerModal: FC<IBannerModalProps> = ({ currentIndex }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMediaQuery(media.mobileMaxWidth);
  const label = useMemo(
    () => `${currentIndex + 1} / ${IMAGE_LIST.length}${isMobile ? " +" : ""}`,
    [isMobile, IMAGE_LIST]
  );
  return (
    <>
      <Button
        onClick={() => isMobile && setIsModalOpen(true)}
        className="ticket"
      >
        {label}
      </Button>
      <CommonModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="이벤트"
      >
        <Container>
          {IMAGE_LIST.map((image, index) => (
            <BannerImage
              src={`/img/banner/${image}`}
              alt={`banner${index + 1}`}
            />
          ))}
        </Container>
      </CommonModal>
    </>
  );
};

const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 100%;
`;
const Button = styled.label`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  position: absolute;
  right: 12px;
  bottom: 15px;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 15px;
  ${media.MOBILE} {
    padding: 6px 8px 6px 15px;
  }
`;

const BannerImage = styled.img`
  width: 100%;
`;

export default BannerModal;
