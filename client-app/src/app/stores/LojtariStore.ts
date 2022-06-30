import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { LojtariFormValues, Lojtaret } from "../models/UserLojtari";
import { store } from "./store";
import { history } from "../..";
import { v4 as uuid } from "uuid";


export default class LojtariStore {
    lojtaret: Lojtaret | null = null;
    lojtariRegistry = new Map<String, Lojtaret>();
    selectedLojtari: Lojtaret | undefined =  undefined;
    editMode =  false;
    loading = false;
    loadingInitial = true;


    constructor(){
        makeAutoObservable(this)
    }

    getUserLojtari = async () => {
        try{
            const user = await agent.LojtariAccount.current();
            runInAction(() => this.lojtaret = user);
        }catch(error){
            console.log(error);
        }
        
    }
    

    get isLoggedIn(){
        return !!this.lojtaret;
    }

    get LojtariCount(){
        return this.lojtariRegistry.size;
    }

    public getEmriLojtaritById = (id: string) => {
        return this.lojtariRegistry.get(id)?.emri;
    };

    public getMbiemriLojtaritById = (id: string) => {
        return this.lojtariRegistry.get(id)?.mbiemri;
    };

    get LojtariById(){
        return Array.from(this.lojtariRegistry.values()).sort();
    }

    get groupedLojtaret(){
        return Object.entries(
            this.LojtariById.reduce((lojtaret) => {
                return lojtaret;
            }, {} as {[key:string]:Lojtaret[]})
        )
    }

    login = async(creds: LojtariFormValues) => {
        try{
            const lojtari = await agent.LojtariAccount.login(creds);
            store.commonStore.setToken(lojtari.token);
            runInAction(() => this.lojtaret = lojtari);
            history.push('/Lojtari');
            store.modalStore.closeModal();
        }catch(error){
            throw error;
        }
    }

    private setLojtari = (lojtaret: Lojtaret) => {
        this.lojtariRegistry.set(lojtaret.id, lojtaret);
    }
    
    logout = () => {
        store.commonStore.setToken(null);
        window.localStorage.removeItem('jwt');
        this.lojtaret = null;
        history.push('/');
    }

    getLojtaret = async() =>{
        try{
            const user = await agent.LojtariAccount.current();
            runInAction(() => this.lojtaret = user);
        }catch(error){
            console.log(error);
        }
    }

    getLojtarin = async () => {
      
          try {
             const lojtaret =  await agent.LojtariAccount.current();
            
   
          } catch(error) {
              console.log(error);
          }

          return this.lojtaret?.id
        
         
      }
  
    register = async(creds: LojtariFormValues) => {
        try{
            const user = await agent.LojtariAccount.register(creds);
            store.commonStore.setToken(user.token);
            runInAction(() => this.lojtaret = user);
            history.push('/Trajneri/Lojtaret');
            store.modalStore.closeModal();
        }catch(error){
            throw error;
        }
    }

    updateLojtaret = async(lojtari: Lojtaret) => {
        this.loading = true;
        try{
            await agent.Lojtarett.update(lojtari);
            runInAction(() => {
                this.lojtariRegistry.set(lojtari.id, lojtari);
                this.selectedLojtari = lojtari;
                this.editMode = false;
                this.loading = false;
            })
        }catch(error){
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    selectLojtaret = (id: string) => {
        this.selectedLojtari =  this.lojtariRegistry.get(id);
    }

    getLojtariFromId = async(id: string) => {
        console.log(id)
        return this.lojtariRegistry.get(id);
    }

    loadLojtaret = async() => {
        this.loadingInitial = true;
        try{
            const lojtari = await agent.Lojtarett.list();
            lojtari.forEach(lojtaret =>{
                this.setLojtari(lojtaret);
            })
            this.setLoadingInitial(false);
        }catch(error){
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

     getLojtari = (id: string) => {
        return this.lojtariRegistry.get(id);
    }

    loadLojtari = async(id: string) => {
        let lojtari = this.getLojtari(id);
        if(lojtari){
            this.selectedLojtari =  lojtari;
            return lojtari;
        }else{
            this.loadingInitial = true;
            try{
                lojtari = await agent.Lojtarett.details(id);
                this.setLojtari(lojtari);
                runInAction(() => {
                    this.selectedLojtari = lojtari;
                })
                this.setLoadingInitial(false);
                return lojtari;
            }catch(error){
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    createLojtari = async (lojtari: Lojtaret) => {
        this.loading = true;
        lojtari.id = uuid();
        try {
          await agent.Lojtarett.create(lojtari);
          runInAction(() => {
            this.lojtariRegistry.set(lojtari.id, lojtari);
            this.selectedLojtari = lojtari;
            this.editMode = false;
            this.loading = false;
          });
        } catch (error) {
          console.log(error);
          runInAction(() => {
            this.loading = false;
          });
        }
      };

    setLoadingInitial = (state:boolean) => {
        this.loadingInitial = state;
    }

    cancelSelectedLojtari = () => {
        this.selectedLojtari = undefined;
    }

    openForm = (id?: string) => {
        id? this.selectLojtaret(id) : this.cancelSelectedLojtari();
        this.editMode =  true;
    }

    openForm2 = (id?: string) => {
        id? this.selectLojtaret(id) : this.cancelSelectedLojtari();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    deleteLojtari = async(id: string) => {
        this.loading = true;
        try{
            await agent.Lojtarett.delete(id);
            runInAction(() => {
                this.lojtariRegistry.delete(id);
                history.push('/Trajneri/Lojtaret');
                if(this.selectedLojtari?.id === id) this.cancelSelectedLojtari();
                this.loading = false;
            })
        }catch(error){
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }
}