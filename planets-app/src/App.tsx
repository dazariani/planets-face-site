import React from "react";
import { useState, useEffect } from "react";
import planetsData from "./components/data.json";
import { GlobalStyles } from "./components/global-styles";
import Header from "./components/header/Header";
import { Wrapper } from "./app-styles";
import { DesktopHeader } from "./app-styles";
import Tabs from "./components/tabs/Tabs";
import Content from "./components/content/Content";
import { Types } from "./app-types";
import { TabsDataTypes } from "./app-types";
import Navigation from "./components/navigation/Navigation";

function App() {
  const [contentValue, setContentValue] = useState<number>(0);
  const [data, setData] = useState<Types[]>(planetsData);
  const [pageValue, setPageValue] = useState<number>(0);

  const [isNavOn, setIsNavOn] = useState<boolean>(false);

  const [winWidth, setWinWidth] = useState<number>(window.innerWidth);

  const tabsDataArray = [
    data[pageValue].overview,
    data[pageValue].structure,
    data[pageValue].geology,
  ];
  const [tabsData, setTabsData] = useState<TabsDataTypes>(tabsDataArray);

  const { name, color, rotation, revolution, radius, temperature } =
    data[pageValue];

  const { content, image, source, image1, image2 } = tabsData[contentValue];

  useEffect(() => {
    const changeWidth = (): void => setWinWidth(window.innerWidth);

    window.addEventListener("resize", changeWidth);

    return (): void => window.removeEventListener("resize", changeWidth);
  }, [window.innerWidth]);

  useEffect(() => {
    if (winWidth >= 768) {
      setIsNavOn(false);
    }
  }, [winWidth]);

  useEffect(() => {
    setTabsData([
      data[pageValue].overview,
      data[pageValue].structure,
      data[pageValue].geology,
    ]);
  }, [pageValue]);

  return (
    <Wrapper>
      <GlobalStyles />
      {winWidth >= 1440 ? (
        <DesktopHeader>
          <Header
            setContentValue={setContentValue}
            setPageValue={setPageValue}
            winWidth={winWidth}
            isNavOn={isNavOn}
            setIsNavOn={setIsNavOn}
          />

          <Navigation
            pageValue={pageValue}
            winWidth={winWidth}
            isNavOn={isNavOn}
            setIsNavOn={setIsNavOn}
            data={data}
            setPageValue={setPageValue}
            setContentValue={setContentValue}
          />
        </DesktopHeader>
      ) : (
        <>
          <Header
            setContentValue={setContentValue}
            setPageValue={setPageValue}
            winWidth={winWidth}
            isNavOn={isNavOn}
            setIsNavOn={setIsNavOn}
          />

          <Navigation
            pageValue={pageValue}
            winWidth={winWidth}
            isNavOn={isNavOn}
            setIsNavOn={setIsNavOn}
            data={data}
            setPageValue={setPageValue}
            setContentValue={setContentValue}
          />
        </>
      )}

      <Content
        color={color}
        winWidth={winWidth}
        isNavOn={isNavOn}
        contentValue={contentValue}
        setContentValue={setContentValue}
        image={image}
        image1={image1}
        image2={image2}
        name={name}
        content={content}
        source={source}
        rotation={rotation}
        revolution={revolution}
        radius={radius}
        temperature={temperature}
      />
    </Wrapper>
  );
}

export default App;
