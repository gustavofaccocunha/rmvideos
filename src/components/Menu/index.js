import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../../assets/img/logo.png";
import Button from "../Button";
//import ButtonLink from "./componentes/ButtonLink";
import './menu.css';

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
            <img className="Logo" src={Logo} alt="Logo RMVIDEOS"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="cadastro/video">
                NOVO VIDEO
            </Button>
        </nav>
    
        );
}


export default Menu;