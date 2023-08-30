import React from "react";

import { Wrapper } from "./numberData-styles";
import { Container } from "./numberData-styles";
import { DataBox } from "./numberData-styles";
import { DataName } from "./numberData-styles";
import { DataValue } from "./numberData-styles";

interface Props {
  winWidth: number;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
}

function NumberData(props: Props) {
  const { rotation, revolution, radius, temperature, winWidth } = props;

  return (
    <Wrapper $winWidth={winWidth}>
      <Container $winWidth={winWidth}>
        <DataBox $winWidth={winWidth}>
          <DataName $winWidth={winWidth}>ROTATION TIME</DataName>
          <DataValue $winWidth={winWidth}>{rotation}</DataValue>
        </DataBox>

        <DataBox $winWidth={winWidth}>
          <DataName $winWidth={winWidth}>REVOLUTION TIME</DataName>
          <DataValue $winWidth={winWidth}>{revolution}</DataValue>
        </DataBox>

        <DataBox $winWidth={winWidth}>
          <DataName $winWidth={winWidth}>RADIUS</DataName>
          <DataValue $winWidth={winWidth}>{radius}</DataValue>
        </DataBox>

        <DataBox $winWidth={winWidth}>
          <DataName $winWidth={winWidth}>AVERAGE TEMP.</DataName>
          <DataValue $winWidth={winWidth}>{temperature}</DataValue>
        </DataBox>
      </Container>
    </Wrapper>
  );
}

export default NumberData;
