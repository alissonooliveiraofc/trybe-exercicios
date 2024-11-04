import "./style.css";

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from "./utils/updateUI";

const usersSelect = document.querySelector("#users-select");

const USERS_API = "https://dummyjson.com/users";

fetch(USERS_API)
  .then((response) => response.json())
  .then((data) => fillUsersSelect(data.users));

usersSelect.addEventListener("change", () => {
  clearPageData();
  const UserID = usersSelect.value;

  const POSTS_API = `https://dummyjson.com/posts?user=${UserID}`;

  fetch(POSTS_API)
    .then((response) => response.json())
    .then((data) => {
      const { posts } = data;
      fillPosts(posts);

      const [featuredPost] = posts;
      const COMMENTS_API = `https://dummyjson.com/posts/${featuredPost.id}/comments`;

      return fetch(COMMENTS_API);
    })
    .then((response) => response.json())
    .then((data) => {
      const { comments } = data;
      fillFeaturedPostComments(comments);
    })
    .catch((error) => {
      fillErrorMessage("Erro ao recuperar informações");
      console.log(error.message);
    });
});
