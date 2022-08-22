export class Experience{

    id: number;
    puesto: string;
    detalle: string;
    tipo: string;
    nombreEmpresa: string;
    fechaIni: number;
    fechaFin: number;

    constructor(id: number, puesto: string,detalle: string, tipo: string,nombreEmpresa: string,fechaIni: number,fechaFin: number){
        this.id = id;
        this.puesto = puesto;
        this.detalle = detalle;
        this.tipo = tipo;
        this.nombreEmpresa = nombreEmpresa;
        this.fechaIni = fechaIni;
        this.fechaFin = fechaFin;
    }

}