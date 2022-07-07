import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import CommonStore from "./commonStore";
import ModalStore from "./modalStore";
import NjoftimStore from "./njoftimStore";
import UserStore from "./userStore";
import LojtariStore from "./LojtariStore";
import TrajneriStore from "./TrajneriStore";
import GrupmoshatStore from "./GrupmoshatStore";
import UshtrimiStore from "./UshtrimiStore";
import OrariStore from "./OrariStore";
import RaportetStore from "./RaportetStore";

interface Store {
    activityStore: ActivityStore;
    commonStore: CommonStore;
    userStore: UserStore;
    modalStore: ModalStore;
    njoftimStore: NjoftimStore;
    TrajneriStore: TrajneriStore;
    lojtariStore: LojtariStore;
    grupmoshatStore: GrupmoshatStore;
    ushtrimiStore: UshtrimiStore;
    orariStore:OrariStore;
    raportetStore:RaportetStore;

}

export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    modalStore: new ModalStore(),
    njoftimStore: new NjoftimStore(),
    TrajneriStore: new TrajneriStore(),
    lojtariStore: new LojtariStore(),
    grupmoshatStore: new GrupmoshatStore(),
    ushtrimiStore: new UshtrimiStore(),
    orariStore: new OrariStore(),
    raportetStore: new RaportetStore(),
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}