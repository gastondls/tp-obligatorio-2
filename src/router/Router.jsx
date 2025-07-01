import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registro from "../components/Registro/Registro.jsx";
import Home from "../Home.jsx";
import Login from "../components/Login/Login.jsx";


const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/registro" element={<Registro/>} />
        </Routes>

        </BrowserRouter>

    )
}

export { Router }