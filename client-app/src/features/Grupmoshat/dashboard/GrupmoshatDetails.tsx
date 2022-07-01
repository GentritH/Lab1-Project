import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Dimmer, Loader} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";


export default observer (function GrupmoshatDetails() {
    const { grupmoshatStore} = useStore();
    const { selectedGrupmoshat: grupmoshat, loadGrupmoshat, loadingInitial, openForm, cancelSelectedGrupmoshat} = grupmoshatStore;
    const {id} = useParams<{id:  string}>();

    useEffect(() => {
        if(id) loadGrupmoshat(id);
    }, [id, loadGrupmoshat]);

    if(loadingInitial || !grupmoshat) return <Dimmer active><Loader></Loader></Dimmer>;
    return (
        <Card fluid>
            <Card.Content>
                <Card.Header>{grupmoshat.emriGrupmoshes}</Card.Header>
            </Card.Content>
            <Card.Content extra>
               <Button.Group widths='2'>
               <Button as ={Link} to={`/Trajneri/manage/${grupmoshat.id}`} onClick={() => openForm(grupmoshat.id)} basic color='blue' content='Edit' />
                    <Button as={Link} to='/Trajneri/grupmoshatT'onClick={cancelSelectedGrupmoshat} basic color='grey' content='Cancel' />
                    {/* <Button onClick={() => openForm(ushtrimi.id)} basic color='blue' content='Edit' />
                    <Button onClick={cancelSelectedUshtrimi} basic color='red' content='Cancel' /> */}
               </Button.Group>
            </Card.Content>
        </Card>
    )
})

