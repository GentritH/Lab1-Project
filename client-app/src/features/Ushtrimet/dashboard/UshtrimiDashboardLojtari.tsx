import { observer } from "mobx-react-lite";
import React, { useEffect } from 'react';
import { Button, Container, Dimmer, Grid, Loader } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import UshtrimiDetails from "./UshtrimiDetails";
import UshtrimiForm from "../form/UshtrimiForm";
import UshtrimiList from "./UshtrimiListLojtari";


//ushtrimiDashboard eshte child component of  App component


export default observer(function UshtrimetDashboardLojtari() {

    const { ushtrimiStore } = useStore();
    const { loadUshtrimet, ushtrimiRegistry, editMode, selectedUshtrimi, openForm} = ushtrimiStore;

    useEffect(() => {
        if (ushtrimiRegistry.size <= 1) loadUshtrimet();
    }, [ushtrimiRegistry.size, loadUshtrimet]);



    if (ushtrimiStore.loadingInitial) return <Dimmer active><Loader>Loading the app Footbal Academy</Loader></Dimmer>;
    return (
        <div className="ui grid">
            <Grid.Column width='10'>
                <UshtrimiList />
            </Grid.Column>
            
        </div>
    )

})

