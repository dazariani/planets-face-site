import React from "react";
import { HeaderContainer } from "./header-styles";
import { AppTitle } from "./header-styles";
import { BurgerBox } from "./header-styles";
import { BurgerImg } from "./header-styles";

interface Props {
  setContentValue: (prop: number) => void;
  setPageValue: (prop: number) => void;
  winWidth: number;
  isNavOn: boolean;
  setIsNavOn: (prop: boolean) => void;
}

function Header(props: Props) {
  const { isNavOn, setIsNavOn, winWidth, setContentValue, setPageValue } =
    props;

  return (
    <HeaderContainer $winWidth={winWidth}>
      <AppTitle
        $winWidth={winWidth}
        onClick={() => {
          setPageValue(0);
          setContentValue(0);
          if (winWidth < 768) setIsNavOn(!isNavOn);
        }}
      >
        THE PLANETS
      </AppTitle>
      <BurgerBox $winWidth={winWidth} onClick={() => setIsNavOn(!isNavOn)}>
        <BurgerImg $navState={isNavOn} />
      </BurgerBox>
    </HeaderContainer>
  );
}

export default Header;
