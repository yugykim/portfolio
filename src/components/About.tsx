import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import styled from "styled-components";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import SideMenu from "./SideMenuBar";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";
const backgroundImg = require("./img/backgroundImg.png")

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImg});
`;

const InnerWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: 6rem;
`;

const FirstBox = styled(motion.div)`
  display: flex;
  align-items: center;
  flex: 2;
  font-size: 5vw;
  
  @media (max-width: 1028px) {
    font-size: 5rem;
  }
`;

const InnerFirstOne = styled(motion.div)`
  flex: 2;
`;

const InnerFirstTwo = styled(motion.div)`
  margin-right: 10px;
  margin-top: 300px;
`;

const SecondBox = styled(motion.div)`
  flex: 1;
  display: flex;
  width: 100%;
  font-size: 3vw;
  font-weight: 200;
  @media (max-width: 1028px) {
    font-size: 2.5rem;
  }
`;

const InnerContentFirst = styled(motion.div)`
  display: flex;
  width: 60%;
  border-right: 1px solid white;
  height: 100%;
  align-items: flex-end;
`;

const InnerContentSecond = styled(motion.div)`
  display: flex;
  width: 40%;
  height: 100%;
  align-items: flex-end;
  justify-content: center;
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

function About() {
  return (
    <Wrapper id="about">
      <SideMenu />
      <InnerWrapper variants={boxVariants} initial="start" animate="end">
        <FirstBox variants={contentVariants}>
          <InnerFirstOne>Software Development Student <br /><br />& Graduation in 2023</InnerFirstOne>
          <InnerFirstTwo>
            <HashLink smooth to="#project" style={{ textDecoration: 'none' }} >
              <FontAwesomeIcon style={{ fontSize: "80px", color: "white"}} icon={faArrowRight} />
            </HashLink>
          </InnerFirstTwo>
        </FirstBox>
        <SecondBox variants={contentVariants}>
          <InnerContentFirst>
            <p>Currently taking a Software Development <br />2 years Diploma course,<br />learning to become a full-stack Developer</p>
          </InnerContentFirst>
          <InnerContentSecond>
            <a href="https://github.com/yugykim"><FontAwesomeIcon style={{ "marginRight": "20px", "color": "white" }} icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/yugy-kim-20a16b225/"><FontAwesomeIcon style={{ "marginRight": "20px", "color": "white" }} icon={faLinkedin} /></a>
            <a href="https://www.instagram.com/yugyeongkim2/"><FontAwesomeIcon style={{ "color": "white" }} icon={faInstagram} /></a>
          </InnerContentSecond>
        </SecondBox>
      </InnerWrapper>
    </Wrapper>
  );
}

export default About;