import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registro from "../components/Registro/Registro.jsx";
import Home from "../Home.jsx";
import Login from "../components/Login/Login.jsx";
import Dashboard from "../components/Dashboard/Dashboard.jsx";
import {EditProduct} from "../components/EditProduct/EditProduct.jsx";
import ProductoDetalle from "../components/Productodetalle/ProductoDetalle.jsx";
import Contacto from "../components/Contacto/Contacto.jsx";


const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/editar-producto/:id" element={<EditProduct/>} />
            <Route path="/producto/:id" element={<ProductoDetalle />} />
            <Route path="/registro" element={<Registro/>} />
            <Route path="/contacto" element={<Contacto/>} />
        </Routes>

        </BrowserRouter>

    )
}

export { Router }