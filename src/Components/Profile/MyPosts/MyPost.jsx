import React from 'react';
import s from './Post/Post.module.css';
import {Post} from "./Post/Post";


export let MyPost = () => {
    return <div className={s.post}>
        <div>
            My post
            <Post message='Hi, how are you?' like={15}/>
            <Post message='It is my first post' like={23}/>
            <Post message='You are not alone' like={222}/>
        </div>
    </div>
}