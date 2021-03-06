import { observer } from "mobx-react-lite";
import  { useEffect } from 'react';
import { Button, Container, Dimmer, Grid, Loader } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import RaportetForm from "../Form/RaportetForm";
import RaportetDetailsLojtari from "./RaportetDetailsLojtari";
import RaportetListLojtari from "./RaportetListLojtari";



export default observer(function RaportetDashboard() {

    const { raportetStore,lojtariStore,grupmoshatStore,ushtrimiStore } = useStore();
    const { loadRaportet, raportetRegistry, editMode, selectedRaportet, openForm} = raportetStore;


    useEffect(() => {
        if (raportetRegistry.size <= 1) loadRaportet();
    }, [raportetRegistry.size, loadRaportet]);

    useEffect(() => {
        grupmoshatStore.loadGrupmoshatT();
    }, [grupmoshatStore]);

    useEffect(() => {
        lojtariStore.loadLojtaret();
    }, [lojtariStore]);

    useEffect(() => {
        ushtrimiStore.loadUshtrimet();
    }, [ushtrimiStore]);
    




    if (raportetStore.loadingInitial) return <Dimmer active><Loader>Loading the app</Loader></Dimmer>;
    return (
        <div className="ui grid">
            <Grid.Column width='10'>
                <RaportetListLojtari />
            </Grid.Column>
            <Grid.Column width='6'>
                
                <h2 >Te Dhenat Per Raportin:</h2>

                {selectedRaportet && !editMode &&
                    <RaportetDetailsLojtari
                    />}
                {editMode &&
                    <RaportetForm />}
            </Grid.Column>
        </div>
    )

})

