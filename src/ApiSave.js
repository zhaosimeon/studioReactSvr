import axios from 'axios';
const baseurl = 'http://localhost:8080';

export default class ApiSave {
    constructor() {
        this.baseurl = baseurl;
    }
    retrieveAll = async () => {
        const res = await axios.get(`${this.baseurl}/posts`);
        return res.data;
    }

    update = async (post) => {
        const res = await axios.put(`${this.baseurl}/posts/${post.id}`, post);
        return res.data;
    }

    delete = async (postid) => {
        const res = await axios.delete(`${this.baseurl}/posts/${postid}`);
        return res.data;
    }

    insert = async (post) => {
        const res = await axios.post(`${this.baseurl}/posts`, post);
        return res.data;
    }
}