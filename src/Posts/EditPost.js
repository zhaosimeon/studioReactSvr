//EDIT POST
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { useHistory } from 'react-router-dom'
import ApiSave from '../ApiSave';
import { UPDATE_POST } from './postSlice'

export const EditPost = (props) => {
    const api = new ApiSave();
    const post = useSelector(state => state.posts.find(post => post.id === props.postid));

    const [title, setTitle] = useState(post.title);
    const [author, setAuthor] = useState(post.author);
    const [message, setMessage] = useState(post.message);
    const dispatch = useDispatch();
    const onTitleChanged = e => setTitle(e.target.value);
    const onAuthorChanged = e => setAuthor(e.target.value);
    const onMessageChanged = e => setMessage(e.target.value);

    const handleUpdate = () => {
        // e.preventDefault();
        const data = {
            id: post.id,
            author,
            title,
            message
        }
        api.update(data).then(
            retData => dispatch(UPDATE_POST({
                id: post.id,
                data: retData
            }))
        );
    };

    return (
        <section className="Container">
            <form >
                <input name="author" required type="text" value={author} onChange={onAuthorChanged}
                    placeholder="Enter Post Author" />

                <input name="title" required type="text" value={title} onChange={onTitleChanged}
                    placeholder="Enter Post Title" />
                <br />
                <textarea name="message" required rows="5" value={message} onChange={onMessageChanged}
                    cols="28" placeholder="Enter Post" />
                <br />
            </form>
            <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
            <button className="btn btn-default">Cancel</button>
        </section>
    );
}

