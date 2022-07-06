import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Options from "./pages/Options";
import Ranking from "./pages/Ranking";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/options" element={<Options />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
