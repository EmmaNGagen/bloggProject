import { Blog } from "./bloggModule";

export class Post {
  id: number;
  title: string;
  text: string;
  date: number | string;
  blogId: number;
  constructor(
    id: number,
    title: string,
    text: string,
    date: number | string,
    blogId: number
  ) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.date = date;
    this.blogId = blogId;
  }
}

let postOne: Post = new Post(1, "post one", "insert long text", "", 1);
let postTwo: Post = new Post(2, "post two", "insert long text", "", 2);
let postThree: Post = new Post(3, "post three", "insert long text", "", 3);
let postFour: Post = new Post(4, "post four", "insert long text", "", 5);
let postFive: Post = new Post(5, "post five", "insert long text", "", 5);
let postSix: Post = new Post(6, "post six", "insert long text", "", 6);
let postSeven: Post = new Post(7, "post seven", "insert long text", "", 7);
let postEight: Post = new Post(8, "post eight", "insert long text", "", 8);
let postNine: Post = new Post(9, "post nine", "insert long text", "", 9);
let postTen: Post = new Post(10, "post ten", "insert long text", "", 10);
export let listOfPost: Post[] = [];
listOfPost.push(
  postOne,
  postTwo,
  postThree,
  postFour,
  postFive,
  postSix,
  postSeven,
  postEight,
  postNine,
  postTen
);
