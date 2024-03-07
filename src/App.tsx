import Navbar from "./components/ui/navbar/Navbar";
import "./global.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AddVideo from "./pages/add-video/AddVideo";
import EditVideo from "./pages/edit-video/EditVideo";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-video" element={<AddVideo />} />
        <Route path="/edit-video/:videoId" element={<EditVideo />} />
      </Routes>
    </div>
  );
};

export default App;
