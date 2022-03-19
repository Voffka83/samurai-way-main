import React from 'react';
import classes from './Nav.module.css';


export const Nav = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <a>Profile</a>
        </div>
        <div className={classes.item}>
            <a>Messeges</a>
        </div>
        <div className={classes.item}>
            <a>Music</a>
        </div>
        <div className={classes.item}>
            <a>Foto</a>
        </div>
        <div className={classes.item}>
            <a href="">News</a>
        </div>
    </nav>

}