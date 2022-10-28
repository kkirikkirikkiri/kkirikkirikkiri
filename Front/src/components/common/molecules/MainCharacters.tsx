import media from "constants/media";
import Image from "next/image";
import { FC } from "react";
import styled, { css } from "styled-components";
import Section from "../atoms/Section";
interface IMainCharactersProps {
  location: string;
}
const MainCharacters: FC<IMainCharactersProps> = ({ location }) => {
  return (
    <CharacterContainer location={location} gap={30} align={"flex-end"}>
      <Image
        layout={"fixed"}
        src={"/img/blue-character.svg"}
        width={72}
        height={111}
      />
      <Image
        layout={"fixed"}
        src={"/img/purple-character.svg"}
        width={85}
        height={113}
      />
      <Image
        layout={"fixed"}
        src={"/img/yellow-character.svg"}
        width={72}
        height={130}
      />
      <Image
        layout={"fixed"}
        src={"/img/green-character.svg"}
        width={79}
        height={96}
      />
    </CharacterContainer>
  );
};

const CharacterContainer = styled(Section)<IMainCharactersProps>`
  display: flex;
  gap: 30px;
  position: absolute;
  bottom: 45px;
  ${media.MOBILE} {
    display: none;
  }
  ${({ location }) =>
    css`
      ${location} : -10px
    `}
`;

export default MainCharacters;
