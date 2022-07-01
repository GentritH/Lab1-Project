import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Njoftim } from "../models/njoftim";
import {format} from 'date-fns';

export default class NjoftimStore {
    njoftimRegistry = new Map<string, Njoftim>();
    selectedNjoftim: Njoftim | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = false;

    constructor() {
        makeAutoObservable(this)
    }

    get njoftimetByDate() {
        return Array.from(this.njoftimRegistry.values()).sort((a, b) =>
            a.date!.getTime() - b.date!.getTime());
    }

    get groupedNjoftimet() {
        return Object.entries(
            this.njoftimetByDate.reduce((njoftimet, njoftim) => {
                const date = format(njoftim.date!, 'dd MMM yyyy');
                njoftimet[date] = njoftimet[date] ? [...njoftimet[date], njoftim] : [njoftim];
                return njoftimet;
            }, {} as {[key: string]: Njoftim[]})
        )
    }

    loadNjoftimet = async () => {
        this.loadingInitial = true;
        try {
            const njoftimet = await agent.Njoftimet.list();
            njoftimet.forEach(njoftim => {
                this.setNjoftim(njoftim);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    loadNjoftim = async (id: string) => {
        let njoftim = this.getNjoftim(id);
        if (njoftim) {
            this.selectedNjoftim = njoftim;
            return njoftim;
        } else {
            this.loadingInitial = true;
            try {
                njoftim = await agent.Njoftimet.details(id);
                this.setNjoftim(njoftim);
                runInAction(() => {
                    this.selectedNjoftim = njoftim;
                })
                this.setLoadingInitial(false);
                return njoftim;
            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setNjoftim = (njoftim: Njoftim) => {
        njoftim.date = new Date(njoftim.date!);
        this.njoftimRegistry.set(njoftim.id, njoftim);
    }

    private getNjoftim = (id: string) => {
        return this.njoftimRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    createNjoftim = async (njoftim: Njoftim) => {
        this.loading = true;
        try {
            await agent.Njoftimet.create(njoftim);
            runInAction(() => {
                this.njoftimRegistry.set(njoftim.id, njoftim);
                this.selectedNjoftim = njoftim;
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

    updateNjoftim = async (njoftim: Njoftim) => {
        this.loading = true;
        try {
            await agent.Njoftimet.update(njoftim);
            runInAction(() => {
                this.njoftimRegistry.set(njoftim.id, njoftim);
                this.selectedNjoftim = njoftim;
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

    deleteNjoftim = async (id: string) => {
        this.loading = true;
        try {
            await agent.Njoftimet.delete(id);
            runInAction(() => {
                this.njoftimRegistry.delete(id);
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