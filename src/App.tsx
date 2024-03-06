import Navbar from "./components/ui/navbar/Navbar";
import "./global.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
