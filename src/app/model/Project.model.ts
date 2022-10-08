export class Project{
    id! : number;
    nombre: string;
    detalle: string;
    repo: string;
    web: string;
    imagen: string;

    constructor( id: number, nombre: string, detalle: string, repo: string, web: string,imagen: string ){
        this.id = id;
        this.nombre = nombre;
        this.detalle = detalle;
        this.repo = repo;
        this.web = web;
        this.imagen = imagen;
    }

}