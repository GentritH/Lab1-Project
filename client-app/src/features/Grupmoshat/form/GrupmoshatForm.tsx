import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, Dimmer, Form } from "semantic-ui-react";

import { useStore } from "../../../app/stores/store";
import { v4 as uuid } from 'uuid';



export default observer(function GrupmoshatForm() {
    const history = useHistory()
    const { grupmoshatStore } = useStore();
    const { createGrupmoshat, updateGrupmoshat, loading, loadGrupmoshat, loadingInitial ,closeForm} = grupmoshatStore;
    const { id } = useParams<{ id: string }>();

    const [ grupmoshat, setGrupmoshat] = useState({
        id: '',
        emriGrupmoshes: '',
    }); 

    useEffect(() => {
        if (id) loadGrupmoshat(id).then(grupmoshat => setGrupmoshat(grupmoshat!))
    }, [id, loadGrupmoshat]);

    function handleSubmit() {
        if (grupmoshat.id.length === 0) {
            let newGrupmoshat = {
                ...grupmoshat,
                id: uuid()
            };
            createGrupmoshat(newGrupmoshat).then(() => history.push(`/Trajneri/grupmoshatT/${newGrupmoshat.id}`));
        }else{
            updateGrupmoshat(grupmoshat).then(() => history.push(`/Trajneri/grupmoshatT/${grupmoshat.id}`))
        }
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setGrupmoshat({ ...grupmoshat, [name]: value })
    }
    if (loadingInitial) return <Dimmer />

    return (
        <div className="ui segment">
            <form className="ui form" onSubmit={handleSubmit} autoComplete='off' >
                <Form.Input placeholder='Emri i grupmoshes' value={grupmoshat.emriGrupmoshes} name='emriGrupmoshes' onChange={handleInputChange} />
                <Button loading={loading}  floated='right' positive type='submit' content='Submit' />
                <Button  onClick={closeForm} as={Link} to='/Trajneri/grupmoshatT' floated='right' type='submit' content='Cancel' />
            </form>
            <br />
            <br />
        </div>
    
    )
})