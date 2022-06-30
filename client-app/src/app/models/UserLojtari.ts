export interface Lojtaret {
    id: string,
    emri: string,
    mbiemri:string,
    email:string,
    grupmosha: string,
    emriPrindit:string,
    numriTelefonit: string,
    userName: string,
    normalizedUserName: string,
    token:string,
    password:string
}

export interface LojtariFormValues{
    Emri:string;
    Mbiemri:string;
    Username:string;
    Email: string;
    Password:string;
    token:string;
}