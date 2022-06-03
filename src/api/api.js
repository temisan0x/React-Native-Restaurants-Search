import axios from "axios";

export default axios.create({
    baseURL: "https://worldwide-restaurants.p.rapidapi.com/search",
    headers: {
        Authorization: "Bearer 62578e7e6fmsh163a0b064a9ef1ep1a2780jsn74440de44c22"
    },
});