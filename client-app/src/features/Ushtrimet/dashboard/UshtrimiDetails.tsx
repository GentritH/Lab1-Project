import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Dimmer, Loader} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";


export default observer (function UshtrimiDetails() {
    const { ushtrimiStore } = useStore();
    const { selectedUshtrimi: ushtrimi, loadUshtrimi, loadingInitial, openForm, cancelSelectedUshtrimi} = ushtrimiStore;
    const {id} = useParams<{id:  string}>();

    useEffect(() => {
        if(id) loadUshtrimi(id);
    }, [id, loadUshtrimi]);

    if(loadingInitial || !ushtrimi) return <Dimmer active><Loader></Loader></Dimmer>;
    return (
        <Card fluid>
            <Card.Content>
                <Card.Header>{ushtrimi.emriUshtrimit}</Card.Header>
                <Card.Description>
                   {ushtrimi.pershkrimi}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
               <Button.Group widths='2'>
                    <Button as ={Link} to={`/Trajneri/manage1/${ushtrimi.id}`} onClick={() => openForm(ushtrimi.id)} basic color='blue' content='Edit' />
                    <Button as={Link} to='/Trajneri/ushtrimet'onClick={cancelSelectedUshtrimi} basic color='blue' content='Cancel' />
                    {/* <Button onClick={() => openForm(ushtrimi.id)} basic color='blue' content='Edit' />
                    <Button onClick={cancelSelectedUshtrimi} basic color='red' content='Cancel' /> */}
               </Button.Group>
            </Card.Content>
        </Card>
    )
})

