import React from 'react';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import { AppBar,Toolbar, Avatar } from '@material-ui/core';
import  SvgIcon  from '@material-ui/core/SvgIcon';
import { Bell } from 'react-feather'; 



const useStyles = makeStyles({
    appBar:{
        boxShadow: 'none'
    },
    img:{
        maxHeight: 55
    },
    grow:{
        flexGrow: 1
    },
    userSection:{
        display: 'flex',
        alignItems: 'center'
    },
    button:{
        marginRight:10
    },
    bell:{
        marginRight: 10
    }
});

function Header() {
    const classes = useStyles()
    return(
        <AppBar className={classes.appBar} position='fixed' color='inherit'>
            <Toolbar>
                <img className={classes.img} src='/images/logo.png' alt="logo"/>
           
                    
                
                <div className={classes.grow}></div>
                <div className={classes.userSection}>
                    <Button className={classes.button} variant="contained" color="primary">Novo Teste</Button>
                     <SvgIcon className={classes.bell}>
                         <Bell></Bell>
                     </SvgIcon>
                     <Avatar alt="Remy Sharp" src="" />

                </div>
               

                {/* <div>
                    <span>Conecta Dev</span>
                </div>
                <div>
                    <Button color='primary' variant='contained'>Novo Post</Button>
                    <span>Img1</span>
                    <span>Img1</span>
                </div> */}
            </Toolbar>
        </AppBar>
    )
}
export default Header;