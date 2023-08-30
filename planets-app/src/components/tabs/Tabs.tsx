import React from "react";
import { useState, useEffect } from "react";
import Styled from "styled-components";
import { TabsContainer } from "./tabs-styles";
import { Tab } from "./tabs-styles";
import { TabNum } from "./tabs-styles";

export interface Props {
  color: string;
  winWidth: number;
  setContentValue: (value: number) => void;
  contentValue: number;
}

function Tabs(props: Props) {
  const [tabNamesM, setTabNamesM] = useState([
    "Overview",
    "Structure",
    "Surface",
  ]);

  const [tabNamesT, setTabNamesT] = useState([
    "Overview",
    "Internal Structure",
    "Surface Geology",
  ]);

  const { setContentValue, contentValue, winWidth, color } = props;
  return (
    <TabsContainer $winWidth={winWidth}>
      {winWidth < 768 &&
        tabNamesM.map((tabName, ind) => {
          return (
            <Tab
              $color={"none"}
              $winWidth={winWidth}
              $isActive={ind === contentValue && true}
              onClick={() => setContentValue(ind)}
              key={ind}
            >
              {tabName.toUpperCase()}
            </Tab>
          );
        })}
      {winWidth >= 768 &&
        tabNamesT.map((tabName, ind) => {
          return (
            <Tab
              $color={color}
              $winWidth={winWidth}
              $isActive={ind === contentValue && true}
              onClick={() => setContentValue(ind)}
              key={ind}
            >
              <TabNum $winWidth={winWidth}>{"0" + (ind + 1).toString()}</TabNum>
              {tabName.toUpperCase()}
            </Tab>
          );
        })}
    </TabsContainer>
  );
}

export default Tabs;
