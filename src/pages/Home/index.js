import React from 'react';
import { makeStyles, Container, Box } from '@material-ui/core';

import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import Feed from './components/Feed.js';

//import './style.css' 

const useStyles = makeStyles({
    root:{
        display: 'flex',
        flexDirection: 'column'
    },
    main:{
        height: '100vh',
        display: 'flex',
        width: '1280px',
        margin: '0 auto'
    },
    toolbar:{
        minHeight: 64
    }
})

export default function Home(){
    const classes = useStyles();

    return(
    <div className={classes.root}>
        <Header />
        <div className={classes.toolbar}></div>
        <main className={classes.main}>
            <Navbar/>
            <Feed/>   
         </main>
    </div>
    )
}