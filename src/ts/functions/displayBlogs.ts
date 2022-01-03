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
    /*    const bloggId: HTMLSpanElement = document.createElement("span");
    bloggId.className = "idOfBlogg";
    bloggId.innerHTML = listOfObjects[i].id;*/

    //bilden
    const imgDiv: HTMLDivElement = document.createElement("div");
    imgDiv.className = "imgContainer";
    imgDiv.setAttribute(
      "style",
      `background-image:url(${listOfObjects[i].img})`
    );
    console.log(listOfObjects[i].img);
    div.appendChild(imgDiv);
    //overlay div på img
    const overlay: HTMLDivElement = document.createElement("div");
    overlay.className = "overlay";
    imgDiv.appendChild(overlay);
    //titlen
    const spanTitle: HTMLSpanElement = document.createElement("span");
    spanTitle.className = "titleContent";
    spanTitle.innerHTML = listOfObjects[i].title;
    overlay.appendChild(spanTitle);

    //Date
    const userDate: HTMLSpanElement = document.createElement("p");
    userDate.className = "userDate";
    userDate.innerHTML = "Senast uppdaterad " + listOfObjects[i].date;
    overlay.appendChild(userDate);

    //div för texterna nedan
    const divtwo: HTMLDivElement = document.createElement("div");
    divtwo.className = "contentContainerTwo";
    div.appendChild(divtwo);

    //User
    const userTitle: HTMLSpanElement = document.createElement("h2");
    userTitle.className = "userTitle";
    userTitle.innerHTML = listOfObjects[i].user;
    divtwo.appendChild(userTitle);
    //Icon
    const icon: HTMLSpanElement = document.createElement("i");
    icon.className = "fa fa-instagram instaIcon";
    divtwo.appendChild(icon);
  }
}
