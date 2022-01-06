import { theBarNav } from "./header";
import { Blog, listOfObjects } from "./modules/bloggModule";
import { listOfAllPosts, listOfPost } from "./modules/postModule";

window.onload = function () {
  theBarNav();
  getBlogbyId();
};

let urlParams = new URLSearchParams(window.location.search);
let bloggId = urlParams.get("id");

let heroContainer: HTMLDivElement = document.getElementById("hero-container") as HTMLDivElement; 

function getBlogbyId (){
    for (let i = 0; i < listOfAllPosts.length; i++) {
        let innerLength = listOfAllPosts[i].length;
        
        for (let j = 0; j < innerLength; j++) {
            console.log();
            
        }
        // if(bloggId === listOfAllPosts[i]){
        //     let postImgContainer: HTMLDivElement = document.createElement("div");
        //     postImgContainer.className = "post-img-container";
        //     heroContainer.appendChild(postImgContainer);

        //     let blogImgContainer: HTMLDivElement = document.createElement("div");
        //     blogImgContainer.className = "blog-img-container";
        //     heroContainer.appendChild(blogImgContainer);
        //     let blogImg: HTMLDivElement = document.createElement("div");
        //     blogImg.className = "blog-img";
        //     blogImg.setAttribute(
        //         "style",
        //         `background-image:url(${listOfPost[i].blogId.img})`
        //     );
        //     blogImgContainer.appendChild(blogImg);

        //     let userContainer: HTMLDivElement = document.createElement("div");
        //     userContainer.className = "user-container";
        //     heroContainer.appendChild(userContainer);
        //     let postUser: HTMLParagraphElement = document.createElement("p");
        //     postUser.className = "post-user";
        //     postUser.innerHTML = listOfPost[i].blogId.user;
        //     userContainer.appendChild(postUser);

        //     let dateContainer: HTMLDivElement = document.createElement("div");
        //     dateContainer.className = "date-container";
        //     heroContainer.appendChild(dateContainer);
        //     let postDate: HTMLParagraphElement = document.createElement("p");
        //     postDate.className = "post-date";
        //     postDate.innerHTML = listOfPost[i].date;
        //     dateContainer.appendChild(postDate);

        //     let titleContainer: HTMLDivElement = document.createElement("div");
        //     titleContainer.className = "title-container";
        //     heroContainer.appendChild(titleContainer);
        //     let postTitle: HTMLParagraphElement = document.createElement("p");
        //     postTitle.className = "post-title";
        //     postTitle.innerHTML = listOfPost[i].title;
        //     titleContainer.appendChild(postTitle);

        //     let textContainer: HTMLDivElement = document.createElement("div");
        //     textContainer.className = "text-container";
        //     heroContainer.appendChild(textContainer);
        //     let postText: HTMLParagraphElement = document.createElement("p");
        //     postText.className = "post-text";
        //     postText.innerHTML = listOfPost[i].text;
        //     textContainer.appendChild(postText);


        //     console.log("blogg nr: " + listOfPost[i].id);
        //     console.log("som tillhör: " + listOfPost[i].blogId.user);
        // }
        
    }
}