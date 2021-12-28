import { theBarNav } from "./header";
import { listOfBlogs } from "./functions/bloggList"
import { listOfPosts } from "./functions/postList";

window.onload = function () {
  listOfBlogs();
  listOfPosts();
  theBarNav();
};