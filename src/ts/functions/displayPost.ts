import { listOfPost } from "../modules/postModule";
import { listOfPostTwo } from "../modules/postModule";
import { listOfPostThree } from "../modules/postModule";
import { listOfPostFour } from "../modules/postModule";
import { listOfPostFive } from "../modules/postModule";
import { listOfPostSix } from "../modules/postModule";
import { listOfPostSeven } from "../modules/postModule";
import { listOfPostEight } from "../modules/postModule";
import { listOfPostNine } from "../modules/postModule";
import { listOfPostTen } from "../modules/postModule";
import { Blog, listOfObjects } from "../modules/bloggModule";
export function displayPost() {
  console.log(listOfPost);
  const mainSection: HTMLDivElement = document.getElementById(
    "sectionPost"
  ) as HTMLDivElement;

  for (let i = 0; i < listOfPost.length; i++) {
    const div: HTMLDivElement = document.createElement("div");
    div.className = "contentSection";
    mainSection.appendChild(div);
    //Post titel
    const postTitle: HTMLSpanElement = document.createElement("span");
    postTitle.className = "titlePost";
    postTitle.innerHTML = listOfPost[i].title;
    mainSection.appendChild(postTitle);
    console.log(postTitle);
    //Date
    const postDate: HTMLSpanElement = document.createElement("p");
    postDate.className = "postDate";
    postDate.innerHTML = "Senast uppdaterad " + listOfPost[i].date;
    mainSection.appendChild(postDate);
    //post texterna
    const userConten: HTMLSpanElement = document.createElement("p");
    userConten.className = "userContent";
    userConten.innerHTML = listOfPost[i].text;
    mainSection.appendChild(userConten);
  }
}

export function displayPostTwo() {
  console.log(listOfPostTwo);
}
export function displayPostThree() {
  console.log(listOfPostTwo);
}
export function displayPostFour() {
  console.log(listOfPostTwo);
}
export function displayPostFive() {
  console.log(listOfPostTwo);
}
export function displayPostSix() {
  console.log(listOfPostTwo);
}
export function displayPostSeven() {
  console.log(listOfPostTwo);
}
export function displayPostEight() {
  console.log(listOfPostTwo);
}
export function displayPostNine() {
  console.log(listOfPostTwo);
}
export function displayPostTen() {
  console.log(listOfPostTwo);
}
