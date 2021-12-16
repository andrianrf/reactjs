import axios from "axios";

const beLocalUrl = "http://localhost:3004";
const beInetUrl = "https://jsonplaceholder.typicode.com";

const Get = (endpoint) => {
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

const Post = (endpoint, data) => {
    const promise = new Promise((resolve, reject) => {

        axios.post(endpoint, data)
        .then((res) => {
          resolve(res);
        },(err) => {
            reject(err);
        }
        )

    })
    return promise;


}

const Delete = (endpoint) => {
    const promise = new Promise((resolve, reject) => {

        axios.delete(endpoint)
        .then((res) => {
            resolve(res);
          },(err) => {
            reject(err);
        });

    })
    return promise;

}

const Put = (endpoint, data) => {
    const promise = new Promise((resolve, reject) => {

        axios.put(endpoint, data)
        .then((res) => {
          resolve(res);
        },(err) => {
          reject(err);
      });

})
return promise;

}


const getPosts = () => Get(beLocalUrl+'/posts?_sort=id&_order=desc');
const getComments = () => Get(beInetUrl+'/comments');

const postPosts = (data) => Post(beLocalUrl+'/posts', data);
const deletePost = (id) => Delete(beLocalUrl+'/posts/'+id);
const putPost = (id, data) => Put(beLocalUrl+'/posts/'+id, data);

const ApiService = {
    getPosts,
    getComments,
    postPosts,
    deletePost,
    putPost
}

export default ApiService;