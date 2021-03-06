import './App.css';
import React from 'react';
import Header from './components/Header/Header.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import ContentProfile from "./components/ContentProfile/ContentProfile";
import Messages from './components/Dialogs/Messages';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";


const App = (props) => {

    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navigation/>

            <div  className='app-wrapper-content'>
                <Routes>
                    <Route path="/messages/*" element= {<Messages dialogs={props.state.messagesPage.dialogsData}
                                                                  messages={props.state.messagesPage.messagesData} />}/>
                    <Route path="/profile" element= {<ContentProfile posts={props.state.profilePage.posts}
                                                                     newPostText={props.state.profilePage.newPostText}
                                                                     updateNewPostText={props.updateNewPostText}
                                                                     addPost={props.addPost} />}/>
                    <Route path="/news" element= {<News/>}/>
                    <Route path="/music" element= {<Music />}/>
                    <Route path="/settings" element= {<Settings />}/>

                </Routes>
        </div>

        </div>
        </BrowserRouter>
    );
}

export default App;
