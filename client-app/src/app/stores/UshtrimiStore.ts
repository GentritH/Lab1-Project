import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Ushtrimi } from "../models/ushtrimi";

export default class UshtrimiStore {
    ushtrimet: Ushtrimi[] = [];
    ushtrimiRegistry = new Map<string, Ushtrimi>();
    selectedUshtrimi: Ushtrimi | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;


    constructor() {
        makeAutoObservable(this);
        // ".bound" e ben bind function setTitle per classen UshtrimiStore

    }
    //nese e fshijme .bound edhe tek funksioni e bejme arrow function atehere funksionon
   
    get ushtrimetCount(){
        return this.ushtrimiRegistry.size;
    }

    public getEmriUshtrimitById = (id: string) => {
        return this.ushtrimiRegistry.get(id)?.emriUshtrimit;
    };

    public OrariUshtrimit = (id: string) => {
        return this.ushtrimiRegistry.get(id)?.emriUshtrimit;
    };
    
    get ushtrimetById(){
        return Array.from(this.ushtrimiRegistry.values()).sort();
    }

    get groupedUshtrimet(){
        return Object.entries(
            this.ushtrimetById.reduce((ushtrimet) =>{
                // const id = format(ushtrimi.id!,0|1|2|undefined);
                // ushtrimet[id] = ushtrimet[id] ? [...ushtrimet[id],ushtrimi] :[ushtrimi];
                return ushtrimet;
            },{} as {[key:string]:Ushtrimi[]})
        )
    }

    selectUshtrimi = (id: string) => {
        this.selectedUshtrimi = this.ushtrimiRegistry.get(id);
    }

    cancelSelectedUshtrimi = () => {
        this.selectedUshtrimi = undefined;
    }
    openForm = (id?: string) => {
        id ? this.selectUshtrimi(id) : this.cancelSelectedUshtrimi();
        this.editMode = true;

    }
    closeForm = () => {
        this.editMode = false;
    }

    loadUshtrimet = async () => {
        this.loadingInitial = true;
        try {
            const ushtrimet = await agent.Ushtrimet.list(); 
            ushtrimet.forEach(ushtrimi => {
                this.setUshtrimi(ushtrimi);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);

            this.setLoadingInitial(false);
        }
    }
    loadUshtrimi = async (id: string) => {
        let ushtrimi = this.getUshtrimi(id);
        if (ushtrimi) {
            this.selectedUshtrimi = ushtrimi;
            return ushtrimi;
        } else {
            this.loadingInitial = true;
            try {
                ushtrimi = await agent.Ushtrimet.details(id);
                this.setUshtrimi(ushtrimi);
                runInAction(() => {
                    this.selectedUshtrimi = ushtrimi;
                })
                this.setLoadingInitial(false);
                return ushtrimi;

            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setUshtrimi = (ushtrimi: Ushtrimi) => {
        this.ushtrimiRegistry.set(ushtrimi.id, ushtrimi);
    }

    private getUshtrimi = (id: string) => {
        return this.ushtrimiRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    createUshtrimi = async (ushtrimi: Ushtrimi) => {
        this.loading = true;

        try {
            await agent.Ushtrimet.create(ushtrimi);
            runInAction(() => {
                this.ushtrimiRegistry.set(ushtrimi.id, ushtrimi);
                this.selectedUshtrimi = ushtrimi;
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

    updateUshtrimi = async (ushtrimi: Ushtrimi) => {
        this.loading = true;
        try {
            await agent.Ushtrimet.update(ushtrimi);
            runInAction(() => {
                this.ushtrimiRegistry.set(ushtrimi.id, ushtrimi);
                this.selectedUshtrimi = ushtrimi;
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

    deleteUshtrimi = async (id: string) => {
        this.loading = true;
        try {
            await agent.Ushtrimet.delete(id);
            runInAction(() => {
                this.ushtrimiRegistry.delete(id);
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