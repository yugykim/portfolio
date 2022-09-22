import { motion } from "framer-motion";
import styled from "styled-components";
import SideMenu from "./SideMenuBar";
const firstG = require("./img/firstG.png")
const firstWeb = require("./img/firstWeb.png")
const Lebistro = require("./img/Lebistro.png")
const momentom = require("./img/momentom.png")
const moodSpot = require("./img/moodSpot.png")
const nasaPic = require("./img/nasaPic.png")
const todoReact = require("./img/todoReact.png")
const uberEat = require("./img/uberEat.png")
const netflixReact = require("./img/netflixReact.png")
const backgroundImg = require("./img/backgroundImg.png")

const Wrapper = styled(motion.div)`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  background-image: url(${backgroundImg});
`;

const InnerWrapper = styled(motion.div)`
  display: flex;
  height: 100vh;
  margin-left: 80px;
  align-items: center;
`;

const ProjBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  cursor: pointer;
  width: 100%;
  -webkit-filter: grayscale(100%); /* black and white*/
  filter: grayscale(100%);
  &:hover {
    -webkit-filter: grayscale(0%); /* color */
    filter: grayscale(0%);
  }
`;

function Project() {
  const openInNewTab = (url: string | undefined) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <Wrapper id="project">
      <SideMenu />
      <InnerWrapper>
        <ProjBox>
          <a href="https://github.com/yugykim/The-first-Game" target="_blank" rel="noopener noreferrer"><Img src={firstG} /></a>
          <a href="https://github.com/yugykim/todo-react" target="_blank" rel="noopener noreferrer"><Img src={todoReact} /></a>
        </ProjBox>
        <ProjBox>
          <a href="https://github.com/yugykim/netflix-react" target="_blank" rel="noopener noreferrer"><Img src={netflixReact} /></a>
          <a href="https://github.com/yugykim/uber-eats-backend" target="_blank" rel="noopener noreferrer"><Img src={uberEat} /></a>
          <a href="https://github.com/yugykim/hackathon" target="_blank" rel="noopener noreferrer"><Img src={moodSpot} /></a>
        </ProjBox>
        <ProjBox>
          <a href="https://github.com/yugykim/le-bistro" target="_blank" rel="noopener noreferrer"><Img src={Lebistro} /></a>
          <a href="https://github.com/yugykim/momentum_chrome" target="_blank" rel="noopener noreferrer"><Img src={momentom} /></a>
        </ProjBox>
        <ProjBox>
          <a href="https://github.com/yugykim/nasa-picture-viewer" target="_blank" rel="noopener noreferrer"><Img src={nasaPic} /></a>
          <a href="https://github.com/yugykim/myfirstwebsite" target="_blank" rel="noopener noreferrer"><Img src={firstWeb} /></a>
        </ProjBox>
      </InnerWrapper>
    </Wrapper>
  );
}

export default Project;
