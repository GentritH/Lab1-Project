import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useState } from 'react';
import { Button, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import { Form } from "semantic-ui-react";



export default observer(function LojtariForm() {
    const {lojtariStore} = useStore();
    const {selectedLojtari,updateLojtaret, loading, closeForm, createLojtari} = lojtariStore;

    const initialState = selectedLojtari ?? {
        userName: '',
        id:'',
        emri: '',
        mbiemri: '',
        email: '',
        token: '',
        password: '',
        grupmosha:'',
        emriPrindit:'',
        numriTelefonit:'',
        normalizedUserName:'',
    }

    console.log("here");
    const [lojtari, setLojtari] = useState(initialState);

    function handleSubmit() {
        lojtari.id ? updateLojtaret(lojtari) : createLojtari(lojtari);
    }
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setLojtari({ ...lojtari, [name]: value })
    }
    // console.log(lojtari.username)

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Emri' value={lojtari.emri} name='emri' onChange={handleInputChange} />
                <Form.Input placeholder='Mbiemri' value={lojtari.mbiemri} name='mbiemri' onChange={handleInputChange} />
                <Form.Input placeholder='Username' value={lojtari.userName} name='username' onChange={handleInputChange} />
                <Form.Input placeholder='Grupmosha' value={lojtari.grupmosha} name='grupmosha' onChange={handleInputChange} />
                <Form.Input placeholder='Emri Prindit' value={lojtari.emriPrindit} name='Emri prindit' onChange={handleInputChange} />
                <Form.Input placeholder='Email' value={lojtari.email} name='Email' onChange={handleInputChange} />
                <Form.Input type='Password' placeholder='Fjalekalimi' value={lojtari.password} name='password' onChange={handleInputChange} />                
                <Form.Input placeholder='Nr. i Telefonit' value={lojtari.numriTelefonit} name='phoneNumber' onChange={handleInputChange} />
                <Button loading={loading} floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
})