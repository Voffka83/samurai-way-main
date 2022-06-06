import React from 'react';
import s from './Post/Post.module.css';
import {Post} from "./Post/Post";


export let MyPost = (props) => {


    let postElement = props.postData.map(t => <Post message={t.message} like={t.like}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
        newPostElement.current.value = '';
    }

    return <div className={s.item}>
        <div className={s.item}>
            <div><textarea ref={newPostElement}></textarea></div>
            <div>
                <button className={s.button} onClick={addPost}> Add post immediately</button>
            </div>
        </div>
        <div>
            <h2 className={s.item}>My posts</h2>
            {postElement}
        </div>
    </div>
}