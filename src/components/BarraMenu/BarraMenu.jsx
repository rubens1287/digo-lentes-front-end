import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import "./estilo.css";



function BarraMenu() {
    
    return ( 
        <AppBar position="relative">
        <Toolbar className="cabecalho">
        </Toolbar>
        </AppBar>
     );
}

export default BarraMenu;
