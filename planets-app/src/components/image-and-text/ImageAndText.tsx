import React from "react";
import Styled from "styled-components";
import { Props } from "./image-and-text-types";

import { ImgBox } from "./image-and-text-styles";
import { PlanetImg } from "./image-and-text-styles";
import { GeoImg } from "./image-and-text-styles";
import { TextBox } from "./image-and-text-styles";
import { PlanetName } from "./image-and-text-styles";
import { Description } from "./image-and-text-styles";
import { WikiBox } from "./image-and-text-styles";
import { WikiName } from "./image-and-text-styles";
import { WikiLink } from "./image-and-text-styles";

function ImageAndText(props: Props) {
  const { winWidth, image, image1, image2, name, content, source } = props;

  return (
    <>
      {/* Image and text */}
      <ImgBox $winWidth={winWidth}>
        <PlanetImg $link={image || image1} $winWidth={winWidth} />
        <GeoImg $link={image2 || ""} $winWidth={winWidth} />
      </ImgBox>
      <TextBox $winWidth={winWidth}>
        <PlanetName $winWidth={winWidth}>{name}</PlanetName>
        <Description $winWidth={winWidth}>{content}</Description>
        <WikiBox>
          <WikiName>{"Source :" + " "}</WikiName>
          <WikiLink href={source}>Wikipedia</WikiLink>
        </WikiBox>
      </TextBox>
      {/* Number data about planet */}
    </>
  );
}

export default ImageAndText;
