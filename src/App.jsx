import { Link, Route, Routes } from "react-router-dom"
import Home from "./Pages/home"
import About from "./Pages/about"
import Destination from "./Pages/destination"
import NotFound from "./Pages/NotFound"
import Navbar from "./components/navbar"
import Register from "./Pages/register"
import ContactUs from "./Pages/contactus"
import Packages from "./Pages/packages"

const App = () => {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;

