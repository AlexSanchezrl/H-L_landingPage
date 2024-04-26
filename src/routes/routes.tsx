import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "../pages/Home";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FloatingBtn from "../components/FloatingBtn";
import RoutesAppPath from "./routesApp";
import Blog from "../pages/Blog";

function RoutesPath() {

  const routePATH = "/H-L_landingPage";
  
  return (
    <>
      <NavBar/>
      <BrowserRouter>
      <FloatingBtn/>
          <Routes>
              <Route path={routePATH} element={<Home/>}/>
              <Route path={`${routePATH}/blog`} element={<Blog/>}/>
          </Routes>
          <RoutesAppPath path={routePATH}/>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default RoutesPath