import { observer } from "mobx-react-lite";
import React, { useEffect } from 'react';
import { Button, Container, Dimmer, Grid, Loader } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import GrupmoshatDetails from "./GrupmoshatDetails";
import GrupmoshatForm from "../form/GrupmoshatForm";
import GrupmoshatList from "./GrupmoshatList";



export default observer(function GrupmoshatTDashboard() {

    const { grupmoshatStore } = useStore();
    const { loadGrupmoshatT, grupmoshatRegistry, editMode, openForm, selectedGrupmoshat } = grupmoshatStore;

    useEffect(() => {
        if (grupmoshatRegistry.size <= 1) loadGrupmoshatT(); 
    }, [grupmoshatRegistry.size, loadGrupmoshatT]);



    if (grupmoshatStore.loadingInitial) return <Dimmer active><Loader>Loading the app Football Academy</Loader></Dimmer>;
    return (
        <div className="ui grid">
            <Grid.Column width='8'>
                <GrupmoshatList />
            </Grid.Column>
            <Grid.Column width='6'>
                <Container>
                    <Button onClick={() => openForm()} color='blue' content='Krijo Grupmoshe' size='big' ></Button>
                </Container>
                <h2 >Te Dhenat Per Grupmoshen:</h2>

                {selectedGrupmoshat && !editMode &&
                    <GrupmoshatDetails
                    />}
                {editMode &&
                    <GrupmoshatForm />}
            </Grid.Column>
        </div>
    )

})

