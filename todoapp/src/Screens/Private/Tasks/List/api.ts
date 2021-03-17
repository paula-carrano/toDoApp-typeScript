import { api } from "../../../../utils";
import { objectToArray } from "../../../../helpers";

const get = async () => {
    const response = await api.get("/tasks.json");
    return objectToArray(response.data);
};

const post = () => {
    return null;
};

const like = () => { };

export const tasksApi = { get, post, like };