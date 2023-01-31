import Button from "components/common/atoms/Button";
import CommonSelect from "components/common/atoms/CommonSelect";
import HorizontalBlank from "components/common/atoms/HorizontalBlank";
import HorizontalLine from "components/common/atoms/HorizontalLine";
import Section from "components/common/atoms/Section";
import React, { FC, useCallback, useState } from "react";
import styled from "styled-components";
import ColorSelect from "./ColorSelect";
interface DetailProfileInputProps {
  onNext: () => void;
}

const CameraIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_296_166)">
        <path
          d="M8.00052 10.1334C9.17873 10.1334 10.1339 9.17824 10.1339 8.00003C10.1339 6.82182 9.17873 5.8667 8.00052 5.8667C6.82231 5.8667 5.86719 6.82182 5.86719 8.00003C5.86719 9.17824 6.82231 10.1334 8.00052 10.1334Z"
          fill="#A088CE"
        />
        <path
          d="M6.90428 1.3335C6.32855 1.3335 5.7793 1.57541 5.39065 2.00016C5.002 2.42492 4.45276 2.66683 3.87702 2.66683H2.66732C1.93398 2.66683 1.33398 3.26683 1.33398 4.00016V12.0002C1.33398 12.7335 1.93398 13.3335 2.66732 13.3335H13.334C14.0673 13.3335 14.6673 12.7335 14.6673 12.0002V4.00016C14.6673 3.26683 14.0673 2.66683 13.334 2.66683H12.1243C11.5485 2.66683 10.9993 2.42492 10.6107 2.00016C10.222 1.57541 9.67276 1.3335 9.09702 1.3335H6.90428ZM8.00065 11.3335C6.16065 11.3335 4.66732 9.84016 4.66732 8.00016C4.66732 6.16016 6.16065 4.66683 8.00065 4.66683C9.84065 4.66683 11.334 6.16016 11.334 8.00016C11.334 9.84016 9.84065 11.3335 8.00065 11.3335Z"
          fill="#A088CE"
        />
      </g>
      <defs>
        <clipPath id="clip0_296_166">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const DetailProfileInput: FC<DetailProfileInputProps> = ({ onNext }) => {
  const handleClick = useCallback(() => {
    onNext();
  }, []);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer | null>(
    null
  );
  const onChange = (file: File | null) => {
    console.log(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile || null);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => setPreviewUrl(e.target?.result!);
      reader.readAsDataURL(selectedFile);
      onChange(selectedFile);
    } else {
      setPreviewUrl(null);
      onChange(null);
    }
  };

  const mbtiList = [
    "ISTJ",
    "ISFJ",
    "INFJ",
    "INTJ",
    "ISTP",
    "ISFP",
    "INFP",
    "INTP",
    "ESTP",
    "ESFP",
    "ENFP",
    "ENTP",
    "ESTJ",
    "ESFJ",
    "ENFJ",
    "ENTJ",
  ];

  const bloodTypeList = ["A", "B", "O", "AB"];

  return (
    <>
      <HorizontalLine color="#EAEAEA" marginHorizontal={24} />
      <ImageTemplateContainer>
        <ImageContainer>
          {previewUrl ? (
            <Image src={previewUrl as string} alt="Preview" />
          ) : null}
          <input type="file" id="photo-input" onChange={handleChange} />
        </ImageContainer>
        <IconContainer htmlFor="photo-input">
          <CameraIcon />
        </IconContainer>
      </ImageTemplateContainer>
      <HorizontalBlank height={24} />
      <SelectContainer>
        <CommonSelect
          placeholder="나의 MBTI를 선택해 주세요."
          options={mbtiList.map((item) => ({ label: item, value: item }))}
        />
        <CommonSelect
          placeholder="나의 혈액형을 입력해 주세요."
          options={bloodTypeList.map((item) => ({
            label: `${item}형`,
            value: item,
          }))}
        />
        <ColorSelect />
      </SelectContainer>
      <Section margin="32px 0 0 0" gap={8}>
        <Button color="#9A9A9A" background={"#F5F5F5"}>
          건너뛰기
        </Button>
        <Button>가입하기</Button>
      </Section>
    </>
  );
};
const ImageTemplateContainer = styled.div`
  position: relative;
  width: 77px;
  height: 77px;
`;

const ImageContainer = styled.div`
  border-radius: 50%;
  width: 77px;
  height: 77px;
  background: #fbfbfb;
  border: 1px solid #f5f2fa;
  overflow: hidden;
  & > input {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const IconContainer = styled.label`
  width: 29px;
  height: 29px;
  border-radius: 50%;
  background: #f5f2fa;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -9px;
  bottom: 3px;
`;

const SelectContainer = styled.div`
  display: grid;
  grid-gap: 16px;
`;

export default DetailProfileInput;
