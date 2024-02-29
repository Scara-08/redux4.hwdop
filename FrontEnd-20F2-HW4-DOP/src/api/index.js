import axios from "axios";
import { useParams } from "react-router-dom";

const instance = axios.create({
    baseURL: "http://jsonplaceholder.typicode.com"
});

// const params = useParams();

const getUsers = () => instance.get("/users");
const getPosts = () => instance.get("/posts");
// const getPostsDetails = () => instance.get(`/posts/${params.id}`)

const api = {
    getUsers,
    getPosts,
};

export default api;