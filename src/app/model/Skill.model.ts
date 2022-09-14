export class Skill{
    id! : number;
    skill: string;
    progress: number;
    icon: string;

    constructor( id: number, skill: string, progress: number, icon: string ){
        this.id = id;
        this.skill = skill;
        this.progress = progress;
        this.icon = icon;
    }

}