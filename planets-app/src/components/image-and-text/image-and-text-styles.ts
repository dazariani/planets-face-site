import Styled from "styled-components";

// images
export const ImgBox = Styled.div<{ $winWidth: number }>`
    height: ${(props) => (props.$winWidth >= 768 ? "395px" : "305px")};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    grid-column: 1 / 3;
    grid-column: ${(props) => props.$winWidth >= 1440 && "1/2"};
    grid-row: ${(props) => props.$winWidth >= 1440 && "1/3"};
    justify-self: center;
    margin-bottom: ${(props) => (props.$winWidth >= 768 ? "50px" : "none")};
    margin-top: ${(props) => (props.$winWidth >= 768 ? "50px" : "none")};
`;

export const PlanetImg = Styled.img<{ $link?: string; $winWidth: number }>`
    content: url(${(props) => props.$link});
    transform: ${(props) =>
      props.$winWidth < 768 ? "scale(0.37)" : "scale(0.47)"};
    transform: ${(props) => props.$winWidth >= 1440 && "scale(1)"};
`;

export const GeoImg = Styled.img<{ $link?: string; $winWidth: number }>`
    content: url(${(props) => props.$link});
    display: block;
    width: ${(props) => (props.$winWidth < 768 ? "70px" : "80px")};
    width: ${(props) => props.$winWidth >= 1440 && "170px"};
    position: absolute;
    top: 55%;
    top:${(props) => props.$winWidth >= 1440 && "65%"};
`;

// Text
export const TextBox = Styled.div<{ $winWidth: number }>`
    padding-inline: ${(props) => (props.$winWidth >= 768 ? "0px" : "24px")};
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.$winWidth >= 768 ? "start" : "center")};
    margin-bottom: 28px;
    justify-self: end;
    margin-right: ${(props) => (props.$winWidth >= 768 ? "70px" : "none")};
    margin-right: ${(props) => props.$winWidth >= 1440 && "0px"};
`;

export const PlanetName = Styled.h1<{ $winWidth: number }>`
    text-align: center;
    font-size: 40px;
    font-size: ${(props) => props.$winWidth >= 1440 && "80px"};
    font-weight: 400;
    text-transform: uppercase;
    font-family: "Antonio";
    margin-bottom: 16px;
`;

export const Description = Styled.p<{ $winWidth: number }>`
    height:  ${(props) => (props.$winWidth >= 768 ? "88px" : "unset")};
    height:  ${(props) => props.$winWidth >= 1440 && "150px"};
    text-align:  ${(props) => (props.$winWidth >= 768 ? "start" : "center")};;
    font-size: 11px;
    font-size: ${(props) => props.$winWidth >= 1440 && "14px"};
    font-weight: 400;
    line-height: 22px; 
    line-height:${(props) => props.$winWidth >= 1440 && "25px"};
    font-family: 'League Spartan';
    margin-bottom: 32px;
    margin-bottom: ${(props) => props.$winWidth >= 1440 && "24px"};
`;

export const WikiBox = Styled.div`
    
`;

export const WikiName = Styled.span`
    font-size: 12px;
    font-family: 'League Spartan';
    font-weight: 400;
    line-height: 25px;
    opacity: 0.5;
`;
export const WikiLink = Styled.a`
    color: #FFF;
    opacity: 0.5;
    font-family: 'League Spartan';
    font-size: 12px;
    font-weight: 700;
    line-height: 25px;
    text-decoration-line: underline;
    letter-spacing: 1px;
`;
