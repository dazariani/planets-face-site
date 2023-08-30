import Styled from "styled-components";

export const Container = Styled.div<{ $winWidth: number }>`
  background-color: rgb(7, 7, 36);
  margin-inline: ${(props) => props.$winWidth >= 1440 && "16.5px"};

  &:first-child {
    border-top: ${(props) =>
      props.$winWidth >= 768 ? "none" : "1px solid rgb(255, 255, 255, 0.2)"}; 
  }
 
  &:last-child {
    border: none;
  }
`;

export const List = Styled.li<{ $winWidth: number }>`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block:  ${(props) => (props.$winWidth >= 768 ? "0px" : "20px")};
  padding-inline: ${(props) =>
    props.$winWidth >= 768 ? "16.5px" : "24px 32px"}; 
  padding-inline: ${(props) => props.$winWidth >= 1440 && "0px"}; 
   
  border-top:  ${(props) =>
    props.$winWidth >= 768 ? "none" : "1px solid rgb(255, 255, 255, 0.2) "}; 
`;

export const NameDotBox = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
`;

export const ArrowBox = Styled.div<{ $winWidth: number }>`
    display: ${(props) => (props.$winWidth >= 768 ? "none" : "block")};
`;

export const ErrowImg = Styled.img`
  content: url("./assets/icon-chevron.svg");
`;

export const DotBox = Styled.div<{ $bgColor: string; $winWidth: number }>`
  display: ${(props) => (props.$winWidth >= 768 ? "none" : "block")};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.$bgColor}
`;

export const PlanetName = Styled.span<{
  $winWidth: number;
  $isPageActive: boolean;
}>`
  color: #FFF;
  text-align: center;
  font-family: "League Spartan";
  font-size:  ${(props) => (props.$winWidth >= 768 ? "11px" : "15px")};
  font-weight: 700;
  line-height: 25px; 
  letter-spacing: 1.364px;
  text-transform: uppercase;
  opacity: ${(props) => (props.$winWidth >= 768 ? "0.5" : "1")};
  opacity: ${(props) =>
    props.$winWidth >= 768 && props.$isPageActive
      ? "1"
      : props.$winWidth < 768
      ? "1"
      : ""};
      transition: ${(props) =>
        props.$winWidth >= 768 ? "0.3s ease-in-out" : "none"}; 

        &:hover{
          opacity:${(props) => props.$winWidth >= 1440 && "1"};  
        }
`;
