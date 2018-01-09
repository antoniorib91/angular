export class Personagem {

    id:        number;
    nome:      string;
    img:       string;
    descricao: string;

    constructor( json: JSON ){
        this.id         = json['id'];
        this.nome       = json['nome'];
        this.img        = json['img'];
        this.descricao  = json['descricao'];
    }
    
    static parseArrayJson( obj: Array<JSON> ){
        let personagens: Array<Personagem> = [];
        
        obj.forEach( index => {
          let personagem = new Personagem( index )
          personagens.push( personagem );
        });

        return personagens;
    }



}