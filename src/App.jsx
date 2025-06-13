import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

import Body from "./Components/Body";
import Works from "./Routes/Works";
import Weseeyou from "./Pages/Wesseeyou";
import Essen from "./Pages/essen";
import Emocta from "./Pages/Emocta";
import OwlBlog from "./Pages/OwlBlog";
import AnimeTracker from "./Pages/AnimeTracker";
import Sentir from "./Pages/Sentir";
import Alemdomapa from "./Pages/Alemdomapa";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Works" element={<Works />} />
          <Route path="/Works/Weseeyou" element={<Weseeyou />} />
          <Route path="/Works/Essen" element={<Essen />} />
          <Route path="/Works/Emocta" element={<Emocta />} />
          <Route path="/Works/OwlBlog" element={<OwlBlog />} />
          <Route path="/Works/AnimeTracker" element={<AnimeTracker />} />
          <Route path="/Works/Sentir" element={<Sentir />} />
          <Route path="/Works/AlemDoMapa" element={<Alemdomapa />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
