import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { isDocTheme, isMainTheme } from "./theme";
import { mainAtom } from "./atoms"
import { useRecoilValue } from "recoil";
import HorizontalScroll from 'react-scroll-horizontal';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Box1 from "./components/Box1";
import SideMenu from "./components/SideMenuBar";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";
import { Route, Routes } from "react-router-dom";

const Globalstyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;1,200&display=swap');
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  `;

const Wrapper = styled(motion.div)`
  display: flex;
  height: 100vh;
`;

const ContentWrap = styled(motion.div)`
  display: flex;
  width: 300em;
`;

function App() {
  const mainTheme = useRecoilValue(mainAtom);
  const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 })

  useEffect(() => {
    function updatePosition() {
      setPosition({ scrollX: window.scrollX, scrollY: window.scrollY })
    }

    window.addEventListener('scroll', updatePosition)
    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return (
    <ThemeProvider theme={mainTheme ? isMainTheme : isDocTheme}>
      <Globalstyle />
      <Wrapper>
        <SideMenu />
        <ContentWrap>
          <HorizontalScroll
            config={{ stiffness: 5, damping: 5 }}
            animValues={80}
          >
            <Box1 />
            <Box2 />
            <Box3 />
          </HorizontalScroll>
        </ContentWrap>
      </Wrapper>
    </ThemeProvider>

  );
}

export default App;
