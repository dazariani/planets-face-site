import React from "react";
import Styled, { keyframes } from "styled-components";
import NavigationItem from "../navigation-item/NavigationItem";
import { Props } from "./navigation-types";

function Navigation(props: Props) {
  const {
    data,
    setPageValue,
    setContentValue,
    isNavOn,
    setIsNavOn,
    winWidth,
    pageValue,
  } = props;

  return (
    <Container $winWidth={winWidth} $isNavOn={isNavOn}>
      {data.map((planet, ind) => {
        return (
          <NavigationItem
            isPageActive={ind === pageValue}
            pageValue={pageValue}
            winWidth={winWidth}
            isNavOn={isNavOn}
            setIsNavOn={setIsNavOn}
            key={ind}
            planetName={planet.name}
            planetColor={planet.color}
            index={ind}
            data={data}
            setPageValue={setPageValue}
            setContentValue={setContentValue}
          />
        );
      })}
    </Container>
  );
}

export default Navigation;

const Container = Styled.section<{ $isNavOn: boolean; $winWidth: number }>`
  display: ${(props) => (props.$winWidth >= 768 ? "flex" : "block")};
  justify-content: space-between;
  padding-bottom: ${(props) =>
    props.$winWidth >= 768 && props.$winWidth < 1440 ? "27px" : "0px"};
  padding-inline: ${(props) => (props.$winWidth >= 768 ? "35px" : "0px")};
  border-bottom: ${(props) =>
    props.$winWidth >= 768 && props.$winWidth < 1440
      ? "1px solid rgb(255, 255, 255, 0.2)"
      : "none"};
  height: ${(props) => (props.$isNavOn ? "100%" : "0px")};
  height: ${(props) => props.$winWidth >= 768 && "100%"};
  opacity: ${(props) => (props.$isNavOn ? "1" : "0")};
  opacity: ${(props) => props.$winWidth >= 768 && "1"};
  transition: opacity 0.5s ease-in-out;
  overflow: hidden;
  cursor: ${(props) => (props.$winWidth >= 1440 ? "pointer" : "auto")};
  
`;
