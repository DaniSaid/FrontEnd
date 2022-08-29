export class NewUser{

    userName: string;
    password: string;
    authorities!: string[];

    constructor(userName: string, password: string){
        this.userName = userName;
        this.password = password;
    }
}