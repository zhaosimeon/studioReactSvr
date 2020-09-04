//DISPAY/view A POST
import React, { Component } from 'react';
import ApiSave from '../ApiSave';
import {DELETE_POST, EDIT_POST} from './postSlice'
import { useSelector, useDispatch } from 'react-redux';

export const Post = (props) => {
    const post = useSelector(state => state.posts.find(post => post.id === props.postid));
    const api = new ApiSave();
    const dispatch = useDispatch();
    const  deletePost = () => {        
        api.delete(post.id).then(
            retData => {
                dispatch(DELETE_POST({id: post.id }));
            }
        );

    };

    return (<div className="post" >
        <h6> {post.author} </h6>
        <h6> {post.title} </h6>
        <p> {post.message} </p>
        <button className="btn btn-primary"
            onClick={() => dispatch(EDIT_POST({id: post.id }))} >
                 Edit </button>
        <button className="btn btn-danger"
            onClick={() => deletePost()} > Delete </button>
    </div>
    );

}
