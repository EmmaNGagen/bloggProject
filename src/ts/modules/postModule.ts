import { Blog, listOfObjects } from "./bloggModule";

export class Post {
  id: string;
  title: string;
  text: string;
  date: string;
  blogId: Blog;
  constructor(
    id: string,
    title: string,
    text: string,
    date: string,
    blogId: Blog
  ) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.date = date;
    this.blogId = blogId;
  }
}

let postOne: Post = new Post("1", "post one", "The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.", "", listOfObjects[0]);
let postTwo: Post = new Post("2", "post two", "The river slowly meandered through the open space. It had hidden secrets that it didn't want to reveal. It had a well-planned strategy to appear calm, inviting, and appealing. That's how the river lured her unknowing victims to her water's edge.", "", listOfObjects[1]);
let postThree: Post = new Post("3", "post three", "The chair sat in the corner where it had been for over 25 years. The only difference was there was someone actually sitting in it. How long had it been since someone had done that? Ten years or more he imagined. Yet there was no denying the presence in the chair now.", "", listOfObjects[2]);
let postFour: Post = new Post("4", "post four", "I recollect that my first exploit in squirrel-shooting was in a grove of tall walnut-trees that shades one side of the valley. I had wandered into it at noontime, when all nature is peculiarly quiet, and was startled by the roar of my own gun, as it broke the Sabbath stillness around and was prolonged and reverberated by the angry echoes.", "", listOfObjects[3]);
let postFive: Post = new Post("5", "post five", "Should he write it down? That was the question running through his mind. He couldn't believe what had just happened and he knew nobody else would believe him as well. Even if he documented what had happened by writing it down, he still didn't believe anyone would still believe it. So the question remained. Was it be worth it to actually write it down?", "", listOfObjects[4]);
let postSix: Post = new Post("6", "post six", "There was little doubt that the bridge was unsafe. All one had to do was look at it to know that with certainty. Yet Bob didn't see another option. He may have been able to work one out if he had a bit of time to think things through, but time was something he didn't have. A choice needed to be made, and it needed to be made quickly.", "", listOfObjects[5]);
let postSeven: Post = new Post("7", "post seven", "The red ball sat proudly at the top of the toybox. It had been the last to be played with and anticipated it would be the next as well. The other toys grumbled beneath. At one time each had held the spot of the red ball, but over time they had sunk deeper and deeper into the toy box.", "", listOfObjects[6]);
let postEight: Post = new Post("8", "post eight", "Bryan had made peace with himself and felt comfortable with the choices he made. This had made all the difference in the world. Being alone no longer bothered him and this was essential since there was a good chance he might spend the rest of his life alone in a cell.", "", listOfObjects[7]);
let postNine: Post = new Post("9", "post nine", "He couldn't remember exactly where he had read it, but he was sure that he had. The fact that she didn't believe him was quite frustrating as he began to search the Internet to find the article. It wasn't as if it was something that seemed impossible. Yet she insisted on always seeing the source whenever he stated a fact.", "", listOfObjects[8]);
let postTen: Post = new Post("10", "post ten", "He dropped the ball. While most people would think that this was a metaphor of some type, in Joe's case it was absolutely literal. He had hopes of reaching the Major League and that dream was now it great jeopardy. All because he had dropped the ball.", "", listOfObjects[9]);
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
