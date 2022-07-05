import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";

interface IRouterProps { }

function Router({ }: IRouterProps) {
  return (
    <Routes>
      <Route path="/" element={<Box1 />} />
      <Route path="Box2" element={<Box2 />} />
      <Route path="Box3" element={<Box3 />} />
    </Routes>
  );
}

export default Router;