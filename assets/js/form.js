const userNameInput = document.querySelector("#userName");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const submitBtn = document.querySelector("#submitBtn");

//Submit button
submitBtn.addEventListener("click", function(e) {
    e.preventDefault();

    //create blog post
    const blogPost = {
        username: userNameInput.value,
        title: titleInput.value,
        content: contentInput.value,
    };

    //if form is left empty
    if (userNameInput.value === "") {
        alert("Please enter a username.")
    } else if (titleInput.value === "") {
        alert("Please enter a title.");
    } else if (contentInput.value === "") {
        alert("Please enter in content.")
    } else {

        //Stringify blogPost variable
        const blogPostJSON = JSON.stringify(blogPost);

        //store blogPost input
        localStorage.setItem("blogPost", blogPostJSON);

        //page changes from index.html to blog.html
        window.location.href = "blog.html";

        //clear input fields once submit button is clicked
        userNameInput.value = "";
        titleInput.value = "";
        contentInput.value = "";
    }

})