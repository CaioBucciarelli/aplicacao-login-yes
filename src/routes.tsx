import {Routes, Route} from "react-router-dom";
import Login from "./pages/login"
import Recuperar from "./pages/recuperar/";
import Redefinir from "./pages/redefinir";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/recuperar" element={<Recuperar/>}/>
      <Route path="/redefinir" element={<Redefinir/>}/>
    </Routes>
  )
}

export default MainRoutes;