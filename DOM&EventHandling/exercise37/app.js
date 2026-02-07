const postForm = document.querySelector("#post-form");
const titleInput = document.querySelector("#title-input");
const imageInput = document.querySelector("#image-input");
const contentInput = document.querySelector("#content-input");
const postsList = document.querySelector("#posts-list");

document.addEventListener("DOMContentLoaded", loadPosts);

postForm.addEventListener("submit", addPost);

// LOAD POSTS

function loadPosts() {
  const posts = getPosts();
  posts.forEach(post => addPostToDOM(post));
}


// ADD POST
function addPost(e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const image = imageInput.value.trim();
  const content = contentInput.value.trim();

  if (title !== "" && content !== "") {
    const post = {
      id: Date.now(),
      title: title,
      image: image,
      content: content
    };

    addPostToDOM(post);
    savePostToLocalStorage(post);

    titleInput.value = "";
    imageInput.value = "";
    contentInput.value = "";
  }
}


// ADD POST TO DOM
function addPostToDOM(post) {
  const div = document.createElement("div");
  div.className = "post-card";
  div.dataset.id = post.id;

  div.innerHTML = `
    <h3>${post.title}</h3>

    ${post.image ? `<img src="${post.image}" alt="Post Image">` : ""}

    <p>${post.content}</p>

    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;

  postsList.appendChild(div);

  attachPostEvents(div, post);
}


// ATTACH EVENTS
function attachPostEvents(div, post) {
  const deleteBtn = div.querySelector(".delete-btn");
  const editBtn = div.querySelector(".edit-btn");

  deleteBtn.addEventListener("click", function () {
    handleDelete(post.id, div);
  });

  editBtn.addEventListener("click", function () {
    handleEdit(post.id, div);
  });
}


// DELETE POST
function handleDelete(id, div) {
  let posts = getPosts();
  posts = posts.filter(post => post.id != id);

  localStorage.setItem("posts", JSON.stringify(posts));

  div.remove();
}


// EDIT POST (PROMPT)
function handleEdit(id, div) {
  let posts = getPosts();
  const post = posts.find(p => p.id == id);

  if (post) {
    const newTitle = prompt("Edit Title:", post.title);
    const newContent = prompt("Edit Content:", post.content);
    const newImage = prompt("Edit Image URL:", post.image);

    if (newTitle && newContent) {
      post.title = newTitle;
      post.content = newContent;
      post.image = newImage;

      localStorage.setItem("posts", JSON.stringify(posts));

      // Refresh DOM
      postsList.innerHTML = "";
      loadPosts();
    }
  }
}


// SAVE TO LOCAL STORAGE
function savePostToLocalStorage(post) {
  const oldPosts = getPosts();
  oldPosts.push(post);

  localStorage.setItem("posts", JSON.stringify(oldPosts));
}

// GET POSTS
function getPosts() {
  return JSON.parse(localStorage.getItem("posts")) || [];
}
