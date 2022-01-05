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

    //bilden
    const imgDiv: HTMLDivElement = document.createElement("div");
    imgDiv.className = "imgContainer";
    imgDiv.setAttribute(
      "style",
      `background-image:url(${listOfObjects[i].img})`
    );
    imgDiv.addEventListener("click", () => {
      location.href =
        "http://localhost:1234/pages/blogg.html?id=" + listOfObjects[i].id;
    });
    console.log(listOfObjects[i].img);
    div.appendChild(imgDiv);

    //overlay div på img desktop-läge
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

    /*const bloggId: HTMLSpanElement = document.createElement("span");
    bloggId.className = "bloggId";
    bloggId.innerHTML = listOfObjects[i].id;
    overlay.appendChild(bloggId);*/

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

    // div under img mobile läge
    const divUnder: HTMLDivElement = document.createElement("div");
    divUnder.className = "divUnderImg";
    div.appendChild(divUnder);
    //titlen
    const titleSpan: HTMLSpanElement = document.createElement("span");
    titleSpan.className = "titleContent";
    titleSpan.innerHTML = listOfObjects[i].title;
    divUnder.appendChild(titleSpan);

    //Date
    const dateUser: HTMLSpanElement = document.createElement("p");
    dateUser.className = "userDate";
    dateUser.innerHTML = "Senast uppdaterad " + listOfObjects[i].date;
    divUnder.appendChild(dateUser);
  }
}
