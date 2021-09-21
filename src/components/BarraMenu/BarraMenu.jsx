import React from 'react';
import "./estilo.css";

function BarraMenu() {
    
    return ( 
        <div className="w3-top">
            <div className="w3-bar w3-white w3-wide w3-padding w3-card">
                <a href="#home" className="w3-bar-item w3-button"><b>DL </b>| Digo Lentes</a>
                <div className="w3-right w3-hide-small">
                    <a href="#armacoes" className="w3-bar-item w3-button">Armações</a>
                    <a href="#lentes" className="w3-bar-item w3-button">Lentes</a>
                    <a href="#depoimentos" className="w3-bar-item w3-button">Depoimentos</a>
                    <a href="#contact" className="w3-bar-item w3-button">Orçamentos</a>
                </div>
            </div>
        </div>
     );
}

export default BarraMenu;
