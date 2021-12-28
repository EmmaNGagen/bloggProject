import { Post } from "../modules/postModule";
import { blogList } from "./bloggList";

export let postList: Post[] = [];

export function listOfPosts(){
    let postOne: Post = new Post(1, "post one", "insert long text", "", blogList[0]);
    let postTwo: Post = new Post(2, "post two", "insert long text", "", blogList[1]);
    let postThree: Post = new Post(3, "post three", "insert long text", "", blogList[2]);
    let postFour: Post = new Post(4, "post four", "insert long text", "", blogList[3]);
    let postFive: Post = new Post(5, "post five", "insert long text", "", blogList[4]);
    let postSix: Post = new Post(6, "post six", "insert long text", "", blogList[5]);
    let postSeven: Post = new Post(7, "post seven", "insert long text", "", blogList[6]);
    let postEight: Post = new Post(8, "post eight", "insert long text", "", blogList[7]);
    let postNine: Post = new Post(9, "post nine", "insert long text", "", blogList[8]);
    let postTen: Post = new Post(10, "post ten", "insert long text", "", blogList[9]);

    postList.push(postOne, postTwo, postThree, postFour, postFive, postSix, postSeven, postEight, postNine, postTen);
    console.log(postList);
}