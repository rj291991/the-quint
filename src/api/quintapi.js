import axios from "axios";

export const fetchStories = () => {
    // var config = {
    //     headers: {'Access-Control-Allow-Origin': '*'}
    // };
    // return axios
    //     .get(`https://www.thequint.com/api/v1/stories`,config)
    //     .then((res) => res)
    //     .catch((err) => err.response);

    return axios
        .get(`http://localhost:3000/stories.json`)
        .then((res) => res)
        .catch((err) => err.response);
};