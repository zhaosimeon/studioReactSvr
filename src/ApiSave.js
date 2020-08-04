import axios from 'axios';
const ApiSave = (baseurl) => {    
    
    const retrieveAll = async () => {
        const res = await axios.get(`${baseurl}/posts`);
        return res.data;
    };

    const update = async (post) => {
        const res = await axios.put(`${baseurl}/posts/${post.id}`, post);
        return res.data;
    };

    const insert = async (post) => {
        const res = await axios.post(`${baseurl}/posts`, post);
        return res.data;
    };
    return {
        retrieveAll,
        update,
        insert
    }

};

export default ApiSave;