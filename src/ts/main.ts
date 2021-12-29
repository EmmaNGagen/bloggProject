import { theBarNav } from "./header";
import { listOfBlogs } from "./functions/bloggList";
import { listOfPosts } from "./functions/postList";
import { landingPage } from "./landingpage";

window.onload = function () {
  listOfBlogs();
  listOfPosts();
  theBarNav();
  landingPage();
  landingPage();
};
