import Styled from "styled-components";

export const Wrapper = Styled.section<{ $winWidth: number }>`
    padding-inline: ${(props) =>
      props.$winWidth < 768 ? "24px" : props.$winWidth < 1200 ? "40px" : "0px"};
    padding-bottom: 39px;
`;

export const Container = Styled.section<{ $winWidth: number }>`
    display: flex;
    flex-direction: ${(props) => (props.$winWidth < 768 ? "column" : "row")};
    justify-content: ${(props) =>
      props.$winWidth < 768 ? "unset" : "space-between"};
    gap: ${(props) => (props.$winWidth < 768 ? "unset" : "11px")};
 
  
`;

export const DataBox = Styled.div<{ $winWidth: number }>`
    width: ${(props) => (props.$winWidth < 768 ? "unset" : "164px")};
    width: ${(props) => props.$winWidth >= 1440 && "255px"};
    display: flex;
    flex-direction: ${(props) => (props.$winWidth < 768 ? "row" : "column")};
    justify-content: space-between;
    align-items: ${(props) => (props.$winWidth < 768 ? "center" : "start")};;
    border:  1px solid rgb(255, 255, 255, 0.2);
    padding-inline: 24px;
    padding-left: ${(props) => props.$winWidth >= 768 && "15px"};
    padding-block: ${(props) => (props.$winWidth >= 768 ? "20px" : "10px")};
    padding-block: ${(props) => props.$winWidth >= 1440 && "20px 27px"};
    margin-bottom: ${(props) => (props.$winWidth < 768 ? "8px" : "0px")};
`;

export const DataName = Styled.span<{ $winWidth: number }>`
    color: #FFF;
    font-size: 10px;
    font-size: ${(props) => props.$winWidth >= 1440 && "12px"};
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.727px;
    text-transform: uppercase;
    font-family: 'League Spartan';
    opacity: 0.5;
`;

export const DataValue = Styled.span<{ $winWidth: number }>`
    color: #FFF;
    font-family: "Antonio";
    font-size:  ${(props) => (props.$winWidth < 768 ? "20px" : "24px")};
    font-size:  ${(props) => props.$winWidth >= 1440 && "40px"};
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.75px;
    text-transform: uppercase;
    text-align: right;
`;
