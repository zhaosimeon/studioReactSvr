import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import AllPost from './Posts/AllPost';
import PostForm from './Posts/PostForm';
import ReactDefualt from './ReactDefault';
class App extends Component {
    render() {
        return (
            <div class="container">
                <div class="panel-group">
                    <div class="panel panel-primary">
                        <div class="panel-heading text-center">
                            <h3>Post It</h3>
                        </div>
                    </div>
                    <div class="panel panel-success">
                        <div class="panel-body text-center" >
                            <PostForm />

                        </div>
                    </div>
                    <div class="panel panel-success">
                        <div class="panel-body text-center" >

                            <AllPost />
                        </div>
                    </div>
                    <div class="panel panel-info">
                        <div class="panel-footer">
                            <ReactDefualt />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;