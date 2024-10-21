export class Serie{
    id:number;
    name: string;
    channel: string;
    seasons: number;
    resumen: string;
    link: string;
    imagen: string;

    constructor(id: number, name: string, channel: string, seasons: number, resumen: string, link:string, imagen:string) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.resumen = resumen;
        this.link= link;
        this.imagen= imagen;
    }
}
