import { listOfBlogs } from "./functions/bloggList";
import { Blog } from "./modules/bloggModule";

export function landingPage() {
  let wrapper: HTMLDivElement = document.querySelector("#mainWrapper");
  console.log(wrapper);

  let sectionOne: HTMLDivElement = document.createElement("div");
  sectionOne.className = "blogContainer";

  for (let i = 0; i < listOfBlogs.length; i++) {
    let sectionTwo: HTMLDivElement = document.createElement("div");
    let theId: HTMLDivElement = document.createElement("div");
    let theTitle: HTMLHeadingElement = document.createElement("h3");
    let thePicture: HTMLPictureElement = document.createElement("img");
    let theUser: HTMLParagraphElement = document.createElement("p");
    let theDate: HTMLDivElement = document.createElement("div");

    theId.innerHTML = "Id" + Blog[i].id;
    theTitle.innerHTML = "Titel" + Blog[i].title;
    thePicture.innerHTML = Blog[i].img;
    theUser.innerHTML = "User" + Blog[i].user;
    theDate.innerHTML = "Date" + Blog[i].date;

    sectionTwo.appendChild(theId);
    sectionTwo.appendChild(theTitle);
    sectionTwo.appendChild(thePicture);
    sectionTwo.appendChild(theUser);
    sectionTwo.appendChild(theDate);

    sectionOne.appendChild(sectionTwo);
    console.log(sectionTwo);
  }

  document.body.appendChild(sectionOne);
  console.log(sectionOne);
}
