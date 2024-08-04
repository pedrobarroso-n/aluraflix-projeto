import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import NovoVideo from "pages/NovoVideo";
import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";


function PaginaModelo() {    
    return (
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route path="/" element={<Home />} />   
                <Route path="/novovideo" element={<NovoVideo />} />
            </Routes>
            <Rodape />
        </BrowserRouter>
    )
}

export default PaginaModelo;