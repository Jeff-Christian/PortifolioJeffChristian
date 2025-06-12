import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

import Body from "./Components/Body";
import Works from "./Routes/Works";
import Weseeyou from "./Pages/Wesseeyou";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Works" element={<Works />} />
          <Route path="/Works/Weseeyou" element={<Weseeyou />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
