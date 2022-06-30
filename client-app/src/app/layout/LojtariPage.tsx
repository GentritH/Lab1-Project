import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "../stores/store";
import NavLojtari from "./NavLojtari";



export default observer(function LojtariPage() {
    
    const { lojtariStore,  commonStore } = useStore();
    useEffect(() => {
        if (commonStore.token) {
            lojtariStore.getUserLojtari().finally(() => commonStore.setAppLoaded());
        } else {
            commonStore.setAppLoaded();
        }
    }, [commonStore, lojtariStore])


    return(
        <NavLojtari />
    )
})