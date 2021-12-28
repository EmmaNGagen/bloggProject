import { Blog } from "./bloggModule";

export class Post {
    id: number;
    title: string;
    text: string;
    date: number | string;
    blogId: Blog;
    constructor(id: number, title: string, text: string, date: number|string, blogId: Blog){
        this.id = id;
        this.title = title;
        this.text = text;
        this.date = date;
        this.blogId = blogId;
    }
}