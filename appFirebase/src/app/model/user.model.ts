export class User{
    id: string;
    nome: string;
    email: string;
    imagem: string;

    toJson(){
        return JSON.parse( JSON.stringify( this ));
    }



}