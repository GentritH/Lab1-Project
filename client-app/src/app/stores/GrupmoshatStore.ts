import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Grupmoshat } from "../models/grupmoshat";

export default class GrupmoshatStore {
    klasatF: Grupmoshat[] = [];
    grupmoshatRegistry = new Map<string, Grupmoshat>();
    selectedGrupmoshat: Grupmoshat | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;


    constructor() {
        makeAutoObservable(this);

    }

   
    get grupmoshatTCount(){
        return this.grupmoshatRegistry.size;
    }

    get grupmoshatTById(){
        return Array.from(this.grupmoshatRegistry.values()).sort();
    }

    public getEmriGrupmoshestById = (id: string) => {
        return this.grupmoshatRegistry.get(id)?.emriGrupmoshes;
    };

    get groupedGrupmoshatT(){
        return Object.entries(
            this.grupmoshatTById.reduce((grupmoshatT) =>{
                // const id = format(grupmoshat.id!,0|1|2|undefined);
                // grupmoshatT[id] = grupmoshatT[id] ? [...grupmoshatT[id],grupmoshat] :[grupmoshat];
                return grupmoshatT;
            },{} as {[key:string]:Grupmoshat[]})
        )
    }

    selectGrupmoshat = (id: string) => {
        this.selectedGrupmoshat = this.grupmoshatRegistry.get(id);
    }

    cancelSelectedGrupmoshat = () => {
        this.selectedGrupmoshat = undefined;
    }
    openForm = (id?: string) => {
        id ? this.selectGrupmoshat(id) : this.cancelSelectedGrupmoshat();
        this.editMode = true;

    }
    closeForm = () => {
        this.editMode = false;
    }

    loadGrupmoshatT = async () => {
        this.loadingInitial = true;
        try {
            const grupmoshatT = await agent.GrupmoshatT.list(); 
            grupmoshatT.forEach(grupmoshat => {
                this.setGrupmoshat(grupmoshat);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);

            this.setLoadingInitial(false);
        }
    }

    loadGrupmoshat = async (id: string) => {
        let grupmoshat = this.getGrupmoshat(id);
        if (grupmoshat) {
            this.selectedGrupmoshat = grupmoshat;
            return grupmoshat;
        } else {
            this.loadingInitial = true;
            try {
                grupmoshat = await agent.GrupmoshatT.details(id);
                this.setGrupmoshat(grupmoshat);
                runInAction(() => {
                    this.selectedGrupmoshat = grupmoshat;
                })
                this.setLoadingInitial(false);
                return grupmoshat;

            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setGrupmoshat = (grupmoshat: Grupmoshat) => {
        this.grupmoshatRegistry.set(grupmoshat.id, grupmoshat);
    }

    private getGrupmoshat = (id: string) => {
        return this.grupmoshatRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    createGrupmoshat = async (grupmoshat: Grupmoshat) => {
        this.loading = true;

        try {
            await agent.GrupmoshatT.create(grupmoshat);
            runInAction(() => {
                this.grupmoshatRegistry.set(grupmoshat.id, grupmoshat);
                this.selectedGrupmoshat = grupmoshat;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);

            runInAction(() => {
                this.loading = false;
            })
        }
    }

    updateGrupmoshat = async (grupmoshat: Grupmoshat) => {
        this.loading = true;
        try {
            await agent.GrupmoshatT.update(grupmoshat);
            runInAction(() => {
                this.grupmoshatRegistry.set(grupmoshat.id, grupmoshat);
                this.selectedGrupmoshat = grupmoshat;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    deleteGrupmoshat = async (id: string) => {
        this.loading = true;
        try {
            await agent.GrupmoshatT.delete(id);
            runInAction(() => {
                this.grupmoshatRegistry.delete(id);
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