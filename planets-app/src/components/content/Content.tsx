import React from "react";
import Styled, { keyframes } from "styled-components";
import Tabs from "../tabs/Tabs";
import ImageAndText from "../image-and-text/ImageAndText";
import { Props } from "./content-types";
import NumberData from "../number data/NumberData";

function Content(props: Props) {
  const {
    color,
    winWidth,
    isNavOn,
    contentValue,
    setContentValue,
    image,
    image1,
    image2,
    name,
    content,
    source,
    rotation,
    revolution,
    radius,
    temperature,
  } = props;

  return (
    <Container $isNavOn={isNavOn} $winWidth={winWidth}>
      <ContentContainer $winWidth={winWidth}>
        <Tabs
          color={color}
          winWidth={winWidth}
          contentValue={contentValue}
          setContentValue={setContentValue}
        />
        <ImageAndText
          winWidth={winWidth}
          image={image}
          image1={image1}
          image2={image2}
          name={name}
          content={content}
          source={source}
        />
      </ContentContainer>
      <NumberData
        winWidth={winWidth}
        rotation={rotation}
        revolution={revolution}
        radius={radius}
        temperature={temperature}
      />
    </Container>
  );
}

export default Content;

const Container = Styled.section<{ $isNavOn: boolean; $winWidth: number }>`
  height: ${(props) => (props.$isNavOn ? "0px" : "100%")};
  opacity: ${(props) => (props.$isNavOn ? "0" : "1")};
  transition: opacity 0.5s ease-in-out;
  overflow: hidden; 
  max-width: ${(props) => (props.$winWidth >= 1200 ? "1110px" : "unset")};
  max-width: ${(props) => props.$winWidth >= 1400 && "83vw"};
  margin: auto;
`;

const ContentContainer = Styled.div<{ $winWidth: number }>`
  display: ${(props) => (props.$winWidth >= 768 ? "grid" : "block")};
  grid-template-columns:  auto 281px;
  grid-template-columns: ${(props) => props.$winWidth >= 1440 && "auto 350px"};
  justify-items: center;
  align-items: center;
  padding-inline:  ${(props) =>
    props.$winWidth >= 768 && props.$winWidth < 1200 ? "40px" : "none"};
    margin-bottom: ${(props) => props.$winWidth >= 1440 && "85px"};
    margin-top:  ${(props) => props.$winWidth >= 1440 && "110px"};
    column-gap: ${(props) => props.$winWidth >= 1440 && "10vw"};
`;
