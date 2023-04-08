import { Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
const RootNavigation = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
    </Routes>
  );
};

export default RootNavigation;
