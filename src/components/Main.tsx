import { motion } from "framer-motion";
import styled from "styled-components";
import SideMenu from "./SideMenuBar";
import TopMenu from "./TopMenu";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";
const backgroundImg = require("./img/backgroundImg.png")

const Wrapper = styled(motion.div)`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-repeat: repeat;
  background-image: url(${backgroundImg});
  font-weight: 500;
`;

const TextBox = styled.div`
  height: 80%;
  display: flex;
  margin-left: 7rem;
`;

const Greeting = styled(motion.div)`
  flex: 2;
  align-self: flex-end;
`;

const Arrow = styled(motion.div)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: right;
`;

const Content = styled(motion.p)`
  font-size: 8rem;
`;

const Contents = styled(motion.div)`
  width: 100%;
`;

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.5,
      delayChildren: 1,
      staggerChildren: 0.5
    }
  }
}

const ArrowVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.5,
      delayChildren: 1,
      staggerChildren: 0.5
    }
  }
}

const textVariants = {
  start: {
    opacity: 0,
    y: -10
  },
  end: {
    opacity: 1,
    y: 0,
  },
}

function Main() {
  return (
    <Wrapper id="menu">
      <Contents>
        <SideMenu />
        <TopMenu />
        <TextBox>
          <Greeting
            variants={boxVariants} initial="start" animate="end"
          >
            <Content variants={textVariants}>Hi,</Content>
            <Content variants={textVariants}>My name is Yugy</Content>
          </Greeting>
          <Arrow variants={ArrowVariants} initial="start" animate="end" >
            <HashLink smooth to="#about" style={{ textDecoration: 'none' }} >
              <FontAwesomeIcon style={{ fontSize: "80px", marginRight: "30px", color: "white" }} icon={faArrowRight} />
            </HashLink>
          </Arrow>
        </TextBox>
      </Contents>
    </Wrapper>
  );
}

export default Main;