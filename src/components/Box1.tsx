import { motion } from "framer-motion";
import styled from "styled-components";
import TopMenu from "./TopMenu";

const Wrapper = styled(motion.div)`
  display: flex;
  height: 100vh;
`;

const TextBox = styled.div`
  height: 88%;
  display: flex;
  width: 100vw;
`;

const Greeting = styled(motion.div)`
  width: 80%;
  align-self: flex-end;
`;

const Content = styled(motion.p)`
  font-size: 10vw;
  margin: 20px;
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

function Box1() {
  return (
    <Wrapper>
      <Contents>
        <TopMenu />
        <TextBox>
          <Greeting
            variants={boxVariants} initial="start" animate="end"
          >
            <Content variants={textVariants}>Hi,</Content>
            <Content variants={textVariants}>My name is Yugi</Content>
          </Greeting>
        </TextBox>
      </Contents>
    </Wrapper>
  );
}

export default Box1;