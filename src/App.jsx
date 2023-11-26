import { Link, Route, Routes } from "react-router-dom"
import Home from "./Pages/home"
import About from "./Pages/about"
import Destination from "./Pages/destination"
import NotFound from "./Pages/NotFound"
import Navbar from "./components/navbar"

const App = () => {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;

