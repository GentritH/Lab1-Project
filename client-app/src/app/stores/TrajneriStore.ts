import { makeAutoObservable, runInAction } from "mobx";
import { history } from "../..";
import agent from "../api/agent";
import { Trajneri, TrajneriFormValues } from "../models/UserTrajneri";
import { store } from "./store";

export default class TrajneriStore {
    trajneri: Trajneri | null = null;
    trajneriSelected: Trajneri | null = null;
    trajneriRegistry = new Map<String, Trajneri>();
    selectedTrajneri: Trajneri | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;
    

    constructor() {
        makeAutoObservable(this)
    }
    getUser = async () => {
        try {
            const user = await agent.TrajneriAccount.current();
            runInAction(() => this.trajneri = user);
        } catch (error) {
            console.log(error);
        }
    }
    
    get isLoggedIn() {
        return !!this.trajneri;
    }
   
    get TrajneriCount(){
        return this.trajneriRegistry.size;
    }


    get TrajneriById(){
        return Array.from(this.trajneriRegistry.values()).sort();
    }

    get groupedTrajneri(){
        return Object.entries(
            this.TrajneriById.reduce((trajneri) =>{
             
                return trajneri;
            },{} as {[key:string]:Trajneri[]})
        )
    }
    
    login = async (creds: TrajneriFormValues) => {
        try {
            const trajneret = await agent.TrajneriAccount.login(creds);
            store.commonStore.setToken(trajneret.token);
            runInAction(() => this.trajneri = trajneret);
            history.push('/Trajneri');
            store.modalStore.closeModal();
        } catch (error) {
            throw error;
        }
    }
    private setTrajneri = (trajneri: Trajneri) => {
        this.trajneriRegistry.set(trajneri.id, trajneri);
    }
    logout = () => {
        store.commonStore.setToken(null);
        window.localStorage.removeItem('jwt');
        this.trajneri = null;
        history.push('/');
    }

    getTrajnerin = async () => {
        try {
            const user = await agent.TrajneriAccount.current();
            runInAction(() => this.trajneri = user);
        } catch (error) {
            console.log(error);
        }
    }
    
    register = async (creds: TrajneriFormValues) => {
        try {
            const user = await agent.TrajneriAccount.register(creds);
            store.commonStore.setToken(user.token);
            runInAction(() => this.trajneri = user);
            history.push('/Trajneri/Trajneret');
            store.modalStore.closeModal();
        } catch (error) {
            throw error;
        }
    }

    updateTrajneri = async (trajnerii: Trajneri) => {
        this.loading = true;
        try {
            await agent.Trajnerii.update(trajnerii);
            runInAction(() => {
                this.trajneriRegistry.set(trajnerii.id, trajnerii);
                this.selectedTrajneri = trajnerii;
                this.editMode = false;
                this.loading = false

            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })

        }
    }

    

    
    selectTrajneri= (id: string) => {
        this.selectedTrajneri = this.trajneriRegistry.get(id);
    }

    getTrajneriFromId = async (id: string) => {
        console.log(id)
        return this.trajneriRegistry.get(id);
    }


    loadTrajnerin = async () => {
        this.loadingInitial = true;
        try {
            const trajneri = await agent.Trajnerii.list(); 
            trajneri.forEach(trajnerii => {
                this.setTrajneri(trajnerii);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);

            this.setLoadingInitial(false);
        }
    }
    private getTrajneri = (id: string) => {
        return this.trajneriRegistry.get(id);
    }
    loadTrajneri = async (id: string) => {
        let trajneri = this.getTrajneri(id);
        if (trajneri) {
            this.selectedTrajneri = trajneri;
            return trajneri;
        } else {
            this.loadingInitial = true;
            try {
                trajneri = await agent.Trajnerii.details(id);
                this.setTrajneri(trajneri);
                runInAction(() => {
                    this.selectedTrajneri = trajneri;
                })
                this.setLoadingInitial(false);
                return trajneri;

            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    
    cancelSelectedTrajneri = () => {
        this.selectedTrajneri = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectTrajneri(id) : this.cancelSelectedTrajneri();
        this.editMode = true;
    }

    openForm2 = (id?: string) => {
        id ? this.selectTrajneri(id) : this.cancelSelectedTrajneri();
        this.editMode = true;
    }

    closeForm = () => {
     
        this.editMode = false;
    }

  

    deleteTrajneri = async (id: string) => {
        this.loading = true;
        try {
            await agent.Trajnerii.delete(id);
            runInAction(() => {
                this.trajneriRegistry.delete(id);
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }
}


