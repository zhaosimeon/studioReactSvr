//ADD NEW POST
import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            message: ''
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
            id: new Date(),
            author,
            title,
            message,
            editing: false
        }

        this.props.dispatch({
            type: 'ADD_POST',
            data
        });
        this.setState({ author: '', title: '', message: '' });
    }
    render() {
        return (<div >
            <h1 > Create Post </h1> <form onSubmit={this.handleSubmit} >
                <input name="author"
                    required type="text"
                    value={this.state.author}
                    onChange={this.handleChange}
                    placeholder="Enter Post Author" />
                <br /> < br />
                <input name="title"
                    required type="text"
                    value={this.state.title}
                    onChange={this.handleChange}
                    placeholder="Enter Post Title" />
                <br /> < br />
                <textarea required rows="5" cols="28"                
                    name="message" value={this.state.message}
                    onChange={this.handleChange}
                    placeholder="Enter Post Message" />
                <br /> < br />
                <button > Post </button> </form>
        </div>
        );
    }
}
export default connect()(PostForm);