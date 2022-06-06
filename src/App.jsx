import './App.css';
import React from 'react';
import {Header} from "./Components/Header/Header";
import {Profile} from "./Components/Profile/Profile";
import {Nav} from "./Components/Nav/Nav";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./Components/Music/Music";
import {Photo} from "./Components/Photo/Photo";
import {News} from "./Components/News/News";

function App(props) {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">

                    <Route path='/profile' render={() => <Profile
                        state={props.state.profilePage}
                        addPost={props.addPost}/>}/>

                    <Route path='/dialogs' render={() => <Dialogs
                        state={props.state.messagesPage}

                    />}/>

                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/photo' render={() => <Photo/>}/>
                    <Route path='/news' render={() => <News/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;



