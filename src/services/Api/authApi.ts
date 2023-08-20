import http from "../httpService";
const apiUrl = process.env.REACT_APP_API_URL;

export const getAllBranch = () : Promise<any>  => {
    return http.get(`https://jsonplaceholder.typicode.com/users`);
};