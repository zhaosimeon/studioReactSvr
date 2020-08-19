//DISPAY/view A POST
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ApiSave from '../ApiSave';
const api = new ApiSave();

class Post extends Component {
    delete = () => {
        const postid = this.props.post.id;
        api.delete(postid).then(
            retData =>{
                this.props.dispatch({ type: 'DELETE_POST', id: postid });
            }
        );
        
    }
    render() {
        return (<div lassName="post" >
            <h6> {this.props.post.author} </h6>
            <h6> {this.props.post.title} </h6>
            <p> {this.props.post.message} </p>
            <button class="btn btn-primary"
                onClick={
                    () => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })} > Edit </button>
            <button class="btn btn-danger"
                onClick={() => this.delete()} > Delete </button>
        </div>
        );
    }
}
export default connect()(Post);