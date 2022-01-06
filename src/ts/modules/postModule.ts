import { Blog, listOfObjects } from "./bloggModule";
import { postList } from "./postListModule";

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

let postOne: Post = new Post(
  "1",
  "post one",
  "The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.",
  "",
  listOfObjects[0]
);
let postTwo: Post = new Post(
  "1",
  "post two",
  "The river slowly meandered through the open space. It had hidden secrets that it didn't want to reveal. It had a well-planned strategy to appear calm, inviting, and appealing. That's how the river lured her unknowing victims to her water's edge.",
  "",
  listOfObjects[1]
);
let postThree: Post = new Post(
  "1",
  "post three",
  "The chair sat in the corner where it had been for over 25 years. The only difference was there was someone actually sitting in it. How long had it been since someone had done that? Ten years or more he imagined. Yet there was no denying the presence in the chair now.",
  "",
  listOfObjects[2]
);
let postFour: Post = new Post(
  "1",
  "post four",
  "I recollect that my first exploit in squirrel-shooting was in a grove of tall walnut-trees that shades one side of the valley. I had wandered into it at noontime, when all nature is peculiarly quiet, and was startled by the roar of my own gun, as it broke the Sabbath stillness around and was prolonged and reverberated by the angry echoes.",
  "",
  listOfObjects[3]
);
let postFive: Post = new Post(
  "1",
  "post five",
  "Should he write it down? That was the question running through his mind. He couldn't believe what had just happened and he knew nobody else would believe him as well. Even if he documented what had happened by writing it down, he still didn't believe anyone would still believe it. So the question remained. Was it be worth it to actually write it down?",
  "",
  listOfObjects[4]
);
let postSix: Post = new Post(
  "1",
  "post six",
  "There was little doubt that the bridge was unsafe. All one had to do was look at it to know that with certainty. Yet Bob didn't see another option. He may have been able to work one out if he had a bit of time to think things through, but time was something he didn't have. A choice needed to be made, and it needed to be made quickly.",
  "",
  listOfObjects[5]
);
let postSeven: Post = new Post(
  "1",
  "post seven",
  "The red ball sat proudly at the top of the toybox. It had been the last to be played with and anticipated it would be the next as well. The other toys grumbled beneath. At one time each had held the spot of the red ball, but over time they had sunk deeper and deeper into the toy box.",
  "",
  listOfObjects[6]
);
let postEight: Post = new Post(
  "1",
  "post eight",
  "Bryan had made peace with himself and felt comfortable with the choices he made. This had made all the difference in the world. Being alone no longer bothered him and this was essential since there was a good chance he might spend the rest of his life alone in a cell.",
  "",
  listOfObjects[7]
);
let postNine: Post = new Post(
  "1",
  "post nine",
  "He couldn't remember exactly where he had read it, but he was sure that he had. The fact that she didn't believe him was quite frustrating as he began to search the Internet to find the article. It wasn't as if it was something that seemed impossible. Yet she insisted on always seeing the source whenever he stated a fact.",
  "",
  listOfObjects[8]
);
let postTen: Post = new Post(
  "1",
  "post ten",
  "He dropped the ball. While most people would think that this was a metaphor of some type, in Joe's case it was absolutely literal. He had hopes of reaching the Major League and that dream was now it great jeopardy. All because he had dropped the ball.",
  "",
  listOfObjects[9]
);
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

let twoPostOne: Post = new Post(
  "2",
  "post one",
  "Detta är ett inlägg i post two och det första inlägget",
  "",
  listOfObjects[0]
);
let twoPostTwo: Post = new Post(
  "2",
  "post two",
  "Detta är ett inlägg i post two och det andra inlägget",
  "",
  listOfObjects[1]
);
let twoPostThree: Post = new Post(
  "2",
  "post three",
  "Detta är ett inlägg i post two och det tredje inlägget",
  "",
  listOfObjects[2]
);
let twoPostFour: Post = new Post(
  "2",
  "post four",
  "Detta är ett inlägg i post two och det fjärde inlägget",
  "",
  listOfObjects[3]
);
let twoPostFive: Post = new Post(
  "2",
  "post five",
  "Detta är ett inlägg i post two och det femte inlägget",
  "",
  listOfObjects[4]
);
let twoPostSix: Post = new Post(
  "2",
  "post six",
  "Detta är ett inlägg i post two och det sjätte inlägget",
  "",
  listOfObjects[5]
);
let twoPostSeven: Post = new Post(
  "2",
  "post seven",
  "Detta är ett inlägg i post two och det sjunde inlägget",
  "",
  listOfObjects[6]
);
let twoPostEight: Post = new Post(
  "2",
  "post eight",
  "Detta är ett inlägg i post two och det åttonde inlägget",
  "",
  listOfObjects[7]
);
let twoPostNine: Post = new Post(
  "2",
  "post nine",
  "Detta är ett inlägg i post two och det nionde inlägget",
  "",
  listOfObjects[8]
);
let twoPostTen: Post = new Post(
  "2",
  "post ten",
  "Detta är ett inlägg i post two och det tionde inlägget",
  "",
  listOfObjects[9]
);
export let listOfPostTwo: Post[] = [];
listOfPostTwo.push(
  twoPostOne,
  twoPostTwo,
  twoPostThree,
  twoPostFour,
  twoPostFive,
  twoPostSix,
  twoPostSeven,
  twoPostEight,
  twoPostNine,
  twoPostTen
);

let threePostOne: Post = new Post(
  "3",
  "post one",
  "Detta är ett inlägg i post three och det första inlägget",
  "",
  listOfObjects[0]
);
let threePostTwo: Post = new Post(
  "3",
  "post two",
  "Detta är ett inlägg i post three och det andra inlägget",
  "",
  listOfObjects[1]
);
let threePostThree: Post = new Post(
  "3",
  "post three",
  "Detta är ett inlägg i post three och det tredje inlägget",
  "",
  listOfObjects[2]
);
let threePostFour: Post = new Post(
  "3",
  "post four",
  "Detta är ett inlägg i post three och är fjärde inlägget",
  "",
  listOfObjects[3]
);
let threePostFive: Post = new Post(
  "3",
  "post five",
  "Detta är ett inlägg i post three och är femte inlägget",
  "",
  listOfObjects[4]
);
let threePostSix: Post = new Post(
  "3",
  "post six",
  "Detta är ett inlägg i post three och är sjätte inlägget",
  "",
  listOfObjects[5]
);
let threePostSeven: Post = new Post(
  "3",
  "post seven",
  "Detta är ett inlägg i post three och är sjunde inlägget",
  "",
  listOfObjects[6]
);
let threePostEight: Post = new Post(
  "3",
  "post eight",
  "Detta är ett inlägg i post three och är åttonde inlägget",
  "",
  listOfObjects[7]
);
let threePostNine: Post = new Post(
  "3",
  "post nine",
  "Detta är ett inlägg i post three och är nionde inlägget",
  "",
  listOfObjects[8]
);
let threePostTen: Post = new Post(
  "3",
  "post ten",
  "Detta är ett inlägg i post three och är tionde inlägget",
  "",
  listOfObjects[9]
);
export let listOfPostThree: Post[] = [];
listOfPostThree.push(
  threePostOne,
  threePostTwo,
  threePostThree,
  threePostFour,
  threePostFive,
  threePostSix,
  threePostSeven,
  threePostEight,
  threePostNine,
  threePostTen
);

let fourPostOne: Post = new Post(
  "4",
  "post one",
  "Detta är ett inlägg i post four och är första inlägget",
  "",
  listOfObjects[0]
);
let fourPostTwo: Post = new Post(
  "4",
  "post two",
  "Detta är ett inlägg i post four och är andra inlägget",
  "",
  listOfObjects[1]
);
let fourPostThree: Post = new Post(
  "4",
  "post three",
  "Detta är ett inlägg i post four och är tredje inlägget",
  "",
  listOfObjects[2]
);
let fourPostFour: Post = new Post(
  "4",
  "post four",
  "Detta är ett inlägg i post four och är fjärde inlägget",
  "",
  listOfObjects[3]
);
let fourPostFive: Post = new Post(
  "4",
  "post five",
  "Detta är ett inlägg i post four och är femte inlägget",
  "",
  listOfObjects[4]
);
let fourPostSix: Post = new Post(
  "4",
  "post six",
  "Detta är ett inlägg i post four och är sjätte inlägget",
  "",
  listOfObjects[5]
);
let fourPostSeven: Post = new Post(
  "4",
  "post seven",
  "Detta är ett inlägg i post four och är sjunde inlägget",
  "",
  listOfObjects[6]
);
let fourPostEight: Post = new Post(
  "4",
  "post eight",
  "Detta är ett inlägg i post four och är åttonde inlägget",
  "",
  listOfObjects[7]
);
let fourPostNine: Post = new Post(
  "4",
  "post nine",
  "Detta är ett inlägg i post four och är nionde inlägget",
  "",
  listOfObjects[8]
);
let fourPostTen: Post = new Post(
  "4",
  "post ten",
  "Detta är ett inlägg i post four och är tionde inlägget",
  "",
  listOfObjects[9]
);
export let listOfPostFour: Post[] = [];
listOfPostFour.push(
  fourPostOne,
  fourPostTwo,
  fourPostThree,
  fourPostFour,
  fourPostFive,
  fourPostSix,
  fourPostSeven,
  fourPostEight,
  fourPostNine,
  fourPostTen
);

let fivePostOne: Post = new Post(
  "5",
  "post one",
  "Detta är ett inlägg i post five och är första inlägget",
  "",
  listOfObjects[0]
);
let fivePostTwo: Post = new Post(
  "5",
  "post two",
  "Detta är ett inlägg i post five och är andra inlägget",
  "",
  listOfObjects[1]
);
let fivePostThree: Post = new Post(
  "5",
  "post three",
  "Detta är ett inlägg i post five och är tredje inlägget",
  "",
  listOfObjects[2]
);
let fivePostFour: Post = new Post(
  "5",
  "post four",
  "Detta är ett inlägg i post five och är fjärde inlägget",
  "",
  listOfObjects[3]
);
let fivePostFive: Post = new Post(
  "5",
  "post five",
  "Detta är ett inlägg i post five och är femte inlägget",
  "",
  listOfObjects[4]
);
let fivePostSix: Post = new Post(
  "5",
  "post six",
  "Detta är ett inlägg i post five och är sjätte inlägget",
  "",
  listOfObjects[5]
);
let fivePostSeven: Post = new Post(
  "5",
  "post seven",
  "Detta är ett inlägg i post five och är sjunde inlägget",
  "",
  listOfObjects[6]
);
let fivePostEight: Post = new Post(
  "5",
  "post eight",
  "Detta är ett inlägg i post five och är åttonde inlägget",
  "",
  listOfObjects[7]
);
let fivePostNine: Post = new Post(
  "5",
  "post nine",
  "Detta är ett inlägg i post five och är nionde inlägget",
  "",
  listOfObjects[8]
);
let fivePostTen: Post = new Post(
  "5",
  "post ten",
  "Detta är ett inlägg i post five och är tionde inlägget",
  "",
  listOfObjects[9]
);
export let listOfPostFive: Post[] = [];
listOfPostFive.push(
  fivePostOne,
  fivePostTwo,
  fivePostThree,
  fivePostFour,
  fivePostFive,
  fivePostSix,
  fivePostSeven,
  fivePostEight,
  fivePostNine,
  fivePostTen
);

let SixPostOne: Post = new Post(
  "6",
  "post one",
  "Detta är ett inlägg i post six och är första inlägget",
  "",
  listOfObjects[0]
);
let SixPostTwo: Post = new Post(
  "6",
  "post two",
  "Detta är ett inlägg i post six och är andra inlägget",
  "",
  listOfObjects[1]
);
let SixPostThree: Post = new Post(
  "6",
  "post three",
  "Detta är ett inlägg i post six och är tredje inlägget",
  "",
  listOfObjects[2]
);
let SixPostFour: Post = new Post(
  "6",
  "post four",
  "Detta är ett inlägg i post six och är fjärde inlägget",
  "",
  listOfObjects[3]
);
let SixPostFive: Post = new Post(
  "6",
  "post five",
  "Detta är ett inlägg i post six och är femte inlägget",
  "",
  listOfObjects[4]
);
let SixPostSix: Post = new Post(
  "6",
  "post six",
  "Detta är ett inlägg i post six och är sjätte inlägget",
  "",
  listOfObjects[5]
);
let SixPostSeven: Post = new Post(
  "6",
  "post seven",
  "Detta är ett inlägg i post six och är sjunde inlägget",
  "",
  listOfObjects[6]
);
let SixPostEight: Post = new Post(
  "6",
  "post eight",
  "Detta är ett inlägg i post six och är åttonde inlägget",
  "",
  listOfObjects[7]
);
let SixPostNine: Post = new Post(
  "6",
  "post nine",
  "Detta är ett inlägg i post six och är nionde inlägget",
  "",
  listOfObjects[8]
);
let SixPostTen: Post = new Post(
  "6",
  "post ten",
  "Detta är ett inlägg i post six och är tionde inlägget",
  "",
  listOfObjects[9]
);
export let listOfPostSix: Post[] = [];
listOfPostSix.push(
  SixPostOne,
  SixPostTwo,
  SixPostThree,
  SixPostFour,
  SixPostFive,
  SixPostSix,
  SixPostSeven,
  SixPostEight,
  SixPostNine,
  SixPostTen
);

let sevenPostOne: Post = new Post(
  "7",
  "post one",
  "Detta är ett inlägg i post seven och är första inlägget",
  "",
  listOfObjects[0]
);
let sevenPostTwo: Post = new Post(
  "7",
  "post two",
  "Detta är ett inlägg i post seven och är andra inlägget",
  "",
  listOfObjects[1]
);
let sevenPostThree: Post = new Post(
  "7",
  "post three",
  "Detta är ett inlägg i post seven och är tredje inlägget",
  "",
  listOfObjects[2]
);
let sevenPostFour: Post = new Post(
  "7",
  "post four",
  "Detta är ett inlägg i post seven och är fjärde inlägget",
  "",
  listOfObjects[3]
);
let sevenPostFive: Post = new Post(
  "7",
  "post five",
  "Detta är ett inlägg i post seven och är femte inlägget",
  "",
  listOfObjects[4]
);
let sevenPostSix: Post = new Post(
  "7",
  "post six",
  "Detta är ett inlägg i post seven och är sjätte inlägget",
  "",
  listOfObjects[5]
);
let sevenPostSeven: Post = new Post(
  "7",
  "post seven",
  "Detta är ett inlägg i post seven och är sjunde inlägget",
  "",
  listOfObjects[6]
);
let sevenPostEight: Post = new Post(
  "7",
  "post eight",
  "Detta är ett inlägg i post seven och är åttonde inlägget",
  "",
  listOfObjects[7]
);
let sevenPostNine: Post = new Post(
  "7",
  "post nine",
  "Detta är ett inlägg i post seven och är nionde inlägget",
  "",
  listOfObjects[8]
);
let sevenPostTen: Post = new Post(
  "7",
  "post ten",
  "Detta är ett inlägg i post seven och är tionde inlägget",
  "",
  listOfObjects[9]
);
export let listOfPostSeven: Post[] = [];
listOfPostSeven.push(
  sevenPostOne,
  sevenPostTwo,
  sevenPostThree,
  sevenPostFour,
  sevenPostFive,
  sevenPostSix,
  sevenPostSeven,
  sevenPostEight,
  sevenPostNine,
  sevenPostTen
);

let eightPostOne: Post = new Post(
  "8",
  "post one",
  "Detta är ett inlägg i post eight och är första inlägget",
  "",
  listOfObjects[0]
);
let eightPostTwo: Post = new Post(
  "8",
  "post two",
  "Detta är ett inlägg i post eight och är andra inlägget",
  "",
  listOfObjects[1]
);
let eightPostThree: Post = new Post(
  "8",
  "post three",
  "Detta är ett inlägg i post eight och är tredej inlägget",
  "",
  listOfObjects[2]
);
let eightPostFour: Post = new Post(
  "8",
  "post four",
  "Detta är ett inlägg i post eight och är fjärde inlägget",
  "",
  listOfObjects[3]
);
let eightPostFive: Post = new Post(
  "8",
  "post five",
  "Detta är ett inlägg i post eight och är femte inlägget",
  "",
  listOfObjects[4]
);
let eightPostSix: Post = new Post(
  "8",
  "post six",
  "Detta är ett inlägg i post eight och är sjätte inlägget",
  "",
  listOfObjects[5]
);
let eightPostSeven: Post = new Post(
  "8",
  "post seven",
  "Detta är ett inlägg i post eight och är sjunde inlägget",
  "",
  listOfObjects[6]
);
let eightPostEight: Post = new Post(
  "8",
  "post eight",
  "Detta är ett inlägg i post eight och är åttonde inlägget",
  "",
  listOfObjects[7]
);
let eightPostNine: Post = new Post(
  "8",
  "post nine",
  "Detta är ett inlägg i post eight och är nionde inlägget",
  "",
  listOfObjects[8]
);
let eightPostTen: Post = new Post(
  "8",
  "post ten",
  "Detta är ett inlägg i post eight och är tionde inlägget",
  "",
  listOfObjects[9]
);
export let listOfPostEight: Post[] = [];
listOfPostEight.push(
  eightPostOne,
  eightPostTwo,
  eightPostThree,
  eightPostFour,
  eightPostFive,
  eightPostSix,
  eightPostSeven,
  eightPostEight,
  eightPostNine,
  eightPostTen
);

let ninePostOne: Post = new Post(
  "9",
  "post one",
  "Detta är ett inlägg i post nine och är första inlägget",
  "",
  listOfObjects[0]
);
let ninePostTwo: Post = new Post(
  "9",
  "post two",
  "Detta är ett inlägg i post nine och är andra inlägget",
  "",
  listOfObjects[1]
);
let ninePostThree: Post = new Post(
  "9",
  "post three",
  "Detta är ett inlägg i post nine och är tredje inlägget",
  "",
  listOfObjects[2]
);
let ninePostFour: Post = new Post(
  "9",
  "post four",
  "Detta är ett inlägg i post nine och är fjärde inlägget",
  "",
  listOfObjects[3]
);
let ninePostFive: Post = new Post(
  "9",
  "post five",
  "Detta är ett inlägg i post nine och är femte inlägget",
  "",
  listOfObjects[4]
);
let ninePostSix: Post = new Post(
  "9",
  "post six",
  "Detta är ett inlägg i post nine och är sjätte inlägget",
  "",
  listOfObjects[5]
);
let ninePostSeven: Post = new Post(
  "9",
  "post seven",
  "Detta är ett inlägg i post nine och är sjunde inlägget",
  "",
  listOfObjects[6]
);
let ninePostEight: Post = new Post(
  "9",
  "post eight",
  "Detta är ett inlägg i post nine och är åttonde inlägget",
  "",
  listOfObjects[7]
);
let ninePostNine: Post = new Post(
  "9",
  "post nine",
  "Detta är ett inlägg i post nine och är nionde inlägget",
  "",
  listOfObjects[8]
);
let ninePostTen: Post = new Post(
  "9",
  "post ten",
  "Detta är ett inlägg i post nine och är tionde inlägget",
  "",
  listOfObjects[9]
);
export let listOfPostNine: Post[] = [];
listOfPostNine.push(
  ninePostOne,
  ninePostTwo,
  ninePostThree,
  ninePostFour,
  ninePostFive,
  ninePostSix,
  ninePostSeven,
  ninePostEight,
  ninePostNine,
  ninePostTen
);

let tenPostOne: Post = new Post(
  "10",
  "post one",
  "Detta är ett inlägg i post ten och är första inlägget",
  "",
  listOfObjects[0]
);
let tenPostTwo: Post = new Post(
  "10",
  "post two",
  "Detta är ett inlägg i post ten och är andra inlägget",
  "",
  listOfObjects[1]
);
let tenPostThree: Post = new Post(
  "10",
  "post three",
  "Detta är ett inlägg i post ten och är trejde inlägget",
  "",
  listOfObjects[2]
);
let tenPostFour: Post = new Post(
  "10",
  "post four",
  "Detta är ett inlägg i post ten och är fjärde inlägget",
  "",
  listOfObjects[3]
);
let tenPostFive: Post = new Post(
  "10",
  "post five",
  "Detta är ett inlägg i post ten och är femte inlägget",
  "",
  listOfObjects[4]
);
let tenPostSix: Post = new Post(
  "10",
  "post six",
  "Detta är ett inlägg i post ten och är sjätte inlägget",
  "",
  listOfObjects[5]
);
let tenPostSeven: Post = new Post(
  "10",
  "post seven",
  "Detta är ett inlägg i post ten och är sjunde inlägget",
  "",
  listOfObjects[6]
);
let tenPostEight: Post = new Post(
  "10",
  "post eight",
  "Detta är ett inlägg i post ten och är åttonde inlägget",
  "",
  listOfObjects[7]
);
let tenPostNine: Post = new Post(
  "10",
  "post nine",
  "Detta är ett inlägg i post ten och är nionde inlägget",
  "",
  listOfObjects[8]
);
let tenPostTen: Post = new Post(
  "10",
  "post ten",
  "Detta är ett inlägg i post ten och är tionde inlägget",
  "",
  listOfObjects[9]
);
export let listOfPostTen: Post[] = [];
listOfPostTen.push(
  tenPostOne,
  tenPostTwo,
  tenPostThree,
  tenPostFour,
  tenPostFive,
  tenPostSix,
  tenPostSeven,
  tenPostEight,
  tenPostNine,
  tenPostTen
);

export let listOfAllPosts = [];
listOfAllPosts.push(
  listOfPost,
  listOfPostTwo,
  listOfPostThree, 
  listOfPostFour, 
  listOfPostFive, 
  listOfPostSix,
  listOfPostSeven,
  listOfPostEight,
  listOfPostNine,
  listOfPostTen
  );