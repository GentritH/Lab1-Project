import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "../stores/store";
import NavTrajneri from "./NavTrajneri";



export default observer(function TrajneriPage() {
    
    const { TrajneriStore,  commonStore } = useStore();
    useEffect(() => {
        if (commonStore.token) {
            TrajneriStore.getUser().finally(() => commonStore.setAppLoaded());
        } else {
            commonStore.setAppLoaded();
        }
    }, [commonStore, TrajneriStore])


    return(
        <NavTrajneri />
    )
})