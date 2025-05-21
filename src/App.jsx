import "./App.css";
import Body from "./Components/Body";
import { BrowserRouter, Routes, Route } from "react-router";
import Works from "./Routes/Works";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Works" element={<Works />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
