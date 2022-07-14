import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Dimmer, Loader} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";


export default observer (function RaportetDetailsLojtari() {
    const { raportetStore,lojtariStore} = useStore();
    const { selectedRaportet: raportet, loadRaportin, loadingInitial, openForm, cancelselectedRaportet} = raportetStore;
    const {id} = useParams<{id:  string}>();

    useEffect(() => {
        if(id) loadRaportin(id);
    }, [id, loadRaportin]);

    if(loadingInitial || !raportet) return <Dimmer active><Loader></Loader></Dimmer>;
    return (
        
        <Card fluid>
            <Card.Content>
                <Card.Header>{lojtariStore.getEmriLojtaritById(raportet.lojtariId)} {lojtariStore.getMbiemriLojtaritById(raportet.lojtariId)} </Card.Header>
                <Card.Description><b>Angazhimi në loje:</b> {raportet.angazhimi} </Card.Description>
                <Card.Description><b>Performanca:</b> {raportet.performanca} </Card.Description>
                <Card.Description> <b>Aktiviteti fizik në stervitje:</b> {raportet.aktivititeti} </Card.Description>
               

           
            </Card.Content>
            <Card.Content extra>
               <Button.Group widths='2'>
                    <Button onClick={cancelselectedRaportet} basic color='blue' content='Cancel' />
                
               </Button.Group>
            </Card.Content>
        </Card>
    )
})

