const title = document.querySelector(".postTitle");
const content = document.querySelector(".postContent");
const username = document.querySelector(".postUser");
const blogPost = document.querySelector(".blogPost");

//get existing array of blog form
const postArray = JSON.parse(localStorage.getItem("blogPosts")) || [];

if ()