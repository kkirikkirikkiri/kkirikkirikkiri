import { FC, memo, ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface IAccordionProps {
  collapse: boolean;
  children: ReactNode;
}

const Accordion: FC<IAccordionProps> = ({ collapse, children }) => {
  const childRef = useRef<HTMLDivElement>(null);
  const [overflowStyle, setOverflowStyle] = useState<"visible" | "hidden">(
    collapse ? "visible" : "hidden"
  );

  const openStyle = {
    maxHeight: 1000,
    transition: "max-height 0.35s ease-in-out",
  };

  const closeStyle = {
    maxHeight: 0,
    transition: "max-height 0.35s cubic-bezier(0, 1, 0, 1)",
  };
  useEffect(() => {
    collapse || setOverflowStyle("hidden");
  }, [collapse]);

  return (
    <ContentsWrapper
      style={{
        ...(collapse ? openStyle : closeStyle),
        overflow: overflowStyle,
      }}
      onTransitionEnd={() => setOverflowStyle(collapse ? "visible" : "hidden")}
    >
      <Contents ref={childRef}>{children}</Contents>
    </ContentsWrapper>
  );
};

const ContentsWrapper = styled.div`
  width: inherit;
  overflow: hidden;
`;

const Contents = styled.div`
  height: fit-content;
`;

export default memo(Accordion);
