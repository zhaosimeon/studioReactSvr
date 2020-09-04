//LIST POSTS
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { EditPost } from './EditPost'
import { Post } from './Post';
import ApiSave from '../ApiSave';
import { RET_POST_LIST } from './postSlice'
const loadStatus = { loaded: false };

export const AllPost = () => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const api = new ApiSave();

    useEffect(() => {
        if (!loadStatus.loaded) {
            api.retrieveAll().then(externalData => {
                dispatch(RET_POST_LIST({
                    data: externalData
                }));
            });
            loadStatus.loaded = true;
        }

    });
    const renderedPosts = posts.map(post => (
        <div>
            {post.editing ? <EditPost postid={post.id} key={post.id} /> :
                <Post key={post.id} postid={post.id} />}
        </div>)
    );
    return (
        <div className="Container">
            <h4>All Posts</h4>
            {renderedPosts}
        </div>
    )
}