import { theBarNav } from "./header";
import { listOfBlogs } from "./functions/bloggList"

window.onload = function () {
  listOfBlogs();
  theBarNav();
};