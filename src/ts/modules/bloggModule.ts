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
  "Nyhetsblogg",
  "https://i.ibb.co/Y3r1MqP/blog-img-1.jpg",
  "Jenny Strömstedt",
  "19 maj"
);
let blogTwo: Blog = new Blog(
  2,
  "Beautyblogg",
  "https://i.ibb.co/GVWVP0S/blog-img-2.jpg",
  "Elsa Billgren",
  "22 mars"
);
let blogThree: Blog = new Blog(
  3,
  "Modeblogg",
  "https://i.ibb.co/wgG55g3/blog-img-3.jpg",
  "Janice Kavander",
  "9 april"
);
let blogFour: Blog = new Blog(
  4,
  "Musikblogg",
  "https://i.ibb.co/mc0Znhy/blog-img-4.jpg",
  "Sabina Ddumba",
  "13 november"
);
let blogFive: Blog = new Blog(
  5,
  "Livsstilsblogg",
  "https://i.ibb.co/cKq6H78/blog-img-5.jpg",
  "Filip Dikmen",
  "20 juni"
);
let blogSix: Blog = new Blog(
  6,
  "Träningsblogg",
  "https://i.ibb.co/Sff23xf/blog-img-6.jpg",
  "Jesper Johansson",
  "16 juli"
);
let blogSeven: Blog = new Blog(
  7,
  "Filmbloggen",
  "https://i.ibb.co/xsmvbPk/blog-img-7.jpg",
  "Hans Wiklund",
  "10 september"
);
let blogEight: Blog = new Blog(
  8,
  "Schlagerblogg",
  "https://i.ibb.co/RYNfDwV/blog-img-8.jpg",
  "Tobbe Ek",
  "15 november"
);
let blogNine: Blog = new Blog(
  9,
  "Modeblogg",
  "https://i.ibb.co/P60kTyz/blog-img-9.jpg",
  "Michaela Delér",
  "22 november"
);
let blogTen: Blog = new Blog(
  10,
  "Beautyblogg",
  "https://i.ibb.co/cX7G5Sp/blog-img-10.jpg",
  "Linda Hallberg",
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
