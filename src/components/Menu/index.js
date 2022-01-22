import React from "react";
import Logo from "../../assets/img/logo.png"
import Button from "../Button";
//import ButtonLink from "./componentes/ButtonLink";
import './menu.css';

function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="Logo RMVIDEOS"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                NOVO VIDEO
            </Button>
        </nav>
    
        );
}


export default Menu;