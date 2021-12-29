import { Blog } from "../modules/bloggModule";
import { blogImgOne } from "../../components/blog-img-1.jpeg";
import { blogImgTwo } from "../../components/blog-img-2.jpeg";
import { blogImgThree } from "../../components/blog-img-3.jpeg";
import { blogImgFour } from "../../components/blog-img-4.jpeg";
import { blogImgFive } from "../../components/blog-img-5.jpeg";
import { blogImgSix } from "../../components/blog-img-6.jpeg";
import { blogImgSeven } from "../../components/blog-img-7.jpeg";
import { blogImgEight } from "../../components/blog-img-8.jpeg";
import { blogImgNine } from "../../components/blog-img-9.jpeg";
import { blogImgTen } from "../../components/blog-img-10.jpeg";

export let blogList: Blog[] = [];

export function listOfBlogs() {
  let blogOne: Blog = new Blog(1, "blog one", blogImgOne, "user one", "19 maj");
  let blogTwo: Blog = new Blog(
    2,
    "blog two",
    blogImgTwo,
    "user two",
    "22 mars"
  );
  let blogThree: Blog = new Blog(
    3,
    "blog three",
    blogImgThree,
    "user three",
    "9 april"
  );
  let blogFour: Blog = new Blog(
    4,
    "blog four",
    blogImgFour,
    "user four",
    "13 november"
  );
  let blogFive: Blog = new Blog(
    5,
    "blog five",
    blogImgFive,
    "user five",
    "20 juni"
  );
  let blogSix: Blog = new Blog(
    6,
    "blog six",
    blogImgSix,
    "user six",
    "16 juli"
  );
  let blogSeven: Blog = new Blog(
    7,
    "blog seven",
    blogImgSeven,
    "user seven",
    "10 september"
  );
  let blogEight: Blog = new Blog(
    8,
    "blog eight",
    blogImgEight,
    "user eight",
    "15 november"
  );
  let blogNine: Blog = new Blog(
    9,
    "blog nine",
    blogImgNine,
    "user nine",
    "22 november"
  );
  let blogTen: Blog = new Blog(
    10,
    "blog ten",
    blogImgTen,
    "user ten",
    "16 januari"
  );

  blogList.push(
    blogOne,
    blogTwo,
    blogThree,
    blogFour,
    blogFive,
    blogSix,
    blogSeven,
    blogEight,
    blogNine,
    blogTen
  );
  console.log(blogList);
}
