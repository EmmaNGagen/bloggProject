import { theBarNav } from "./header";
import { displayBlogs } from "./functions/displayBlogs";
import { displayPost } from "./post";

window.onload = function () {
  theBarNav();
  displayBlogs();
  displayPost();
};
