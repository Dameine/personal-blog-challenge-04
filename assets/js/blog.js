const blogPost = document.querySelector(".blogPost");

//get existing array of blog form
const postArray = JSON.parse(localStorage.getItem("blogPost")) || [];

//checks array list
if (postArray.length === 0){
    alert("No blog post yet")
} else {
    //goes through array
    postArray.forEach((post) => {

        //dynamic div created for post
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");

        //html for div
        postDiv.innerHTML = `
        <div>
          <h2 class="postTitle">${post.title}</h2>
          <p class="postContent">${post.content}</p>
        </div>
        <p>Posted By: <span class="postUser">${post.username}</span></p>
      `;
  
      // appends the posts to the blog post section
      blogPost.appendChild(postDiv);
    });
}