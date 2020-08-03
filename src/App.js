import React, { Component } from 'react';
import './App.css';
import AllPost from './Posts/AllPost';
import PostForm from './Posts/PostForm';
import ReactDefualt from './ReactDefault';
class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="navbar" >
                    <PostForm />
                    <AllPost />
                </div>
                <ReactDefualt />
            </React.Fragment>
        );
    }
}

export default App;