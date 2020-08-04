import ApiSave from '../ApiSave';
const baseurl = 'http://localhost:8080';

const api = ApiSave(baseurl);
const postReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            api.insert(action.data);
            return state.concat([action.data]);
        case 'DELETE_POST':
            return state.filter((post) => post.id !== action.id);
        case 'EDIT_POST':
            //return state.map((post) => { post.editing = (post.id === action.id) ? !post.editing : post.editing; return post });
            return state.map((post) => post.id === action.id ? { ...post, editing: !post.editing } : post);
        case 'UPDATE_POST':
            return state.map((post) => {
                if (post.id === action.id) {
                    const foundPost ={
                        id: action.id,
                        author: action.data.author,
                        title: action.data.title,
                        message: action.data.message,
                        editing: !post.editing
                    };
                    api.update(foundPost);
                    return foundPost;
                } else return post;
            });
        default:
            return state;
    }
}
export default postReducer;