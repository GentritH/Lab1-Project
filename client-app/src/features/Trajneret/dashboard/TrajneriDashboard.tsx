import { observer } from "mobx-react-lite";
import React, { useEffect } from 'react';
import {Button, Dimmer, Grid, Loader } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import RegisterFormTrajneri from "../form/RegisterFormTrajneri";
import TrajneriForm from "../form/TrajneriForm";
import TrajneriDetails from "./TrajneriDetails";
import TrajneriList from "./TrajneriList";





export default observer(function TrajneriDashboard() {

    const { TrajneriStore,modalStore} = useStore();
    const { loadTrajnerin, trajneriRegistry, editMode, selectedTrajneri} = TrajneriStore;

    useEffect(() => {
        if (trajneriRegistry.size <= 1) loadTrajnerin();
    }, [trajneriRegistry.size, loadTrajnerin]);



    if (TrajneriStore.loadingInitial) return <Dimmer active><Loader>Loading the app Footbal Academy</Loader></Dimmer>;
    return (
        <div className="ui grid">
            <Grid.Column width='10'>
                <TrajneriList />
            </Grid.Column>
            <Grid.Column width='6'>

                  <Button  color="blue" onClick={() => modalStore.openModal(<RegisterFormTrajneri />)} size='huge' >
                                Regjistro Trajnerin!
                        </Button>
                        
                <h2 >Te Dhenat Per Trajnerin:</h2>

              
                {selectedTrajneri && !editMode &&
                    <TrajneriDetails
                    />}
                {editMode &&
                    <TrajneriForm />}

            </Grid.Column>
        </div>
    )

})

