import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost = {addPost}/>
            {/*<App state={state} addPost = {()=>{ alert ('i am stupeed')}}/>*/}
        </BrowserRouter>, document.getElementById('root')


    )
    ;

}

