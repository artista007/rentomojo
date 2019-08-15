export interface IUser {
    id : number;
    name : string;
    username : string;
    email : string;
    phone : string;
    website : string;
    company: ICompany;
}

export interface ICompany{
    name: string;
    catchPhrase: string;
    bs: string;
}