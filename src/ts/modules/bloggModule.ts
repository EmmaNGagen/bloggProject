export class Blog {
  id: number;
  title: string;
  img: string;
  user: string;
  date: number | string;

  constructor(
    id: number,
    title: string,
    img: string,
    user: string,
    date: number | string
  ) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.user = user;
    this.date = date;
  }
}

export let listOfObjects: Blog[] = [];
let blogOne: Blog = new Blog(
  1,
  "blog one",
  "https://i.ibb.co/Y3r1MqP/blog-img-1.jpg",
  "user one",
  "19 maj"
);
let blogTwo: Blog = new Blog(
  2,
  "blog two",
  "https://i.ibb.co/GVWVP0S/blog-img-2.jpg",
  "user two",
  "22 mars"
);
let blogThree: Blog = new Blog(
  3,
  "blog three",
  "https://i.ibb.co/wgG55g3/blog-img-3.jpg",
  "user three",
  "9 april"
);
let blogFour: Blog = new Blog(
  4,
  "blog four",
  "https://i.ibb.co/mc0Znhy/blog-img-4.jpg",
  "user four",
  "13 november"
);
let blogFive: Blog = new Blog(
  5,
  "blog five",
  "https://i.ibb.co/cKq6H78/blog-img-5.jpg",
  "user five",
  "20 juni"
);
let blogSix: Blog = new Blog(
  6,
  "blog six",
  "https://i.ibb.co/Sff23xf/blog-img-6.jpg",
  "user six",
  "16 juli"
);
let blogSeven: Blog = new Blog(
  7,
  "blog seven",
  "https://i.ibb.co/xsmvbPk/blog-img-7.jpg",
  "user seven",
  "10 september"
);
let blogEight: Blog = new Blog(
  8,
  "blog eight",
  "https://i.ibb.co/RYNfDwV/blog-img-8.jpg",
  "user eight",
  "15 november"
);
let blogNine: Blog = new Blog(
  9,
  "blog nine",
  "https://i.ibb.co/P60kTyz/blog-img-9.jpg",
  "user nine",
  "22 november"
);
let blogTen: Blog = new Blog(
  10,
  "blog ten",
  "https://i.ibb.co/cX7G5Sp/blog-img-10.jpg",
  "user ten",
  "16 januari"
);
listOfObjects.push(
  blogOne,
  blogTwo,
  blogThree,
  blogFour,
  blogFive,
  blogSix,
  blogSeven,
  blogEight,
  blogNine,
  blogTen
);
