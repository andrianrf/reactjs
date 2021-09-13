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


const Post = (endpoint, data) => {
    const promise = new Promise((resolve, reject) => {

fetch(endpoint, { 
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
   })
  .then((res) => {
    resolve(res);
  },(err) => {
    reject(err);
});
    })
    return promise;


}


const Delete = (endpoint) => {
    const promise = new Promise((resolve, reject) => {

fetch(endpoint, { 
    method: 'DELETE'
   })
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

fetch(endpoint, { 
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
   })
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