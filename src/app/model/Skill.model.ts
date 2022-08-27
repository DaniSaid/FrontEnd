export class Skill{
    id! : number;
    skill: string;
    progress: number;

    constructor( id: number,skill: string, progress: number ){
        this.id = id;
        this.skill = skill;
        this.progress = progress;
    }

}