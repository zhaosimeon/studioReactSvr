//EDIT POST
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ApiSave from '../ApiSave';
const api = new ApiSave();

class EditPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.post.title,
            author: props.post.author,
            message: props.post.message
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { title, author, message } = this.state;
        const data = {
            id: this.props.post.id,
            author,
            title,
            message
        }
        api.update(data).then(
            retData =>this.props.dispatch({
                type: 'UPDATE_POST',
                id: this.props.post.id,
                data: retData
            })
        );
        

    }

    render() {
        return (
            <div className="Container">
                <form >
                    <input name="author" required type="text" value={this.state.author} onChange={this.handleChange}
                        placeholder="Enter Post Author" />
                    
                    <input name="title" required type="text" value={this.state.title} onChange={this.handleChange}
                        placeholder="Enter Post Title" />
                    <br />
                    <textarea name="message" required rows="5" value={this.state.message} onChange={this.handleChange}
                        cols="28" placeholder="Enter Post" />
                    <br />
                    <button  className ="btn btn-primary" onClick={this.handleSubmit}>Update</button>
                    <button  className ="btn btn-default">Cancel</button>
                </form>
            </div>
        );
    }
}

export default connect()(EditPost);