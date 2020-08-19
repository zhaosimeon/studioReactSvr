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
        return (<div >
            <h6 > Create Post </h6>
            <form onSubmit={this.handleSubmit} >
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
                <button class="btn btn-primary"> Post </button>
            </form>
        </div>
        );
    }
}

export default connect()(PostForm);