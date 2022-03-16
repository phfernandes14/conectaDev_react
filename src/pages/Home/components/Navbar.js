import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Paper, Button, ListItem, ListSubheader, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    root:{
        padding: theme.spacing(2),
        width: 275,
        marginRight : theme.spacing(2)
        
    },
    button:{
        width: '100%'
    }
}))

const tags = [
    { id:1 , name: 'node'},
    { id:2 , name: 'react'},
    { id:3 , name: 'json'},
    { id:4 , name: 'nosql'},
    { id:5 , name: 'mongo'},
    { id:6 , name: 'api'}
]

export default function Navbar(){
    const classes = useStyles();
    return(
        <Paper className={classes.root} >
            <Button className={classes.root} variant="outlined" color="secondary">Registrar Gratis</Button>
            <ListSubheader>{'Tags em Alta'}</ListSubheader>
            { tags.map((item)=>(
                <ListItem
                dense button key={`item-${item.id}-${item.name}`}>
                <ListItemText
                    primary={`#${item.name}`}
                />
            </ListItem>
            ) ) 
            }       
            <ListItem button>Exibir mais Tags </ListItem>
        </Paper>
    )
}