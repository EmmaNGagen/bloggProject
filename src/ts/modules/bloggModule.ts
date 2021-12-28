export class Blog{
    id: number;
    title: string;
    img: string;
    user: string;
    date: number | string; 

    constructor(id: number, title: string, img: string, user: string, date: number | string){
        this.id = id;
        this.title = title;
        this.img = img;
        this.user = user;
        this.date = date;
    }
}