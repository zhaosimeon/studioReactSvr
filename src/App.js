import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {AllPost} from './Posts/AllPost';
import {PostForm} from './Posts/PostForm';
import ReactDefualt from './ReactDefault';
class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="panel-group">
                    <div className="panel panel-primary">
                        <div className="panel-heading text-center">
                            <h3>Post It</h3>
                        </div>
                    </div>
                    <div className="panel panel-success">
                        <div className="panel-body text-center" >
                            <PostForm />

                        </div>
                    </div>
                    <div className="panel panel-success">
                        <div className="panel-body text-center" >

                            <AllPost />
                        </div>
                    </div>
                    <div className="panel panel-info">
                        <div className="panel-footer">
                            <ReactDefualt />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;