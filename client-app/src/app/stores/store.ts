import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import CommonStore from "./commonStore";
import ModalStore from "./modalStore";
import NjoftimStore from "./njoftimStore";
import UserStore from "./userStore";
import LojtariStore from "./LojtariStore";
import TrajneriStore from "./TrajneriStore";

interface Store {
    activityStore: ActivityStore;
    commonStore: CommonStore;
    userStore: UserStore;
    modalStore: ModalStore;
    njoftimStore: NjoftimStore;
    TrajneriStore: TrajneriStore;
    lojtariStore: LojtariStore;

}

export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    modalStore: new ModalStore(),
    njoftimStore: new NjoftimStore(),
    TrajneriStore: new TrajneriStore(),
    lojtariStore: new LojtariStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}