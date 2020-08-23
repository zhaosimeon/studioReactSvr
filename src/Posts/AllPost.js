//LIST POSTS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditPost from './EditPost'
import Post from './Post';
import ApiSave from '../ApiSave';
const api = new ApiSave();
class AllPost extends Component {

    async componentDidMount() {
        const externalData = await api.retrieveAll();
        this.props.dispatch({
            type: 'RET_POST_LIST',
            data: externalData
        });
    }
    render() {
        return (
            <div className="Container">
                <h4>All Posts</h4>
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
