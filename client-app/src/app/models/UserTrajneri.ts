export interface Trajneri {    
    emri: string,
    mbiemri: string,
    email: string,
    id: string,
    userName: string,
    roli: string,
    normalizedUserName: string,
    token: string


}


export interface TrajneriFormValues {
    
    userName: string;
    emri: string;
    mbiemri: string;
    Email: string;
    Password: string;
    Roli: string;
    token: string;
    image?: string;
  
   
}