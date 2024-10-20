export class Recette {
    constructor(
        public id : number,
        public title : string,
        public description : string,
        public author : string,
        public date : Date,
        public likes : number,
        public image : string 
    ){}

}