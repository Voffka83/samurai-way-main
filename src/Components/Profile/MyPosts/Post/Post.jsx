import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message: string,
    like: number
}


export let Post = (props:PostPropsType) => {

    return (
        <div className={s.item}>
            <img src="https://img.lovepik.com/element/45001/3052.png_860.png" alt="img"/>
            {props.message}
            <div className={s.button}>
                <button>Like</button>{props.like}
            </div>
        </div>
    )
}