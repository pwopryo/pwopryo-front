import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FindHome from "./pages/FindHome";

function App() {

  return (
  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/find-home" element={<FindHome />} />
      </Routes>


  )
}

export default App
