import { listOfObjects } from "../modules/bloggModule";
export function displayBlogs() {
  console.log(listOfObjects);
  const mainWrapper: HTMLDivElement = document.getElementById(
    "mainWrapper"
  ) as HTMLDivElement;
  for (let i = 0; i < listOfObjects.length; i++) {
    const div: HTMLDivElement = document.createElement("div");
    div.className = "imgContainer";
    div.setAttribute("style", `background-image:url(${listOfObjects[i].img})`);
    console.log(listOfObjects[i].img);
    mainWrapper.appendChild(div);
  }
}
