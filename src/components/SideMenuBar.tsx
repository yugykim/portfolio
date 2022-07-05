import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = styled(motion.div)`
  height: 100%;
  width: 13em;
  background-color: #191717;
  position: relative;
  display: flex;
  justify-content: center;
`;

const MenuIcon = styled(FontAwesomeIcon)`
  margin-top: 20px;
  font-size: 25px;
  color: white;
`;

const ScrollBarFrame = keyframes`
  0% {
    height: 0%
  }
  100% {
    height: 70%
  }
`;

const ScrollBarBox = styled(motion.div)`
  margin-top: 140px;
  margin-left: 20px;
  width: 10px;
  height: 70%;
  padding: 10px;
  border-left: 1.5px solid grey;
  position: absolute;
  animation: ${ScrollBarFrame} 4s;
`;

const ScrollBar = styled.div`
  padding: 60px 0px;
  color: white;
  vertical-align:top;
  transform:rotate(7deg);
  -ms-transform:rotate(90deg); 
  -moz-transform:rotate(90deg); 
  -webkit-transform:rotate(90deg); 
  -o-transform:rotate(90deg);
`;

const MenuItem = styled(motion.p)`
  color: white
`;

const container = {
  hidden: {
    opacity: 1,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    duration: 10,
    transition: {
      delayChildren: 5,
      staggerChildren: 5
    }
  }
};

const item = {
  hidden: {
    y: 20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  }
};

function SideMenu() {
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <Menu>
      <MenuIcon icon={faBars} />
      <ScrollBarBox
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
        onMouseOver={() => setMouseOver(true)}
        onMouseOut={() => setMouseOver(false)}
      >
        {mouseOver ? (
          <>
            <ScrollBar>
              <MenuItem variants={item}>Menu</MenuItem>
            </ScrollBar>
            <ScrollBar>
              <MenuItem variants={item}>About</MenuItem>
            </ScrollBar>
            <ScrollBar>
              <MenuItem variants={item}>Project</MenuItem>
            </ScrollBar>
          </>
        ) : ""}
      </ScrollBarBox>
    </Menu>
  );
}

export default SideMenu;