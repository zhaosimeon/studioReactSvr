//ADD NEW POST
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ApiSave from '../ApiSave';

const api = new ApiSave();
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
        api.insert(data).then(
            retData => {
                this.props.dispatch({
                    type: 'ADD_POST',
                    data: retData
                });
                this.setState({ author: '', title: '', message: '' });
            }
        );
        
    }
    render() {
        return (<div className="Container">
            <h6 > Create Post </h6>
            <form onSubmit={this.handleSubmit} >
                <input name="author"
                    required type="text"
                    value={this.state.author}
                    onChange={this.handleChange}
                    placeholder="Enter Post Author" />                
                <input name="title"
                    required type="text"
                    value={this.state.title}
                    onChange={this.handleChange}
                    placeholder="Enter Post Title" />
                    <br />
                <textarea required rows="3" cols="29"
                    name="message" value={this.state.message}
                    onChange={this.handleChange}
                    placeholder="Enter Post Message" />
                    <br />
                <button className="btn btn-primary"> Post </button>
            </form>
        </div>
        );
    }
}

export default connect()(PostForm);