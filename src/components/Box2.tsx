import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import styled from "styled-components";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Wrapper = styled(motion.div)`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #211E1D;
  color: white;
  flex-direction: column;
`;

const FirstBox = styled(motion.div)`
  flex: 2;
  margin: 100px 20px;
  font-size: 100px;
`;

const SecondBox = styled(motion.div)`
  align-self: flex-end;
  font-size: 30px;
  display: flex;
`;

const InnerContentFirst = styled(motion.div)`
  margin-left: 30px;
  flex: 2;
  border-right: 1px solid white;
`;

const InnerContentSecond = styled(motion.div)`
  width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    }
  }
}
const contentVariants = {
  start: {
    opacity: 0,
    y: 10
  },
  end: {
    opacity: 1,
    y: 0,
  },
}

function Box2() {
  return (
    <Wrapper variants={boxVariants} initial="start" animate="end">
      <FirstBox variants={contentVariants}>
        <h2>Software Development Student <br /><br />& Graduation in 2023</h2>
      </FirstBox>
      <SecondBox variants={contentVariants}>
        <InnerContentFirst>
          <p>Currently taking a Software Development 2 years Diploma course,<br />learning to become a full-stack Developer</p>
        </InnerContentFirst>
        <InnerContentSecond>
          <a href="https://github.com/yugykim"><FontAwesomeIcon style={{"marginRight": "20px", "color":"white"}} icon={faGithub}/></a>
          <a href="https://www.linkedin.com/in/yugyeong-kim-20a16b225/"><FontAwesomeIcon  style={{"marginRight": "20px", "color":"white"}} icon={faLinkedin}/></a>
          <a href="https://www.instagram.com/yugyeongkim2/"><FontAwesomeIcon style={{"color": "white"}} icon={faInstagram}/></a>
        </InnerContentSecond>
      </SecondBox>
    </Wrapper>
  );
}

export default Box2;