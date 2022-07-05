import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

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
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div: first-child,
  div: last-child {
    grid-column: span 2;
  }
`;
const Box = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 100px;
  height: 10vw;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
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

function Box3() {
  const [id, setId] = useState<null | string>(null);
 
  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((i) =>
          <Box onClick={() => setId(i)} key={i} layoutId={i}
          />
        )}
      </Grid>
      <AnimatePresence>
        {id ? (
          <OverLay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
            <Box layoutId={id} style={{ width: 400, height: 200 }} />
          </OverLay>
        ) : null
        }
      </AnimatePresence>
    </Wrapper>
  );
}

export default Box3;
