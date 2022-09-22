import { motion, useViewportScroll } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { HashLink } from 'react-router-hash-link';
import {
  useLocation,
} from 'react-router-dom';

const Menu = styled(motion.div)`
  height: 100%;
  background-color: #191717;
  position: absolute;
  display: flex;
  justify-content: center;
  width: 5rem;
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
  margin-top: 150px;
  margin-left: 20px;
  width: 10px;
  height: 70%;
  padding: 10px;
  border-left: 2px solid grey;
  position: absolute;
  animation: ${ScrollBarFrame} 4s;
`;

const ScrollBar = styled.div`
  padding: 60px 5px;
  color: white;
  vertical-align:top;
  transform:rotate(7deg);
  -ms-transform:rotate(90deg); 
  -moz-transform:rotate(90deg); 
  -webkit-transform:rotate(90deg); 
  -o-transform:rotate(90deg);
`;

const MenuItem = styled.div`
  margin-left: 80px;
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
    },
  }
};

function SideMenu() {
  const [selectedName, setSelectedName] = useState("");
  const location = useLocation();

  const Selected = () => {
    setSelectedName(location.hash);
  }
  useEffect(() => {
    setSelectedName("#menu");
  }, []);
  return (
    <Menu>
      <ScrollBarBox
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <HashLink smooth to="#menu" style={{ textDecoration: 'none', color: "#DAA520" }} >
          <ScrollBar onMouseUp={Selected} >
            <MenuItem>
              {selectedName === "#menu" ? <span style={{ color: "grey" }}>Menu</span> : <span style={{ color: "white" }}>Menu</span>}
            </MenuItem>
          </ScrollBar>
        </HashLink>
        <HashLink smooth to="#about" style={{ textDecoration: 'none', color: "#DAA520" }}>
          <ScrollBar onMouseUp={Selected}>
            <MenuItem>
              {selectedName === "#about" ? <span style={{ color: "grey" }}>About</span> : <span style={{ color: "white" }}>About</span>}
            </MenuItem>
          </ScrollBar>
        </HashLink>
        <HashLink smooth to="#project" style={{ textDecoration: 'none', color: "#DAA520" }}>
          <ScrollBar onMouseUp={Selected}>
            <MenuItem >
              `{selectedName === "#project" ? <span style={{ color: "grey" }}>Project</span> : <span style={{ color: "white" }}>Project</span>}
            </MenuItem>
          </ScrollBar>
        </HashLink>
      </ScrollBarBox>
    </Menu >
  );
}

export default SideMenu;