export class PostImg {
    id: string
    img: string
    constructor(id: string, img: string){
        this.id = id;
        this.img = img;
    }
}

export let postImgList: PostImg[] = [];

let postImgOne = new PostImg("1", "https://i.ibb.co/nrwnqkZ/post-img-1.jpg");
let postImgTwo = new PostImg("2", "https://i.ibb.co/SB9CPFC/post-img-2.jpg");
let postImgThree = new PostImg("3", "https://i.ibb.co/smP8vVm/Joyful-young-man-eating-a-slice-of-pizza-and-giving-a-thumb-up-isolated-on-white-background.jpg");
let postImgFour = new PostImg("4", "https://i.ibb.co/ZgcLzzq/post-img-4.jpg");
let postImgFive = new PostImg("5", "https://i.ibb.co/nnZxm16/post-img-5.jpg");
let postImgSix = new PostImg("6", "https://i.ibb.co/tcNWPhd/post-img-6.jpg");
let postImgSeven = new PostImg("7", "https://i.ibb.co/cXDkpTF/post-img-7.jpg");
let postImgEight = new PostImg("8", "https://i.ibb.co/HzhStk6/post-img-8.jpg");
let postImgNine = new PostImg("9", "https://i.ibb.co/sjpJzFh/post-img-9.jpg");
let postImgTen = new PostImg("10", "https://i.ibb.co/4s8zX68/post-img-10.jpg");

postImgList.push(
    postImgOne, 
    postImgTwo, 
    postImgThree, 
    postImgFour, 
    postImgFive, 
    postImgSix, 
    postImgSeven, 
    postImgEight, 
    postImgNine, 
    postImgTen
);