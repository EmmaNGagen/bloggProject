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

let postOne: Post = new Post(
  "1",
  "post one",
  "The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.",
  "",
  listOfObjects[0]
);
let postTwo: Post = new Post(
  "2",
  "post two",
  "The river slowly meandered through the open space. It had hidden secrets that it didn't want to reveal. It had a well-planned strategy to appear calm, inviting, and appealing. That's how the river lured her unknowing victims to her water's edge.",
  "",
  listOfObjects[1]
);
let postThree: Post = new Post(
  "3",
  "post three",
  "The chair sat in the corner where it had been for over 25 years. The only difference was there was someone actually sitting in it. How long had it been since someone had done that? Ten years or more he imagined. Yet there was no denying the presence in the chair now.",
  "",
  listOfObjects[2]
);
let postFour: Post = new Post(
  "4",
  "post four",
  "I recollect that my first exploit in squirrel-shooting was in a grove of tall walnut-trees that shades one side of the valley. I had wandered into it at noontime, when all nature is peculiarly quiet, and was startled by the roar of my own gun, as it broke the Sabbath stillness around and was prolonged and reverberated by the angry echoes.",
  "",
  listOfObjects[3]
);
let postFive: Post = new Post(
  "5",
  "post five",
  "Should he write it down? That was the question running through his mind. He couldn't believe what had just happened and he knew nobody else would believe him as well. Even if he documented what had happened by writing it down, he still didn't believe anyone would still believe it. So the question remained. Was it be worth it to actually write it down?",
  "",
  listOfObjects[4]
);
let postSix: Post = new Post(
  "6",
  "post six",
  "There was little doubt that the bridge was unsafe. All one had to do was look at it to know that with certainty. Yet Bob didn't see another option. He may have been able to work one out if he had a bit of time to think things through, but time was something he didn't have. A choice needed to be made, and it needed to be made quickly.",
  "",
  listOfObjects[5]
);
let postSeven: Post = new Post(
  "7",
  "post seven",
  "The red ball sat proudly at the top of the toybox. It had been the last to be played with and anticipated it would be the next as well. The other toys grumbled beneath. At one time each had held the spot of the red ball, but over time they had sunk deeper and deeper into the toy box.",
  "",
  listOfObjects[6]
);
let postEight: Post = new Post(
  "8",
  "post eight",
  "Bryan had made peace with himself and felt comfortable with the choices he made. This had made all the difference in the world. Being alone no longer bothered him and this was essential since there was a good chance he might spend the rest of his life alone in a cell.",
  "",
  listOfObjects[7]
);
let postNine: Post = new Post(
  "9",
  "post nine",
  "He couldn't remember exactly where he had read it, but he was sure that he had. The fact that she didn't believe him was quite frustrating as he began to search the Internet to find the article. It wasn't as if it was something that seemed impossible. Yet she insisted on always seeing the source whenever he stated a fact.",
  "",
  listOfObjects[8]
);
let postTen: Post = new Post(
  "10",
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

let TwoPostOne: Post = new Post(
  "1",
  "post one",
  "Detta är ett inlägg i post two och det första inlägget",
  "",
  listOfObjects[0]
);
let TwoPostTwo: Post = new Post(
  "2",
  "post two",
  "Detta är ett inlägg i post two och det andra inlägget",
  "",
  listOfObjects[1]
);
let TwoPostThree: Post = new Post(
  "3",
  "post three",
  "Detta är ett inlägg i post two och det tredje inlägget",
  "",
  listOfObjects[2]
);
let TwoPostFour: Post = new Post(
  "4",
  "post four",
  "Detta är ett inlägg i post two och det fjärde inlägget",
  "",
  listOfObjects[3]
);
let TwoPostFive: Post = new Post(
  "5",
  "post five",
  "Detta är ett inlägg i post two och det femte inlägget",
  "",
  listOfObjects[4]
);
let TwoPostSix: Post = new Post(
  "6",
  "post six",
  "Detta är ett inlägg i post two och det sjätte inlägget",
  "",
  listOfObjects[5]
);
let TwoPostSeven: Post = new Post(
  "7",
  "post seven",
  "Detta är ett inlägg i post two och det sjunde inlägget",
  "",
  listOfObjects[6]
);
let TwoPostEight: Post = new Post(
  "8",
  "post eight",
  "Detta är ett inlägg i post two och det åttonde inlägget",
  "",
  listOfObjects[7]
);
let TwoPostNine: Post = new Post(
  "9",
  "post nine",
  "Detta är ett inlägg i post two och det nionde inlägget",
  "",
  listOfObjects[8]
);
let TwoPostTen: Post = new Post(
  "10",
  "post ten",
  "Detta är ett inlägg i post two och det tionde inlägget",
  "",
  listOfObjects[9]
);
export let listOfPostTwo: Post[] = [];
listOfPostTwo.push(
  TwoPostOne,
  TwoPostTwo,
  TwoPostThree,
  TwoPostFour,
  TwoPostFive,
  TwoPostSix,
  TwoPostSeven,
  TwoPostEight,
  TwoPostNine,
  TwoPostTen
);

let ThreePostOne: Post = new Post(
  "1",
  "post one",
  "Detta är ett inlägg i post three och det första inlägget",
  "",
  listOfObjects[0]
);
let ThreePostTwo: Post = new Post(
  "2",
  "post two",
  "Detta är ett inlägg i post three och det andra inlägget",
  "",
  listOfObjects[1]
);
let ThreePostThree: Post = new Post(
  "3",
  "post three",
  "Detta är ett inlägg i post three och det tredje inlägget",
  "",
  listOfObjects[2]
);
let ThreePostFour: Post = new Post(
  "4",
  "post four",
  "Detta är ett inlägg i post three och är fjärde inlägget",
  "",
  listOfObjects[3]
);
let ThreePostFive: Post = new Post(
  "5",
  "post five",
  "Detta är ett inlägg i post three och är femte inlägget",
  "",
  listOfObjects[4]
);
let ThreePostSix: Post = new Post(
  "6",
  "post six",
  "Detta är ett inlägg i post three och är sjätte inlägget",
  "",
  listOfObjects[5]
);
let ThreePostSeven: Post = new Post(
  "7",
  "post seven",
  "Detta är ett inlägg i post three och är sjunde inlägget",
  "",
  listOfObjects[6]
);
let ThreePostEight: Post = new Post(
  "8",
  "post eight",
  "Detta är ett inlägg i post three och är åttonde inlägget",
  "",
  listOfObjects[7]
);
let ThreePostNine: Post = new Post(
  "9",
  "post nine",
  "Detta är ett inlägg i post three och är nionde inlägget",
  "",
  listOfObjects[8]
);
let ThreePostTen: Post = new Post(
  "10",
  "post ten",
  "Detta är ett inlägg i post three och är tionde inlägget",
  "",
  listOfObjects[9]
);
export let listOfPostThree: Post[] = [];
listOfPostThree.push(
  ThreePostOne,
  ThreePostTwo,
  ThreePostThree,
  ThreePostFour,
  ThreePostFive,
  ThreePostSix,
  ThreePostSeven,
  ThreePostEight,
  ThreePostNine,
  ThreePostTen
);

let FourPostOne: Post = new Post(
  "1",
  "post one",
  "Detta är ett inlägg i post four och är första inlägget",
  "",
  listOfObjects[0]
);
let FourPostTwo: Post = new Post(
  "2",
  "post two",
  "Detta är ett inlägg i post four och är andra inlägget",
  "",
  listOfObjects[1]
);
let FourPostThree: Post = new Post(
  "3",
  "post three",
  "Detta är ett inlägg i post four och är tredje inlägget",
  "",
  listOfObjects[2]
);
let FourPostFour: Post = new Post(
  "4",
  "post four",
  "Detta är ett inlägg i post four och är fjärde inlägget",
  "",
  listOfObjects[3]
);
let FourPostFive: Post = new Post(
  "5",
  "post five",
  "Detta är ett inlägg i post four och är femte inlägget",
  "",
  listOfObjects[4]
);
let FourPostSix: Post = new Post(
  "6",
  "post six",
  "Detta är ett inlägg i post four och är sjätte inlägget",
  "",
  listOfObjects[5]
);
let FourPostSeven: Post = new Post(
  "7",
  "post seven",
  "Detta är ett inlägg i post four och är sjunde inlägget",
  "",
  listOfObjects[6]
);
let FourPostEight: Post = new Post(
  "8",
  "post eight",
  "Detta är ett inlägg i post four och är åttonde inlägget",
  "",
  listOfObjects[7]
);
let FourPostNine: Post = new Post(
  "9",
  "post nine",
  "Detta är ett inlägg i post four och är nionde inlägget",
  "",
  listOfObjects[8]
);
let FourPostTen: Post = new Post(
  "10",
  "post ten",
  "Detta är ett inlägg i post four och är tionde inlägget",
  "",
  listOfObjects[9]
);
export let listOfPostFour: Post[] = [];
listOfPostFour.push(
  FourPostOne,
  FourPostTwo,
  FourPostThree,
  FourPostFour,
  FourPostFive,
  FourPostSix,
  FourPostSeven,
  FourPostEight,
  FourPostNine,
  FourPostTen
);

let FivePostOne: Post = new Post(
  "1",
  "post one",
  "Detta är ett inlägg i post five och är första inlägget",
  "",
  listOfObjects[0]
);
let FivePostTwo: Post = new Post(
  "2",
  "post two",
  "Detta är ett inlägg i post five och är andra inlägget",
  "",
  listOfObjects[1]
);
let FivePostThree: Post = new Post(
  "3",
  "post three",
  "Detta är ett inlägg i post five och är tredje inlägget",
  "",
  listOfObjects[2]
);
let FivePostFour: Post = new Post(
  "4",
  "post four",
  "Detta är ett inlägg i post five och är fjärde inlägget",
  "",
  listOfObjects[3]
);
let FivePostFive: Post = new Post(
  "5",
  "post five",
  "Detta är ett inlägg i post five och är femte inlägget",
  "",
  listOfObjects[4]
);
let FivePostSix: Post = new Post(
  "6",
  "post six",
  "Detta är ett inlägg i post five och är sjätte inlägget",
  "",
  listOfObjects[5]
);
let FivePostSeven: Post = new Post(
  "7",
  "post seven",
  "Detta är ett inlägg i post five och är sjunde inlägget",
  "",
  listOfObjects[6]
);
let FivePostEight: Post = new Post(
  "8",
  "post eight",
  "Detta är ett inlägg i post five och är åttonde inlägget",
  "",
  listOfObjects[7]
);
let FivePostNine: Post = new Post(
  "9",
  "post nine",
  "Detta är ett inlägg i post five och är nionde inlägget",
  "",
  listOfObjects[8]
);
let FivePostTen: Post = new Post(
  "10",
  "post ten",
  "Detta är ett inlägg i post five och är tionde inlägget",
  "",
  listOfObjects[9]
);
export let listOfPostFive: Post[] = [];
listOfPostFive.push(
  FivePostOne,
  FivePostTwo,
  FivePostThree,
  FivePostFour,
  FivePostFive,
  FivePostSix,
  FivePostSeven,
  FivePostEight,
  FivePostNine,
  FivePostTen
);

let SixPostOne: Post = new Post(
  "1",
  "post one",
  "Detta är ett inlägg i post six och är första inlägget",
  "",
  listOfObjects[0]
);
let SixPostTwo: Post = new Post(
  "2",
  "post two",
  "Detta är ett inlägg i post six och är andra inlägget",
  "",
  listOfObjects[1]
);
let SixPostThree: Post = new Post(
  "3",
  "post three",
  "Detta är ett inlägg i post six och är tredje inlägget",
  "",
  listOfObjects[2]
);
let SixPostFour: Post = new Post(
  "4",
  "post four",
  "Detta är ett inlägg i post six och är fjärde inlägget",
  "",
  listOfObjects[3]
);
let SixPostFive: Post = new Post(
  "5",
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
  "7",
  "post seven",
  "Detta är ett inlägg i post six och är sjunde inlägget",
  "",
  listOfObjects[6]
);
let SixPostEight: Post = new Post(
  "8",
  "post eight",
  "Detta är ett inlägg i post six och är åttonde inlägget",
  "",
  listOfObjects[7]
);
let SixPostNine: Post = new Post(
  "9",
  "post nine",
  "Detta är ett inlägg i post six och är nionde inlägget",
  "",
  listOfObjects[8]
);
let SixPostTen: Post = new Post(
  "10",
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

let SevenPostOne: Post = new Post(
  "1",
  "post one",
  "Detta är ett inlägg i post seven och är första inlägget",
  "",
  listOfObjects[0]
);
let SevenPostTwo: Post = new Post(
  "2",
  "post two",
  "Detta är ett inlägg i post seven och är andra inlägget",
  "",
  listOfObjects[1]
);
let SevenPostThree: Post = new Post(
  "3",
  "post three",
  "Detta är ett inlägg i post seven och är tredje inlägget",
  "",
  listOfObjects[2]
);
let SevenPostFour: Post = new Post(
  "4",
  "post four",
  "Detta är ett inlägg i post seven och är fjärde inlägget",
  "",
  listOfObjects[3]
);
let SevenPostFive: Post = new Post(
  "5",
  "post five",
  "Detta är ett inlägg i post seven och är femte inlägget",
  "",
  listOfObjects[4]
);
let SevenPostSix: Post = new Post(
  "6",
  "post six",
  "Detta är ett inlägg i post seven och är sjätte inlägget",
  "",
  listOfObjects[5]
);
let SevenPostSeven: Post = new Post(
  "7",
  "post seven",
  "Detta är ett inlägg i post seven och är sjunde inlägget",
  "",
  listOfObjects[6]
);
let SevenPostEight: Post = new Post(
  "8",
  "post eight",
  "Detta är ett inlägg i post seven och är åttonde inlägget",
  "",
  listOfObjects[7]
);
let SevenPostNine: Post = new Post(
  "9",
  "post nine",
  "Detta är ett inlägg i post seven och är nionde inlägget",
  "",
  listOfObjects[8]
);
let SevenPostTen: Post = new Post(
  "10",
  "post ten",
  "Detta är ett inlägg i post seven och är tionde inlägget",
  "",
  listOfObjects[9]
);
export let listOfPostSeven: Post[] = [];
listOfPostSeven.push(
  SevenPostOne,
  SevenPostTwo,
  SevenPostThree,
  SevenPostFour,
  SevenPostFive,
  SevenPostSix,
  SevenPostSeven,
  SevenPostEight,
  SevenPostNine,
  SevenPostTen
);

let EightPostOne: Post = new Post(
  "1",
  "post one",
  "Detta är ett inlägg i post eight och är första inlägget",
  "",
  listOfObjects[0]
);
let EightPostTwo: Post = new Post(
  "2",
  "post two",
  "Detta är ett inlägg i post eight och är andra inlägget",
  "",
  listOfObjects[1]
);
let EightPostThree: Post = new Post(
  "3",
  "post three",
  "Detta är ett inlägg i post eight och är tredej inlägget",
  "",
  listOfObjects[2]
);
let EightPostFour: Post = new Post(
  "4",
  "post four",
  "Detta är ett inlägg i post eight och är fjärde inlägget",
  "",
  listOfObjects[3]
);
let EightPostFive: Post = new Post(
  "5",
  "post five",
  "Detta är ett inlägg i post eight och är femte inlägget",
  "",
  listOfObjects[4]
);
let EightPostSix: Post = new Post(
  "6",
  "post six",
  "Detta är ett inlägg i post eight och är sjätte inlägget",
  "",
  listOfObjects[5]
);
let EightPostSeven: Post = new Post(
  "7",
  "post seven",
  "Detta är ett inlägg i post eight och är sjunde inlägget",
  "",
  listOfObjects[6]
);
let EightPostEight: Post = new Post(
  "8",
  "post eight",
  "Detta är ett inlägg i post eight och är åttonde inlägget",
  "",
  listOfObjects[7]
);
let EightPostNine: Post = new Post(
  "9",
  "post nine",
  "Detta är ett inlägg i post eight och är nionde inlägget",
  "",
  listOfObjects[8]
);
let EightPostTen: Post = new Post(
  "10",
  "post ten",
  "Detta är ett inlägg i post eight och är tionde inlägget",
  "",
  listOfObjects[9]
);
export let listOfPostEight: Post[] = [];
listOfPostEight.push(
  EightPostOne,
  EightPostTwo,
  EightPostThree,
  EightPostFour,
  EightPostFive,
  EightPostSix,
  EightPostSeven,
  EightPostEight,
  EightPostNine,
  EightPostTen
);

let NinePostOne: Post = new Post(
  "1",
  "post one",
  "Detta är ett inlägg i post nine och är första inlägget",
  "",
  listOfObjects[0]
);
let NinePostTwo: Post = new Post(
  "2",
  "post two",
  "Detta är ett inlägg i post nine och är andra inlägget",
  "",
  listOfObjects[1]
);
let NinePostThree: Post = new Post(
  "3",
  "post three",
  "Detta är ett inlägg i post nine och är tredje inlägget",
  "",
  listOfObjects[2]
);
let NinePostFour: Post = new Post(
  "4",
  "post four",
  "Detta är ett inlägg i post nine och är fjärde inlägget",
  "",
  listOfObjects[3]
);
let NinePostFive: Post = new Post(
  "5",
  "post five",
  "Detta är ett inlägg i post nine och är femte inlägget",
  "",
  listOfObjects[4]
);
let NinePostSix: Post = new Post(
  "6",
  "post six",
  "Detta är ett inlägg i post nine och är sjätte inlägget",
  "",
  listOfObjects[5]
);
let NinePostSeven: Post = new Post(
  "7",
  "post seven",
  "Detta är ett inlägg i post nine och är sjunde inlägget",
  "",
  listOfObjects[6]
);
let NinePostEight: Post = new Post(
  "8",
  "post eight",
  "Detta är ett inlägg i post nine och är åttonde inlägget",
  "",
  listOfObjects[7]
);
let NinePostNine: Post = new Post(
  "9",
  "post nine",
  "Detta är ett inlägg i post nine och är nionde inlägget",
  "",
  listOfObjects[8]
);
let NinePostTen: Post = new Post(
  "10",
  "post ten",
  "Detta är ett inlägg i post nine och är tionde inlägget",
  "",
  listOfObjects[9]
);
export let listOfPostNine: Post[] = [];
listOfPostNine.push(
  NinePostOne,
  NinePostTwo,
  NinePostThree,
  NinePostFour,
  NinePostFive,
  NinePostSix,
  NinePostSeven,
  NinePostEight,
  NinePostNine,
  NinePostTen
);

let TenPostOne: Post = new Post(
  "1",
  "post one",
  "Detta är ett inlägg i post ten och är första inlägget",
  "",
  listOfObjects[0]
);
let TenPostTwo: Post = new Post(
  "2",
  "post two",
  "Detta är ett inlägg i post ten och är andra inlägget",
  "",
  listOfObjects[1]
);
let TenPostThree: Post = new Post(
  "3",
  "post three",
  "Detta är ett inlägg i post ten och är trejde inlägget",
  "",
  listOfObjects[2]
);
let TenPostFour: Post = new Post(
  "4",
  "post four",
  "Detta är ett inlägg i post ten och är fjärde inlägget",
  "",
  listOfObjects[3]
);
let TenPostFive: Post = new Post(
  "5",
  "post five",
  "Detta är ett inlägg i post ten och är femte inlägget",
  "",
  listOfObjects[4]
);
let TenPostSix: Post = new Post(
  "6",
  "post six",
  "Detta är ett inlägg i post ten och är sjätte inlägget",
  "",
  listOfObjects[5]
);
let TenPostSeven: Post = new Post(
  "7",
  "post seven",
  "Detta är ett inlägg i post ten och är sjunde inlägget",
  "",
  listOfObjects[6]
);
let TenPostEight: Post = new Post(
  "8",
  "post eight",
  "Detta är ett inlägg i post ten och är åttonde inlägget",
  "",
  listOfObjects[7]
);
let TenPostNine: Post = new Post(
  "9",
  "post nine",
  "Detta är ett inlägg i post ten och är nionde inlägget",
  "",
  listOfObjects[8]
);
let TenPostTen: Post = new Post(
  "10",
  "post ten",
  "Detta är ett inlägg i post ten och är tionde inlägget",
  "",
  listOfObjects[9]
);
export let listOfPostTen: Post[] = [];
listOfPostTen.push(
  TenPostOne,
  TenPostTwo,
  TenPostThree,
  TenPostFour,
  TenPostFive,
  TenPostSix,
  TenPostSeven,
  TenPostEight,
  TenPostNine,
  TenPostTen
);
