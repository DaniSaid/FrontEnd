export class About{
    id?: number;
    nombre: string;
    provincia: string;
    pais: string;
    titulo: string;
    descripcion: string;
    imagen: string;

    constructor(id: number, nombre: string, provincia: string, pais: string, titulo: string, descripcion: string, imagen: string){
        this.id = id;
        this.nombre = nombre;
        this.provincia = provincia;
        this.pais = pais;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}