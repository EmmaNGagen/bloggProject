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
 
export let listOfPost: Post[] = [];

//
// TILL BLOGG 1
//

let postOne: Post = new Post(
  "1",
  "post one",
  "The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.",
  "1 Januari",
  listOfObjects[0]
);
let postTwo: Post = new Post(
  "1",
  "post two",
  "The river slowly meandered through the open space. It had hidden secrets that it didn't want to reveal. It had a well-planned strategy to appear calm, inviting, and appealing. That's how the river lured her unknowing victims to her water's edge.",
  "9 Mars",
  listOfObjects[0]
);
let postThree: Post = new Post(
  "1",
  "post three",
  "The chair sat in the corner where it had been for over 25 years. The only difference was there was someone actually sitting in it. How long had it been since someone had done that? Ten years or more he imagined. Yet there was no denying the presence in the chair now.",
  "10 April",
  listOfObjects[0]
);
let postFour: Post = new Post(
  "1",
  "post four",
  "I recollect that my first exploit in squirrel-shooting was in a grove of tall walnut-trees that shades one side of the valley. I had wandered into it at noontime, when all nature is peculiarly quiet, and was startled by the roar of my own gun, as it broke the Sabbath stillness around and was prolonged and reverberated by the angry echoes.",
  "17 Maj",
  listOfObjects[0]
);
let postFive: Post = new Post(
  "1",
  "post five",
  "Should he write it down? That was the question running through his mind. He couldn't believe what had just happened and he knew nobody else would believe him as well. Even if he documented what had happened by writing it down, he still didn't believe anyone would still believe it. So the question remained. Was it be worth it to actually write it down?",
  "25 Juni",
  listOfObjects[0]
);
let postSix: Post = new Post(
  "1",
  "post six",
  "There was little doubt that the bridge was unsafe. All one had to do was look at it to know that with certainty. Yet Bob didn't see another option. He may have been able to work one out if he had a bit of time to think things through, but time was something he didn't have. A choice needed to be made, and it needed to be made quickly.",
  "1 Juli",
  listOfObjects[0]
);
let postSeven: Post = new Post(
  "1",
  "post seven",
  "The red ball sat proudly at the top of the toybox. It had been the last to be played with and anticipated it would be the next as well. The other toys grumbled beneath. At one time each had held the spot of the red ball, but over time they had sunk deeper and deeper into the toy box.",
  "2 Juni",
  listOfObjects[0]
);
let postEight: Post = new Post(
  "1",
  "post eight",
  "Bryan had made peace with himself and felt comfortable with the choices he made. This had made all the difference in the world. Being alone no longer bothered him and this was essential since there was a good chance he might spend the rest of his life alone in a cell.",
  "4 Augusti",
  listOfObjects[0]
);
let postNine: Post = new Post(
  "1",
  "post nine",
  "He couldn't remember exactly where he had read it, but he was sure that he had. The fact that she didn't believe him was quite frustrating as he began to search the Internet to find the article. It wasn't as if it was something that seemed impossible. Yet she insisted on always seeing the source whenever he stated a fact.",
  "7 September",
  listOfObjects[0]
);
let postTen: Post = new Post(
  "1",
  "post ten",
  "He dropped the ball. While most people would think that this was a metaphor of some type, in Joe's case it was absolutely literal. He had hopes of reaching the Major League and that dream was now it great jeopardy. All because he had dropped the ball.",
  "18 Oktober",
  listOfObjects[0]
);

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

//
// TILL BLOGG 2
//
  
let postOneTwo: Post = new Post(
  "2",
  "post one",
  "The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.",
  "8 Februari",
  listOfObjects[1]
);
let postTwoTwo: Post = new Post(
  "2",
  "post two",
  "The river slowly meandered through the open space. It had hidden secrets that it didn't want to reveal. It had a well-planned strategy to appear calm, inviting, and appealing. That's how the river lured her unknowing victims to her water's edge.",
  "4 Mars",
  listOfObjects[1]
);
let postThreeTwo: Post = new Post(
  "2",
  "post three",
  "The chair sat in the corner where it had been for over 25 years. The only difference was there was someone actually sitting in it. How long had it been since someone had done that? Ten years or more he imagined. Yet there was no denying the presence in the chair now.",
  "10 April",
  listOfObjects[1]
);
let postFourTwo: Post = new Post(
  "2",
  "post four",
  "I recollect that my first exploit in squirrel-shooting was in a grove of tall walnut-trees that shades one side of the valley. I had wandered into it at noontime, when all nature is peculiarly quiet, and was startled by the roar of my own gun, as it broke the Sabbath stillness around and was prolonged and reverberated by the angry echoes.",
  "8 Maj",
  listOfObjects[1]
);
let postFiveTwo: Post = new Post(
  "2",
  "post five",
  "Should he write it down? That was the question running through his mind. He couldn't believe what had just happened and he knew nobody else would believe him as well. Even if he documented what had happened by writing it down, he still didn't believe anyone would still believe it. So the question remained. Was it be worth it to actually write it down?",
  "27 Juli",
  listOfObjects[1]
);
let postSixTwo: Post = new Post(
  "2",
  "post six",
  "There was little doubt that the bridge was unsafe. All one had to do was look at it to know that with certainty. Yet Bob didn't see another option. He may have been able to work one out if he had a bit of time to think things through, but time was something he didn't have. A choice needed to be made, and it needed to be made quickly.",
  "22 Juni",
  listOfObjects[1]
);
let postSevenTwo: Post = new Post(
  "2",
  "post seven",
  "The red ball sat proudly at the top of the toybox. It had been the last to be played with and anticipated it would be the next as well. The other toys grumbled beneath. At one time each had held the spot of the red ball, but over time they had sunk deeper and deeper into the toy box.",
  "28 Augusti",
  listOfObjects[1]
);
let postEightTwo: Post = new Post(
  "2",
  "post eight",
  "Bryan had made peace with himself and felt comfortable with the choices he made. This had made all the difference in the world. Being alone no longer bothered him and this was essential since there was a good chance he might spend the rest of his life alone in a cell.",
  "30 Augusti",
  listOfObjects[1]
);
let postNineTwo: Post = new Post(
  "2",
  "post nine",
  "He couldn't remember exactly where he had read it, but he was sure that he had. The fact that she didn't believe him was quite frustrating as he began to search the Internet to find the article. It wasn't as if it was something that seemed impossible. Yet she insisted on always seeing the source whenever he stated a fact.",
  "5 September",
  listOfObjects[1]
);
let postTenTwo: Post = new Post(
  "2",
  "post ten",
  "He dropped the ball. While most people would think that this was a metaphor of some type, in Joe's case it was absolutely literal. He had hopes of reaching the Major League and that dream was now it great jeopardy. All because he had dropped the ball.",
  "24 December",
  listOfObjects[1]
);

listOfPost.push(
  postOneTwo,
  postTwoTwo,
  postThreeTwo,
  postFourTwo,
  postFiveTwo,
  postSixTwo,
  postSevenTwo,
  postEightTwo,
  postNineTwo,
  postTenTwo
);

//
// TILL BLOGG 3
//
  
let postOneThree: Post = new Post(
  "3",
  "post one",
  "The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.",
  "1 Januari",
  listOfObjects[2]
);
let postTwoThree: Post = new Post(
  "3",
  "post two",
  "The river slowly meandered through the open space. It had hidden secrets that it didn't want to reveal. It had a well-planned strategy to appear calm, inviting, and appealing. That's how the river lured her unknowing victims to her water's edge.",
  "2 Januari",
  listOfObjects[2]
);
let postThreeThree: Post = new Post(
  "3",
  "post three",
  "The chair sat in the corner where it had been for over 25 years. The only difference was there was someone actually sitting in it. How long had it been since someone had done that? Ten years or more he imagined. Yet there was no denying the presence in the chair now.",
  "3 Januari",
  listOfObjects[2]
);
let postFourThree: Post = new Post(
  "3",
  "post four",
  "I recollect that my first exploit in squirrel-shooting was in a grove of tall walnut-trees that shades one side of the valley. I had wandered into it at noontime, when all nature is peculiarly quiet, and was startled by the roar of my own gun, as it broke the Sabbath stillness around and was prolonged and reverberated by the angry echoes.",
  "4 Januari",
  listOfObjects[2]
);
let postFiveThree: Post = new Post(
  "3",
  "post five",
  "Should he write it down? That was the question running through his mind. He couldn't believe what had just happened and he knew nobody else would believe him as well. Even if he documented what had happened by writing it down, he still didn't believe anyone would still believe it. So the question remained. Was it be worth it to actually write it down?",
  "5 Januari",
  listOfObjects[2]
);
let postSixThree: Post = new Post(
  "3",
  "post six",
  "There was little doubt that the bridge was unsafe. All one had to do was look at it to know that with certainty. Yet Bob didn't see another option. He may have been able to work one out if he had a bit of time to think things through, but time was something he didn't have. A choice needed to be made, and it needed to be made quickly.",
  "6 Januari",
  listOfObjects[2]
);
let postSevenThree: Post = new Post(
  "3",
  "post seven",
  "The red ball sat proudly at the top of the toybox. It had been the last to be played with and anticipated it would be the next as well. The other toys grumbled beneath. At one time each had held the spot of the red ball, but over time they had sunk deeper and deeper into the toy box.",
  "7 Januari",
  listOfObjects[2]
);
let postEightThree: Post = new Post(
  "3",
  "post eight",
  "Bryan had made peace with himself and felt comfortable with the choices he made. This had made all the difference in the world. Being alone no longer bothered him and this was essential since there was a good chance he might spend the rest of his life alone in a cell.",
  "8 Januari",
  listOfObjects[2]
);
let postNineThree: Post = new Post(
  "3",
  "post nine",
  "He couldn't remember exactly where he had read it, but he was sure that he had. The fact that she didn't believe him was quite frustrating as he began to search the Internet to find the article. It wasn't as if it was something that seemed impossible. Yet she insisted on always seeing the source whenever he stated a fact.",
  "9 Januari",
  listOfObjects[2]
);
let postTenThree: Post = new Post(
  "3",
  "post ten",
  "He dropped the ball. While most people would think that this was a metaphor of some type, in Joe's case it was absolutely literal. He had hopes of reaching the Major League and that dream was now it great jeopardy. All because he had dropped the ball.",
  "10 Januari",
  listOfObjects[2]
);

listOfPost.push(
  postOneThree,
  postTwoThree,
  postThreeThree,
  postFourThree,
  postFiveThree,
  postSixThree,
  postSevenThree,
  postEightThree,
  postNineThree,
  postTenThree
);

//
// TILL BLOGG 4
//
  
let postOneFour: Post = new Post(
  "4",
  "post one",
  "The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.",
  "1 Februari",
  listOfObjects[3]
);
let postTwoFour: Post = new Post(
  "4",
  "post two",
  "The river slowly meandered through the open space. It had hidden secrets that it didn't want to reveal. It had a well-planned strategy to appear calm, inviting, and appealing. That's how the river lured her unknowing victims to her water's edge.",
  "2 Februari",
  listOfObjects[3]
);
let postThreeFour: Post = new Post(
  "4",
  "post three",
  "The chair sat in the corner where it had been for over 25 years. The only difference was there was someone actually sitting in it. How long had it been since someone had done that? Ten years or more he imagined. Yet there was no denying the presence in the chair now.",
  "3 Februari",
  listOfObjects[3]
);
let postFourFour: Post = new Post(
  "4",
  "post four",
  "I recollect that my first exploit in squirrel-shooting was in a grove of tall walnut-trees that shades one side of the valley. I had wandered into it at noontime, when all nature is peculiarly quiet, and was startled by the roar of my own gun, as it broke the Sabbath stillness around and was prolonged and reverberated by the angry echoes.",
  "4 Februari",
  listOfObjects[3]
);
let postFiveFour: Post = new Post(
  "4",
  "post five",
  "Should he write it down? That was the question running through his mind. He couldn't believe what had just happened and he knew nobody else would believe him as well. Even if he documented what had happened by writing it down, he still didn't believe anyone would still believe it. So the question remained. Was it be worth it to actually write it down?",
  "5 Februari",
  listOfObjects[3]
);
let postSixFour: Post = new Post(
  "4",
  "post six",
  "There was little doubt that the bridge was unsafe. All one had to do was look at it to know that with certainty. Yet Bob didn't see another option. He may have been able to work one out if he had a bit of time to think things through, but time was something he didn't have. A choice needed to be made, and it needed to be made quickly.",
  "6 Februari",
  listOfObjects[3]
);
let postSevenFour: Post = new Post(
  "4",
  "post seven",
  "The red ball sat proudly at the top of the toybox. It had been the last to be played with and anticipated it would be the next as well. The other toys grumbled beneath. At one time each had held the spot of the red ball, but over time they had sunk deeper and deeper into the toy box.",
  "7 Februari",
  listOfObjects[3]
);
let postEightFour: Post = new Post(
  "4",
  "post eight",
  "Bryan had made peace with himself and felt comfortable with the choices he made. This had made all the difference in the world. Being alone no longer bothered him and this was essential since there was a good chance he might spend the rest of his life alone in a cell.",
  "8 Februari",
  listOfObjects[3]
);
let postNineFour: Post = new Post(
  "4",
  "post nine",
  "He couldn't remember exactly where he had read it, but he was sure that he had. The fact that she didn't believe him was quite frustrating as he began to search the Internet to find the article. It wasn't as if it was something that seemed impossible. Yet she insisted on always seeing the source whenever he stated a fact.",
  "9 Februari",
  listOfObjects[3]
);
let postTenFour: Post = new Post(
  "4",
  "post ten",
  "He dropped the ball. While most people would think that this was a metaphor of some type, in Joe's case it was absolutely literal. He had hopes of reaching the Major League and that dream was now it great jeopardy. All because he had dropped the ball.",
  "10 Februari",
  listOfObjects[3]
);

listOfPost.push(
  postOneFour,
  postTwoFour,
  postThreeFour,
  postFourFour,
  postFiveFour,
  postSixFour,
  postSevenFour,
  postEightFour,
  postNineFour,
  postTenFour
);

//
// TILL BLOGG 5
//
  
let postOneFive: Post = new Post(
  "5",
  "post one",
  "The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.",
  "1 Mars",
  listOfObjects[4]
);
let postTwoFive: Post = new Post(
  "5",
  "post two",
  "The river slowly meandered through the open space. It had hidden secrets that it didn't want to reveal. It had a well-planned strategy to appear calm, inviting, and appealing. That's how the river lured her unknowing victims to her water's edge.",
  "2 Mars",
  listOfObjects[4]
);
let postThreeFive: Post = new Post(
  "5",
  "post three",
  "The chair sat in the corner where it had been for over 25 years. The only difference was there was someone actually sitting in it. How long had it been since someone had done that? Ten years or more he imagined. Yet there was no denying the presence in the chair now.",
  "3 Mars",
  listOfObjects[4]
);
let postFourFive: Post = new Post(
  "5",
  "post four",
  "I recollect that my first exploit in squirrel-shooting was in a grove of tall walnut-trees that shades one side of the valley. I had wandered into it at noontime, when all nature is peculiarly quiet, and was startled by the roar of my own gun, as it broke the Sabbath stillness around and was prolonged and reverberated by the angry echoes.",
  "4 Mars",
  listOfObjects[4]
);
let postFiveFive: Post = new Post(
  "5",
  "post five",
  "Should he write it down? That was the question running through his mind. He couldn't believe what had just happened and he knew nobody else would believe him as well. Even if he documented what had happened by writing it down, he still didn't believe anyone would still believe it. So the question remained. Was it be worth it to actually write it down?",
  "5 Mars",
  listOfObjects[4]
);
let postSixFive: Post = new Post(
  "5",
  "post six",
  "There was little doubt that the bridge was unsafe. All one had to do was look at it to know that with certainty. Yet Bob didn't see another option. He may have been able to work one out if he had a bit of time to think things through, but time was something he didn't have. A choice needed to be made, and it needed to be made quickly.",
  "6 Mars",
  listOfObjects[4]
);
let postSevenFive: Post = new Post(
  "5",
  "post seven",
  "The red ball sat proudly at the top of the toybox. It had been the last to be played with and anticipated it would be the next as well. The other toys grumbled beneath. At one time each had held the spot of the red ball, but over time they had sunk deeper and deeper into the toy box.",
  "7 Mars",
  listOfObjects[4]
);
let postEightFive: Post = new Post(
  "5",
  "post eight",
  "Bryan had made peace with himself and felt comfortable with the choices he made. This had made all the difference in the world. Being alone no longer bothered him and this was essential since there was a good chance he might spend the rest of his life alone in a cell.",
  "8 Mars",
  listOfObjects[4]
);
let postNineFive: Post = new Post(
  "5",
  "post nine",
  "He couldn't remember exactly where he had read it, but he was sure that he had. The fact that she didn't believe him was quite frustrating as he began to search the Internet to find the article. It wasn't as if it was something that seemed impossible. Yet she insisted on always seeing the source whenever he stated a fact.",
  "9 Mars",
  listOfObjects[4]
);
let postTenFive: Post = new Post(
  "5",
  "post ten",
  "He dropped the ball. While most people would think that this was a metaphor of some type, in Joe's case it was absolutely literal. He had hopes of reaching the Major League and that dream was now it great jeopardy. All because he had dropped the ball.",
  "10 Mars",
  listOfObjects[4]
);

listOfPost.push(
  postOneFive,
  postTwoFive,
  postThreeFive,
  postFourFive,
  postFiveFive,
  postSixFive,
  postSevenFive,
  postEightFive,
  postNineFive,
  postTenFive
);

//
// TILL BLOGG 6
//
  
let postOneSix: Post = new Post(
  "6",
  "post one",
  "The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.",
  "1 April",
  listOfObjects[5]
);
let postTwoSix: Post = new Post(
  "6",
  "post two",
  "The river slowly meandered through the open space. It had hidden secrets that it didn't want to reveal. It had a well-planned strategy to appear calm, inviting, and appealing. That's how the river lured her unknowing victims to her water's edge.",
  "2 April",
  listOfObjects[5]
);
let postThreeSix: Post = new Post(
  "6",
  "post three",
  "The chair sat in the corner where it had been for over 25 years. The only difference was there was someone actually sitting in it. How long had it been since someone had done that? Ten years or more he imagined. Yet there was no denying the presence in the chair now.",
  "3 April",
  listOfObjects[5]
);
let postFourSix: Post = new Post(
  "6",
  "post four",
  "I recollect that my first exploit in squirrel-shooting was in a grove of tall walnut-trees that shades one side of the valley. I had wandered into it at noontime, when all nature is peculiarly quiet, and was startled by the roar of my own gun, as it broke the Sabbath stillness around and was prolonged and reverberated by the angry echoes.",
  "4 April",
  listOfObjects[5]
);
let postFiveSix: Post = new Post(
  "6",
  "post five",
  "Should he write it down? That was the question running through his mind. He couldn't believe what had just happened and he knew nobody else would believe him as well. Even if he documented what had happened by writing it down, he still didn't believe anyone would still believe it. So the question remained. Was it be worth it to actually write it down?",
  "5 April",
  listOfObjects[5]
);
let postSixSix: Post = new Post(
  "6",
  "post six",
  "There was little doubt that the bridge was unsafe. All one had to do was look at it to know that with certainty. Yet Bob didn't see another option. He may have been able to work one out if he had a bit of time to think things through, but time was something he didn't have. A choice needed to be made, and it needed to be made quickly.",
  "6 April",
  listOfObjects[5]
);
let postSevenSix: Post = new Post(
  "6",
  "post seven",
  "The red ball sat proudly at the top of the toybox. It had been the last to be played with and anticipated it would be the next as well. The other toys grumbled beneath. At one time each had held the spot of the red ball, but over time they had sunk deeper and deeper into the toy box.",
  "7 April",
  listOfObjects[5]
);
let postEightSix: Post = new Post(
  "6",
  "post eight",
  "Bryan had made peace with himself and felt comfortable with the choices he made. This had made all the difference in the world. Being alone no longer bothered him and this was essential since there was a good chance he might spend the rest of his life alone in a cell.",
  "8 April",
  listOfObjects[5]
);
let postNineSix: Post = new Post(
  "6",
  "post nine",
  "He couldn't remember exactly where he had read it, but he was sure that he had. The fact that she didn't believe him was quite frustrating as he began to search the Internet to find the article. It wasn't as if it was something that seemed impossible. Yet she insisted on always seeing the source whenever he stated a fact.",
  "9 April",
  listOfObjects[5]
);
let postTenSix: Post = new Post(
  "6",
  "post ten",
  "He dropped the ball. While most people would think that this was a metaphor of some type, in Joe's case it was absolutely literal. He had hopes of reaching the Major League and that dream was now it great jeopardy. All because he had dropped the ball.",
  "10 April",
  listOfObjects[5]
);

listOfPost.push(
  postOneSix,
  postTwoSix,
  postThreeSix,
  postFourSix,
  postFiveSix,
  postSixSix,
  postSevenSix,
  postEightSix,
  postNineSix,
  postTenSix
);

//
// TILL BLOGG 7
//
  
let postOneSeven: Post = new Post(
  "7",
  "post one",
  "The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.",
  "1 Maj",
  listOfObjects[6]
);
let postTwoSeven: Post = new Post(
  "7",
  "post two",
  "The river slowly meandered through the open space. It had hidden secrets that it didn't want to reveal. It had a well-planned strategy to appear calm, inviting, and appealing. That's how the river lured her unknowing victims to her water's edge.",
  "2 Maj",
  listOfObjects[6]
);
let postThreeSeven: Post = new Post(
  "7",
  "post three",
  "The chair sat in the corner where it had been for over 25 years. The only difference was there was someone actually sitting in it. How long had it been since someone had done that? Ten years or more he imagined. Yet there was no denying the presence in the chair now.",
  "3 Maj",
  listOfObjects[6]
);
let postFourSeven: Post = new Post(
  "7",
  "post four",
  "I recollect that my first exploit in squirrel-shooting was in a grove of tall walnut-trees that shades one side of the valley. I had wandered into it at noontime, when all nature is peculiarly quiet, and was startled by the roar of my own gun, as it broke the Sabbath stillness around and was prolonged and reverberated by the angry echoes.",
  "4 Maj",
  listOfObjects[6]
);
let postFiveSeven: Post = new Post(
  "7",
  "post five",
  "Should he write it down? That was the question running through his mind. He couldn't believe what had just happened and he knew nobody else would believe him as well. Even if he documented what had happened by writing it down, he still didn't believe anyone would still believe it. So the question remained. Was it be worth it to actually write it down?",
  "5 Maj",
  listOfObjects[6]
);
let postSixSeven: Post = new Post(
  "7",
  "post six",
  "There was little doubt that the bridge was unsafe. All one had to do was look at it to know that with certainty. Yet Bob didn't see another option. He may have been able to work one out if he had a bit of time to think things through, but time was something he didn't have. A choice needed to be made, and it needed to be made quickly.",
  "6 Maj",
  listOfObjects[6]
);
let postSevenSeven: Post = new Post(
  "7",
  "post seven",
  "The red ball sat proudly at the top of the toybox. It had been the last to be played with and anticipated it would be the next as well. The other toys grumbled beneath. At one time each had held the spot of the red ball, but over time they had sunk deeper and deeper into the toy box.",
  "7 Maj",
  listOfObjects[6]
);
let postEightSeven: Post = new Post(
  "7",
  "post eight",
  "Bryan had made peace with himself and felt comfortable with the choices he made. This had made all the difference in the world. Being alone no longer bothered him and this was essential since there was a good chance he might spend the rest of his life alone in a cell.",
  "8 Maj",
  listOfObjects[6]
);
let postNineSeven: Post = new Post(
  "7",
  "post nine",
  "He couldn't remember exactly where he had read it, but he was sure that he had. The fact that she didn't believe him was quite frustrating as he began to search the Internet to find the article. It wasn't as if it was something that seemed impossible. Yet she insisted on always seeing the source whenever he stated a fact.",
  "9 Maj",
  listOfObjects[6]
);
let postTenSeven: Post = new Post(
  "7",
  "post ten",
  "He dropped the ball. While most people would think that this was a metaphor of some type, in Joe's case it was absolutely literal. He had hopes of reaching the Major League and that dream was now it great jeopardy. All because he had dropped the ball.",
  "10 Maj",
  listOfObjects[6]
);

listOfPost.push(
  postOneSeven,
  postTwoSeven,
  postThreeSeven,
  postFourSeven,
  postFiveSeven,
  postSixSeven,
  postSevenSeven,
  postEightSeven,
  postNineSeven,
  postTenSeven
);

//
// TILL BLOGG 8
//
  
let postOneEight: Post = new Post(
  "8",
  "post one",
  "The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.",
  "1 Juni",
  listOfObjects[7]
);
let postTwoEight: Post = new Post(
  "8",
  "post two",
  "The river slowly meandered through the open space. It had hidden secrets that it didn't want to reveal. It had a well-planned strategy to appear calm, inviting, and appealing. That's how the river lured her unknowing victims to her water's edge.",
  "2 Juni",
  listOfObjects[7]
);
let postThreeEight: Post = new Post(
  "8",
  "post three",
  "The chair sat in the corner where it had been for over 25 years. The only difference was there was someone actually sitting in it. How long had it been since someone had done that? Ten years or more he imagined. Yet there was no denying the presence in the chair now.",
  "3 Juni",
  listOfObjects[7]
);
let postFourEight: Post = new Post(
  "8",
  "post four",
  "I recollect that my first exploit in squirrel-shooting was in a grove of tall walnut-trees that shades one side of the valley. I had wandered into it at noontime, when all nature is peculiarly quiet, and was startled by the roar of my own gun, as it broke the Sabbath stillness around and was prolonged and reverberated by the angry echoes.",
  "4 Juni",
  listOfObjects[7]
);
let postFiveEight: Post = new Post(
  "8",
  "post five",
  "Should he write it down? That was the question running through his mind. He couldn't believe what had just happened and he knew nobody else would believe him as well. Even if he documented what had happened by writing it down, he still didn't believe anyone would still believe it. So the question remained. Was it be worth it to actually write it down?",
  "5 Juni",
  listOfObjects[7]
);
let postSixEight: Post = new Post(
  "8",
  "post six",
  "There was little doubt that the bridge was unsafe. All one had to do was look at it to know that with certainty. Yet Bob didn't see another option. He may have been able to work one out if he had a bit of time to think things through, but time was something he didn't have. A choice needed to be made, and it needed to be made quickly.",
  "6 Juni",
  listOfObjects[7]
);
let postSevenEight: Post = new Post(
  "8",
  "post seven",
  "The red ball sat proudly at the top of the toybox. It had been the last to be played with and anticipated it would be the next as well. The other toys grumbled beneath. At one time each had held the spot of the red ball, but over time they had sunk deeper and deeper into the toy box.",
  "7 Juni",
  listOfObjects[7]
);
let postEightEight: Post = new Post(
  "8",
  "post eight",
  "Bryan had made peace with himself and felt comfortable with the choices he made. This had made all the difference in the world. Being alone no longer bothered him and this was essential since there was a good chance he might spend the rest of his life alone in a cell.",
  "8 Juni",
  listOfObjects[7]
);
let postNineEight: Post = new Post(
  "8",
  "post nine",
  "He couldn't remember exactly where he had read it, but he was sure that he had. The fact that she didn't believe him was quite frustrating as he began to search the Internet to find the article. It wasn't as if it was something that seemed impossible. Yet she insisted on always seeing the source whenever he stated a fact.",
  "9 Juni",
  listOfObjects[7]
);
let postTenEight: Post = new Post(
  "8",
  "post ten",
  "He dropped the ball. While most people would think that this was a metaphor of some type, in Joe's case it was absolutely literal. He had hopes of reaching the Major League and that dream was now it great jeopardy. All because he had dropped the ball.",
  "10 Juni",
  listOfObjects[7]
);

listOfPost.push(
  postOneEight,
  postTwoEight,
  postThreeEight,
  postFourEight,
  postFiveEight,
  postSixEight,
  postSevenEight,
  postEightEight,
  postNineEight,
  postTenEight
);

//
// TILL BLOGG 9
//
  
let postOneNine: Post = new Post(
  "9",
  "post one",
  "The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.",
  "1 Juli",
  listOfObjects[8]
);
let postTwoNine: Post = new Post(
  "9",
  "post two",
  "The river slowly meandered through the open space. It had hidden secrets that it didn't want to reveal. It had a well-planned strategy to appear calm, inviting, and appealing. That's how the river lured her unknowing victims to her water's edge.",
  "2 Juli",
  listOfObjects[8]
);
let postThreeNine: Post = new Post(
  "9",
  "post three",
  "The chair sat in the corner where it had been for over 25 years. The only difference was there was someone actually sitting in it. How long had it been since someone had done that? Ten years or more he imagined. Yet there was no denying the presence in the chair now.",
  "3 Juli",
  listOfObjects[8]
);
let postFourNine: Post = new Post(
  "9",
  "post four",
  "I recollect that my first exploit in squirrel-shooting was in a grove of tall walnut-trees that shades one side of the valley. I had wandered into it at noontime, when all nature is peculiarly quiet, and was startled by the roar of my own gun, as it broke the Sabbath stillness around and was prolonged and reverberated by the angry echoes.",
  "4 Juli",
  listOfObjects[8]
);
let postFiveNine: Post = new Post(
  "9",
  "post five",
  "Should he write it down? That was the question running through his mind. He couldn't believe what had just happened and he knew nobody else would believe him as well. Even if he documented what had happened by writing it down, he still didn't believe anyone would still believe it. So the question remained. Was it be worth it to actually write it down?",
  "5 Juli",
  listOfObjects[8]
);
let postSixNine: Post = new Post(
  "9",
  "post six",
  "There was little doubt that the bridge was unsafe. All one had to do was look at it to know that with certainty. Yet Bob didn't see another option. He may have been able to work one out if he had a bit of time to think things through, but time was something he didn't have. A choice needed to be made, and it needed to be made quickly.",
  "6 Juli",
  listOfObjects[8]
);
let postSevenNine: Post = new Post(
  "9",
  "post seven",
  "The red ball sat proudly at the top of the toybox. It had been the last to be played with and anticipated it would be the next as well. The other toys grumbled beneath. At one time each had held the spot of the red ball, but over time they had sunk deeper and deeper into the toy box.",
  "7 Juli",
  listOfObjects[8]
);
let postEightNine: Post = new Post(
  "9",
  "post eight",
  "Bryan had made peace with himself and felt comfortable with the choices he made. This had made all the difference in the world. Being alone no longer bothered him and this was essential since there was a good chance he might spend the rest of his life alone in a cell.",
  "8 Juli",
  listOfObjects[8]
);
let postNineNine: Post = new Post(
  "9",
  "post nine",
  "He couldn't remember exactly where he had read it, but he was sure that he had. The fact that she didn't believe him was quite frustrating as he began to search the Internet to find the article. It wasn't as if it was something that seemed impossible. Yet she insisted on always seeing the source whenever he stated a fact.",
  "9 Juli",
  listOfObjects[8]
);
let postTenNine: Post = new Post(
  "9",
  "post ten",
  "He dropped the ball. While most people would think that this was a metaphor of some type, in Joe's case it was absolutely literal. He had hopes of reaching the Major League and that dream was now it great jeopardy. All because he had dropped the ball.",
  "10 Juli",
  listOfObjects[8]
);

listOfPost.push(
  postOneNine,
  postTwoNine,
  postThreeNine,
  postFourNine,
  postFiveNine,
  postSixNine,
  postSevenNine,
  postEightNine,
  postNineNine,
  postTenNine
);

//
// TILL BLOGG 10
//
  
let postOneTen: Post = new Post(
  "10",
  "post one",
  "The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved. The answer to that question was obvious. Peter dropped the package into the mailbox so he would never have to see it again.",
  "1 Augusti",
  listOfObjects[9]
);
let postTwoTen: Post = new Post(
  "10",
  "post two",
  "The river slowly meandered through the open space. It had hidden secrets that it didn't want to reveal. It had a well-planned strategy to appear calm, inviting, and appealing. That's how the river lured her unknowing victims to her water's edge.",
  "2 Augusti",
  listOfObjects[9]
);
let postThreeTen: Post = new Post(
  "10",
  "post three",
  "The chair sat in the corner where it had been for over 25 years. The only difference was there was someone actually sitting in it. How long had it been since someone had done that? Ten years or more he imagined. Yet there was no denying the presence in the chair now.",
  "3 Augusti",
  listOfObjects[9]
);
let postFourTen: Post = new Post(
  "10",
  "post four",
  "I recollect that my first exploit in squirrel-shooting was in a grove of tall walnut-trees that shades one side of the valley. I had wandered into it at noontime, when all nature is peculiarly quiet, and was startled by the roar of my own gun, as it broke the Sabbath stillness around and was prolonged and reverberated by the angry echoes.",
  "4 Augusti",
  listOfObjects[9]
);
let postFiveTen: Post = new Post(
  "10",
  "post five",
  "Should he write it down? That was the question running through his mind. He couldn't believe what had just happened and he knew nobody else would believe him as well. Even if he documented what had happened by writing it down, he still didn't believe anyone would still believe it. So the question remained. Was it be worth it to actually write it down?",
  "5 Augusti",
  listOfObjects[9]
);
let postSixTen: Post = new Post(
  "10",
  "post six",
  "There was little doubt that the bridge was unsafe. All one had to do was look at it to know that with certainty. Yet Bob didn't see another option. He may have been able to work one out if he had a bit of time to think things through, but time was something he didn't have. A choice needed to be made, and it needed to be made quickly.",
  "6 Augusti",
  listOfObjects[9]
);
let postSevenTen: Post = new Post(
  "10",
  "post seven",
  "The red ball sat proudly at the top of the toybox. It had been the last to be played with and anticipated it would be the next as well. The other toys grumbled beneath. At one time each had held the spot of the red ball, but over time they had sunk deeper and deeper into the toy box.",
  "7 Augusti",
  listOfObjects[9]
);
let postEightTen: Post = new Post(
  "10",
  "post eight",
  "Bryan had made peace with himself and felt comfortable with the choices he made. This had made all the difference in the world. Being alone no longer bothered him and this was essential since there was a good chance he might spend the rest of his life alone in a cell.",
  "8 Augusti",
  listOfObjects[9]
);
let postNineTen: Post = new Post(
  "10",
  "post nine",
  "He couldn't remember exactly where he had read it, but he was sure that he had. The fact that she didn't believe him was quite frustrating as he began to search the Internet to find the article. It wasn't as if it was something that seemed impossible. Yet she insisted on always seeing the source whenever he stated a fact.",
  "9 Augusti",
  listOfObjects[9]
);
let postTenTen: Post = new Post(
  "10",
  "post ten",
  "He dropped the ball. While most people would think that this was a metaphor of some type, in Joe's case it was absolutely literal. He had hopes of reaching the Major League and that dream was now it great jeopardy. All because he had dropped the ball.",
  "10 Augusti",
  listOfObjects[9]
);

listOfPost.push(
  postOneTen,
  postTwoTen,
  postThreeTen,
  postFourTen,
  postFiveTen,
  postSixTen,
  postSevenTen,
  postEightTen,
  postNineTen,
  postTenTen
);