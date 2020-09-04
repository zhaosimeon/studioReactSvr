//ADD NEW POST
import React, { useState } from 'react';
import ApiSave from '../ApiSave';
import { nanoid } from '@reduxjs/toolkit';
import { ADD_POST } from './postSlice';
import { useSelector, useDispatch } from 'react-redux';

export const AddPost = () => {
    const api = new ApiSave();
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const onTitleChanged = e => setTitle(e.target.value)
    const onAuthorChanged = e => setAuthor(e.target.value)
    const onMessageChanged = e => setMessage(e.target.value)

    const handleSubmit = e => {
        e.preventDefault();
        
        const data = {
            id: nanoid(),
            author,
            title,
            message,
            editing: false
        }
        api.insert(data).then(
            retData => {
                dispatch(ADD_POST({ data: data }));
                setTitle('');
                setAuthor('');
                setMessage('');
            }
        );

    }
    return (<div className="Container">
        <h6 > Create Post </h6>
        <form>
            <input name="author"
                required type="text"
                value={author}
                onChange={onAuthorChanged}
                placeholder="Enter Post Author" />
            <input name="title"
                required type="text"
                value={title}
                onChange={onTitleChanged}
                placeholder="Enter Post Title" />
            <br />
            <textarea required rows="3" cols="29"
                value={message}
                onChange={onMessageChanged}
                placeholder="Enter Post Message" />
            <br />
            <button type="button" className="btn btn-primary" onClick={handleSubmit}> Post </button>
        </form>
    </div>
    )
}
