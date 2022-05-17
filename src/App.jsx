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


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/photo' component={Photo}/>
                    <Route path='/news' component={News}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;



