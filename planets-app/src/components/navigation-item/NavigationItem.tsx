import React from "react";
import Styled from "styled-components";
import { Props } from "../navigation/navigation-types";

import { Container } from "./navigation-item-styles";
import { List } from "./navigation-item-styles";
import { NameDotBox } from "./navigation-item-styles";
import { ArrowBox } from "./navigation-item-styles";
import { ErrowImg } from "./navigation-item-styles";
import { DotBox } from "./navigation-item-styles";
import { PlanetName } from "./navigation-item-styles";

interface LocalTypes extends Props {
  isPageActive: boolean;
  planetName: string;
  index: number;
  planetColor: string;
  isNavOn: boolean;
  setIsNavOn: (prop: boolean) => void;
}

function NavigationItem(props: LocalTypes) {
  const {
    setPageValue,
    setContentValue,
    planetName,
    index,
    planetColor,
    isNavOn,
    setIsNavOn,
    winWidth,
    isPageActive,
  } = props;

  return (
    <Container
      $winWidth={winWidth}
      onClick={() => {
        setPageValue(index);
        setContentValue(0);
        if (winWidth < 768) setIsNavOn(!isNavOn);
      }}
    >
      <List $winWidth={winWidth}>
        <NameDotBox>
          <DotBox $winWidth={winWidth} $bgColor={planetColor}></DotBox>
          <PlanetName $isPageActive={isPageActive} $winWidth={winWidth}>
            {planetName}
          </PlanetName>
        </NameDotBox>
        <ArrowBox $winWidth={winWidth}>
          <ErrowImg />
        </ArrowBox>
      </List>
    </Container>
  );
}

export default NavigationItem;
