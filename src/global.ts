import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@font-face {
  font-family: "DOSGothic";
  font-weight: normal;
  src: url("./fonts/DOSGothic.ttf") format("truetype");
}

@font-face {
  font-family: "NanumSquareNeo-aLt";
  font-weight: normal;
  src: url("./fonts/NanumSquareNeo-aLt.ttf") format("truetype");
}

    body {
      margin: 0; 
      line-height: normal;
      max-width: 600px;
      font-family: "DOSGothic";
      font-family: "NanumSquareNeo-aLt";
    }

`;
