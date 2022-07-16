import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { url } from "inspector";
import { useState } from "react";
import styled from "styled-components";
import ProjectContent from "./ProjectContent";

const Wrapper = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #191717;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 50vw;
  gap: 10px;
`;
const Box = styled(motion.div)`
  display: flex;
  flex-direction: column;
  top: 100px;
  height: 15vw;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
 `;

const InnerBox = styled.div`
  padding: 22vh;
`;

const OverLay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const More = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  padding: 10px;
`;

const projectList = [
  {
    "id": "1",
    "name": "Mood spot",
    "url": "https://github.com/yugykim/hackathon",
    "expanation": "adfdsfdsgsdgsdgsdg",
    "techStack": ["java", "node"]
  },
  {
    "id": "2",
    "name": "Momentum Chrome",
    "url": "https://github.com/yugykim/momentum_chrome",
    "expanation": "sdgsdgsdgsdgsdgsdgsdg",
    "techStack": ["java", "node"]
  },
  {
    "id": "3",
    "name": "Todo list",
    "url": "https://github.com/yugykim/todo-react",
    "expanation": "dsgsdgsdgsdgsgsgsg",
    "techStack": ["java", "node"]
  },
  {
    "id": "4",
    "name": "Nasa picture viwer",
    "url": "https://github.com/yugykim/nasa-picture-viewer",
    "expanation": "sdgsgsdgsgsgsgsdgsgsdgsgsgsg",
    "techStack": ["java", "node"]
  }
];

interface IProejct {
  "id": string,
  "name": string,
  "url": string,
  "expanation": string,
  "techStack": string[]
}

const projectVariants = {
  normal: {
    scale: 0.8,
  },
  active: {
    scale: 1.05,
  },
};

function Box3() {
  const [project, setProject] = useState<IProejct>();
  const [id, setId] = useState<null | string>();

  return (
    <Wrapper>
      <Grid>
        {projectList.map((i) =>
          <Box
            className="container"
            variants={projectVariants}
            whileHover="active"
            key={i.id}
            layoutId={i.id}
          >
            <ProjectInfo>
            <p>{i.name}</p>
            <br />
            <a href={i.url}><FontAwesomeIcon style={{ "marginRight": "10px", "color": "black" }} icon={faGithub} /></a>
            </ProjectInfo>
            <More
              onClick={() => {
                setId(i.id)
                setProject(i)
              }}
            >more</More>
          </Box>
        )}
      </Grid>
      <AnimatePresence>
        {id ? (
          <OverLay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
            <Box
              layoutId={id}
              style={{ width: 500, height: 500 }}
            >
              <InnerBox>
                <p>{project?.name}</p>
                <p>{project?.expanation}</p>
                {project?.techStack.map(i => <p>{i}</p>)}
              </InnerBox>
            </Box>
          </OverLay>
        ) : null
        }
      </AnimatePresence>
    </Wrapper>
  );
}

export default Box3;
