//EDIT POST
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
            author,
            title,
            message
        }
        this.props.dispatch({
            type: 'UPDATE_POST',
            id: this.props.post.id,
            data
        });

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="author" required type="text" value={this.state.author} onChange={this.handleChange}
                        placeholder="Enter Post Author" />
                    <br /><br />
                    <input name="title" required type="text" value={this.state.title} onChange={this.handleChange}
                        placeholder="Enter Post Title" />
                    <br /><br />
                    <textarea name="message" required rows="5" value={this.state.message} onChange={this.handleChange}
                        cols="28" placeholder="Enter Post" />
                    <br /><br />
                    <button>Update Post</button>
                </form>
            </div>
        );
    }
}

export default connect()(EditPost);