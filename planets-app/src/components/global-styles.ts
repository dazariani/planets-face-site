import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
ul{
  list-style-type: none;
}
/* img{
  width: 100%;
} */
  body{
    font-family: 'League Spartan', sans-serif; 
    font-weight: 400;
    color: #ffffff;
    background-image: url("./assets/background-stars.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-color: #070724;
  }
`;

// font-family: 'Antonio', sans-serif;
// font-family: 'League Spartan', sans-serif;
