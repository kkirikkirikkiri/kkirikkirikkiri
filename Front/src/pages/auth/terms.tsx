import Accordion from "components/common/atoms/Accordion";
import Button from "components/common/atoms/Button";
import CheckBox from "components/common/atoms/CheckBox";
import HorizontalBlank from "components/common/atoms/HorizontalBlank";
import HorizontalLine from "components/common/atoms/HorizontalLine";
import Section from "components/common/atoms/Section";
import AuthLayout from "layouts/AuthLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  ChangeEvent,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";
import ROUTES from "routes/routes";
import styled from "styled-components";
type SelectedTermType = "" | "USE" | "PERSONAL";
const Join = () => {
  const router = useRouter();
  const [termAll, setTermAll] = useState(false);
  const [term1, setTerm1] = useState(false);
  const [term2, setTerm2] = useState(false);
  const [openTerm, setOpenTerm] = useState<SelectedTermType>("");
  const handleAllCheck = useCallback(
    (checked: boolean) => {
      setTerm1(checked);
      setTerm2(checked);
      setTermAll(checked);
    },
    [term1, term2]
  );

  useEffect(() => {
    setTermAll(term1 && term2);
  }, [term1, term2]);

  const handleConfirm = useCallback(() => {
    if (termAll) {
      router.push(ROUTES.JOIN_STEP.url);
    }
  }, [termAll]);

  return (
    <Container>
      <CheckBox
        id="termAll"
        checked={termAll}
        onChange={({ target: { checked } }: ChangeEvent<HTMLInputElement>) => {
          handleAllCheck(checked);
        }}
      >
        이용약관 전체 동의하기
      </CheckBox>
      <HorizontalLine color={"#EAEAEA"} marginHorizontal={30} />
      <Section gap={16} direction="column">
        <Section justify={"space-between"}>
          <CheckBox
            id="term1"
            checked={term1}
            onChange={({
              target: { checked },
            }: ChangeEvent<HTMLInputElement>) => {
              setTerm1(checked);
            }}
          >
            서비스 이용약관 (필수)
          </CheckBox>
          <a
            onClick={() => setOpenTerm((prev) => (prev === "USE" ? "" : "USE"))}
          >
            <Image
              src={
                openTerm === "USE"
                  ? "/img/icon/arrowUP.svg"
                  : "/img/icon/arrowDown.svg"
              }
              width={20}
              height={20}
            />
          </a>
        </Section>
        <Accordion collapse={openTerm === "USE"}>
          <AccordionContent>
            서비스 이용약관 입니다. 서비스 이용약관 입니다. 서비스 이용약관
            입니다. 서비스 이용약관 입니다. 서비스 이용약관 입니다. 서비스
            이용약관 입니다. 서비스 이용약관 입니다. 서비스 이용약관 입니다.
            서비스 이용약관 입니다. 서비스 이용약관 입니다. 서비스 이용약관
            입니다. 서비스 이용약관 입니다.
          </AccordionContent>
        </Accordion>
        <Section justify={"space-between"} width={"100%"}>
          <CheckBox
            id="term2"
            checked={term2}
            onChange={({
              target: { checked },
            }: ChangeEvent<HTMLInputElement>) => {
              setTerm2(checked);
            }}
          >
            개인정보 수집 및 이용 동의 (필수)
          </CheckBox>
          <a
            onClick={() =>
              setOpenTerm((prev) => (prev === "PERSONAL" ? "" : "PERSONAL"))
            }
          >
            <Image
              src={
                openTerm === "PERSONAL"
                  ? "/img/icon/arrowUP.svg"
                  : "/img/icon/arrowDown.svg"
              }
              width={20}
              height={20}
            />
          </a>
        </Section>
        <Accordion collapse={openTerm === "PERSONAL"}>
          <AccordionContent>
            서비스 이용약관 입니다. 서비스 이용약관 입니다. 서비스 이용약관
            입니다. 서비스 이용약관 입니다. 서비스 이용약관 입니다. 서비스
            이용약관 입니다. 서비스 이용약관 입니다. 서비스 이용약관 입니다.
            서비스 이용약관 입니다. 서비스 이용약관 입니다. 서비스 이용약관
            입니다. 서비스 이용약관 입니다.
          </AccordionContent>
        </Accordion>
      </Section>
      <HorizontalBlank height={34} />
      <Button onClick={handleConfirm} disabled={!termAll}>
        가입하기
      </Button>
    </Container>
  );
};
Join.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

const Container = styled.div`
  width: 292px;
`;

const AccordionContent = styled.div`
  background: #f5f5f5;
  border-radius: 12px;
  padding: 16px;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #424242;
`;

export default Join;
