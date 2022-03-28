import React from 'react';
import s from './Nav.module.css';


export const Nav = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <a>Profile</a>
        </div>
        <div className={s.item}>
            <a>Messeges</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Foto</a>
        </div>
        <div className={s.item}>
            <a href="">News</a>
        </div>
    </nav>

}