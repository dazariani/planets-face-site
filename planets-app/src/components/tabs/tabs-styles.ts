import Styled from "styled-components";

export const TabsContainer = Styled.section<{ $winWidth: number }>`
    width: ${(props) => (props.$winWidth >= 768 ? "281px" : "100%")};
    width: ${(props) => props.$winWidth >= 1440 && "350px"};
    height: ${(props) => (props.$winWidth >= 768 ? "100%" : "50px")};
    display: flex;
    flex-direction: ${(props) => (props.$winWidth >= 768 ? "column" : "row")};
    justify-content: center;
    align-items:  ${(props) => (props.$winWidth >= 768 ? "start" : "center")};
    border-top: ${(props) =>
      props.$winWidth >= 768 ? "none" : "1px solid rgb(255, 255, 255, 0.2)"};
    border-bottom: ${(props) =>
      props.$winWidth >= 768 ? "none" : "1px solid rgb(255, 255, 255, 0.2)"};
    order: ${(props) => (props.$winWidth >= 768 ? "3" : "0")};
    grid-column: ${(props) => props.$winWidth >= 1440 && "2/3"};
`;

export const Tab = Styled.span<{
  $isActive?: boolean;
  $winWidth: number;
  $color: string;
}>`
    width: 100%;
    height: ${(props) => (props.$winWidth >= 768 ? "40px" : "unset")};
    height: ${(props) => props.$winWidth >= 768 && "48px"};
    display: ${(props) => (props.$winWidth >= 768 ? "flex" : "block")};;
    text-align: ${(props) => (props.$winWidth >= 768 ? "start" : "center")};
    font-family: 'League Spartan';
    font-size: 9px;
    font-size: ${(props) => props.$winWidth >= 1440 && "12px"};
    font-weight: bold;
    line-height: 1px;
    letter-spacing: 1.929px;
    text-transform: uppercase;
    opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
    opacity: ${(props) => props.$winWidth >= 768 && 1};
    background: ${(props) =>
      props.$isActive && props.$winWidth >= 768 ? props.$color : "none"};
    padding-left: ${(props) => (props.$winWidth >= 768 ? "20px" : "unset")};
    margin-bottom: ${(props) => (props.$winWidth >= 768 ? "16px" : "unset")};
    border: ${(props) =>
      props.$winWidth >= 768 ? "1px solid rgb(255, 255, 255, 0.2)" : "none"};
    align-items: center;
    transition: 0.3s ease-in-out;
    cursor: ${(props) => props.$winWidth >= 1440 && "pointer"};

    &:hover{
      background: ${(props) =>
        props.$winWidth >= 1440 && props.$isActive === false && "#313148"}; 
    }
`;

export const TabNum = Styled.span<{ $winWidth: number }>`
  opacity: 0.5;
  margin-right: 17px;
  margin-right: ${(props) => props.$winWidth >= 1440 && "28px"};
`;
