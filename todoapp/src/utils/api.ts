import axios from "axios";

const api = axios.create({
    baseURL: "https://todo-app-7e18b-default-rtdb.firebaseio.com/",
});

export { api };