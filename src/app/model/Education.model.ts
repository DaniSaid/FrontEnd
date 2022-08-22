export class Education{
    id: number;
    titulo: string;
    detalle: string;
    fechaIni: number;
    fechaFin: number;
    imagen: string;

    constructor(id: number, titulo: string, detalle: string, fechaIni: number, fechaFin: number, imagen: string){
        this.id = id;
        this.titulo = titulo;
        this.detalle = detalle;
        this.fechaIni = fechaIni;
        this.fechaFin = fechaFin;
        this.imagen = imagen;
    }
}