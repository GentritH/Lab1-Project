import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Dimmer, Loader, Form,Segment} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";


export default observer (function TrajneriDetails() {
    const { TrajneriStore } = useStore();
    const { selectedTrajneri: trajneri, loadTrajneri, loadingInitial, openForm, cancelSelectedTrajneri} = TrajneriStore;
    const {id} = useParams<{id:  string}>();

    useEffect(() => {
        if(id) loadTrajneri(id);
    }, [id, loadTrajneri]);

    if(loadingInitial || !trajneri) return <Dimmer active><Loader></Loader></Dimmer>;
    return (
        <Segment >
        <Form>
          <Form.Field>
          <label>Emri:</label>
          <fieldset>{trajneri.emri} {trajneri.mbiemri}</fieldset>
        </Form.Field>
        <Form.Field>
          <label>Roli:</label>
          <fieldset>{trajneri.roli}</fieldset>
        </Form.Field>
        <Form.Field>
          <label>Email:</label>
          <fieldset>{trajneri.email}</fieldset>
        </Form.Field>
        <Form.Field>
        </Form.Field>
        <Button.Group widths='2'>
                    <Button  onClick={() => openForm(trajneri.id)} basic color='blue' content='Edit' />
                    
                    <Button as={Link} to='/Trajneri/trajneret'onClick={cancelSelectedTrajneri} basic color='grey' content='Cancel' />
                   
               </Button.Group>
      </Form>
      </Segment>
    )
})


