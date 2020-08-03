//LIST POSTS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditPost from './EditPost'
import Post from './Post';
class AllPost extends Component {
    render() {
        return (
            <div className="App">
                <h1 className="navbar">All Posts</h1>
                {this.props.posts.map(
                    (post) => (
                    <div>
                        {post.editing ? <EditPost post={post} key={post.id} /> :
                            <Post key={post.id} post={post} />}
                    </div>)
                    )

                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(AllPost);
