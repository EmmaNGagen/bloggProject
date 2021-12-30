import { listOfObjects } from "../modules/bloggModule";
export function displayBlogs() {
  console.log(listOfObjects);
  const mainWrapper: HTMLDivElement = document.getElementById(
    "flexRow"
  ) as HTMLDivElement;
  for (let i = 0; i < listOfObjects.length; i++) {
    //container för conten
    const div: HTMLDivElement = document.createElement("div");
    div.className = "contentContainer";
    mainWrapper.appendChild(div);
    //id
    const bloggId: HTMLSpanElement = document.createElement("span");
    bloggId.className = "idOfBlogg";
    bloggId.innerHTML = listOfObjects[i].id;
    //titlen
    const spanTitle: HTMLSpanElement = document.createElement("span");
    spanTitle.className = "titleContent";
    spanTitle.innerHTML = listOfObjects[i].title;
    div.appendChild(spanTitle);

    //bilden
    const imgDiv: HTMLDivElement = document.createElement("div");
    imgDiv.className = "imgContainer";
    imgDiv.setAttribute(
      "style",
      `background-image:url(${listOfObjects[i].img})`
    );
    console.log(listOfObjects[i].img);
    div.appendChild(imgDiv);

    //User
    const userTitle: HTMLSpanElement = document.createElement("p");
    userTitle.className = "userTitle";
    userTitle.innerHTML = listOfObjects[i].user;
    div.appendChild(userTitle);

    //Date
    const userDate: HTMLSpanElement = document.createElement("p");
    userDate.className = "userDate";
    userDate.innerHTML = listOfObjects[i].date;
    div.appendChild(userDate);
  }
}
