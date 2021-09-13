import axios from "axios";

const beLocalUrl = "http://localhost:3004";
const beInetUrl = "https://jsonplaceholder.typicode.com";

const Get = (endpoint) => {
    const promise = new Promise((resolve, reject) => {
      fetch(`${endpoint}`)
      .then(Response => Response.json())
      .then((result) => {
            resolve(result);
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}

const GetV2 = (endpoint) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${endpoint}`)
        .then((result) => {
            resolve(result.data);
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}

const getPosts = () => Get(beLocalUrl+'/posts?_sort=id&_order=desc');
const getComments = () => Get(beInetUrl+'/comments');

const ApiService = {
    getPosts,
    getComments
}

export default ApiService;