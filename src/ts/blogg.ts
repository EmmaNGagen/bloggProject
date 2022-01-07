import { theBarNav } from "./header";
import { postImgList } from "./modules/postImgModule";
import { listOfPost } from "./modules/postModule";

window.onload = function () {
  theBarNav();
  getBlogbyId();
};

let urlParams = new URLSearchParams(window.location.search);
let bloggId = urlParams.get("id");

let heroContainer: HTMLDivElement = document.getElementById(
  "hero-container"
) as HTMLDivElement;

function getBlogbyId (){
    for (let i = 0; i < postImgList.length; i++) {
        if(bloggId === postImgList[i].id){

            let postImgContainer: HTMLDivElement = document.createElement("div");
            postImgContainer.className = "post-img-container";
            heroContainer.appendChild(postImgContainer);

            let postImgHeader: HTMLDivElement = document.createElement("div");
            postImgHeader.className = "post-img-header";
            postImgHeader.setAttribute("style", `background-image:url(${postImgList[i].img})`);
            postImgContainer.appendChild(postImgHeader);

            console.log("Du ser bild nr: " + postImgList[i].id);
            console.log("Bilden: " + postImgList[i].img);
        }
    }
    for (let i = 0; i < listOfPost.length; i++) {
        if(bloggId === listOfPost[i].id){

            let userContainer: HTMLDivElement = document.createElement("div");
            userContainer.className = "user-container";
            heroContainer.appendChild(userContainer);
            let postUser: HTMLParagraphElement = document.createElement("p");
            postUser.className = "post-user";
            postUser.innerHTML = listOfPost[i].blogId.user;
            userContainer.appendChild(postUser);

            let dateContainer: HTMLDivElement = document.createElement("div");
            dateContainer.className = "date-container";
            heroContainer.appendChild(dateContainer);
            let postDate: HTMLParagraphElement = document.createElement("p");
            postDate.className = "post-date";
            postDate.innerHTML = listOfPost[i].date;
            dateContainer.appendChild(postDate);

            let titleContainer: HTMLDivElement = document.createElement("div");
            titleContainer.className = "title-container";
            heroContainer.appendChild(titleContainer);
            let postTitle: HTMLParagraphElement = document.createElement("p");
            postTitle.className = "post-title";
            postTitle.innerHTML = listOfPost[i].title;
            titleContainer.appendChild(postTitle);

            let textContainer: HTMLDivElement = document.createElement("div");
            textContainer.className = "text-container";
            heroContainer.appendChild(textContainer);
            let postText: HTMLParagraphElement = document.createElement("p");
            postText.className = "post-text";
            postText.innerHTML = listOfPost[i].text;
            textContainer.appendChild(postText);

            console.log("blogg nr: " + listOfPost[i].id);
            console.log("som tillhör: " + listOfPost[i].blogId.user);
        }
    }
}
