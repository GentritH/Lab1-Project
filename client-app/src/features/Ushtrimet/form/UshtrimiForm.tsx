import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, Dimmer, Form } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { v4 as uuid } from 'uuid';



export default observer(function UshtrimiForm() {
    const history = useHistory();
    const { ushtrimiStore } = useStore();
    const { createUshtrimi, updateUshtrimi, loading, loadUshtrimi, loadingInitial, closeForm} = ushtrimiStore;
    const { id } = useParams<{ id: string }>();

    const [ushtrimi, setUshtrimi] = useState({
        id: '',
        emriUshtrimit: '',
        pershkrimi: ''
    });

    useEffect(() => {
        if (id) loadUshtrimi(id).then(ushtrimi => setUshtrimi(ushtrimi!))
    }, [id, loadUshtrimi]);

    function handleSubmit() {
        if (ushtrimi.id.length === 0) {
            let newUshtrimi = {
                ...ushtrimi,
                id: uuid()
            };
            createUshtrimi(newUshtrimi).then(() => history.push(`/Trajneri/ushtrimet/${newUshtrimi.id}`));
        }else{
            updateUshtrimi(ushtrimi).then(() => history.push(`/Trajneri/ushtrimet/${ushtrimi.id}`))
        }
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setUshtrimi({ ...ushtrimi, [name]: value })
    }
    if (loadingInitial) return <Dimmer />

    return (
        <div className="ui segment">
            <Form onSubmit={handleSubmit} autoComplete='off' >
                <Form.Input placeholder='Emri ushtrimit..' value={ushtrimi.emriUshtrimit} name='emriUshtrimit' onChange={handleInputChange} />
                <Form.TextArea placeholder='Pershkrimi..' value={ushtrimi.pershkrimi} name='pershkrimi' onChange={handleInputChange} />
                <Button loading={loading}  floated='right' positive type='submit' content='Submit' />
                <Button  onClick={closeForm} as={Link} to='/ushtrimet' floated='right' type='submit' content='Cancel' />
            </Form>
            <br />
            <br />
        </div>
        //me ane te handleInputChange ne ruajme inputat ne forme qe kur te hapet forma te hapet e mbushur.
    )
})