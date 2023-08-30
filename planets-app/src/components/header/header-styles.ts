import Styled from "styled-components";

export const HeaderContainer = Styled.div<{ $winWidth: number }>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.$winWidth >= 768 ? "center" : "space-between"};
  align-items: center;
  padding-inline: 24px;
  padding-block: ${(props) => (props.$winWidth >= 768 ? "32px 39px" : "24px")};
  padding-block: ${(props) => props.$winWidth >= 1440 && "30px"};
`;

export const AppTitle = Styled.span<{ $winWidth: number }>`
font-family: Antonio;
font-size: 28px;
letter-spacing: -1.05px;
text-transform: uppercase;
cursor: ${(props) => props.$winWidth >= 1440 && "pointer"};
`;

export const BurgerBox = Styled.div<{ $winWidth: number }>`
display: ${(props) => (props.$winWidth >= 768 ? "none" : "block")};
`;

export const BurgerImg = Styled.img<{ $navState: boolean }>`
  content: url("./assets/icon-hamburger.svg");
  opacity: ${(props) => (props.$navState ? 0.3 : 1)}
`;
