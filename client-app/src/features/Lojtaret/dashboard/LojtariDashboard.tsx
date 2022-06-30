import { observer } from "mobx-react-lite";
import React, { useEffect } from 'react';
import { Button, Dimmer, Grid, Loader } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import LojtariForm from "../form/LojtariForm";
import RegisterFormLojtari from "../form/RegisterFormLojtari";
import LojtariDetails from "./LojtariDetails";
import LojtariList from "./LojtariList";




export default observer(function LojtaretDashboard() {

    const { lojtariStore, modalStore } = useStore();
    const { loadLojtaret, lojtariRegistry, editMode, selectedLojtari } = lojtariStore;

    // useEffect(() => {
    //     lojtariStore.loadLojtaret();
    // }, [lojtariStore]);

    useEffect(() => {
        if (lojtariRegistry.size <= 1) loadLojtaret();
    }, [lojtariRegistry.size, loadLojtaret]);
    

    if (lojtariStore.loadingInitial) return <Dimmer active><Loader>Loading the app Fotball Academy</Loader></Dimmer>;
    return (
        <Grid>
           <Grid.Column width='16'>
                <LojtariList />
            </Grid.Column>
            <Grid.Column width='6'>

                <Button color="teal" onClick={() => modalStore.openModal(<RegisterFormLojtari />)} size='huge' >
                    Regjistro Lojtarin!
                </Button>
                <h2 >Lojtari:</h2>
                {selectedLojtari && !editMode &&
                   <LojtariDetails/> }
                {editMode &&
                    <LojtariForm />}
            </Grid.Column>
        </Grid>
    )

})

