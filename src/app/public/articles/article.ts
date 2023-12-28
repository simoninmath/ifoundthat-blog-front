export class Article {
    id: number | undefined;
    title: string;
    chapo: string;
    content: string;
    picture: string;
    categorie: string[];
    created:  Date;
    updated:  Date;
  
    // Define default value for figurine Object 
    constructor(
      title: string = '',
      chapo: string = '',
      content: string = '',
      picture: string = '',
      categorie: string[] = 
      [
        'Cat 1',
        'Cat 2',
        'Cat 3',
        'Cat 4',
        'Cat 5', 
      ],
      created: Date = new Date,
      updated: Date = new Date
      ){
      
      this.title = title;
      this.chapo = chapo;
      this.content = content;
      this.picture = picture;
      this.categorie = categorie;
      this.created = created;
      this.updated = updated;
    }
  }
  