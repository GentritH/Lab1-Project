import {Form, Formik } from 'formik';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Button, Header } from 'semantic-ui-react';
import MyTextInput from '../../../app/common/form/MyTextInput';
import { Trajneri } from '../../../app/models/UserTrajneri';

import { useStore } from '../../../app/stores/store';



export default observer(function TrajneriForm() {
    const {TrajneriStore} = useStore();
    const {selectedTrajneri,updateTrajneri} = TrajneriStore;



    const initialState = selectedTrajneri ?? {
        userName: '',
        id:'',
        roli:'',
        emri: '',
        mbiemri: '',
        email: '',
        token: '',
        Password: '',
        normalizedUserName:'',
    }

    const [trajneret] = useState(initialState);

    function handleFormSubmit(trajneret: Trajneri) {
        updateTrajneri(trajneret);
    }
    
    return (
        
        <Formik
        enableReinitialize initialValues={trajneret}
        onSubmit={values => handleFormSubmit(values)}>
        {({ handleSubmit, isValid, isSubmitting, dirty }) => ( (
                <Form className='ui form error' onSubmit={handleSubmit}>
                    <Header as='h2' content='Regjistro Trajnerin' color='teal' textAlign='center' />
                    <MyTextInput name='emri' placeholder='emri' />
                    <MyTextInput name='mbiemri' placeholder='mbiemri' />
                    <MyTextInput name='roli' placeholder='Roli'/>
                    <MyTextInput name='email' placeholder='email' />
                    <MyTextInput name='userName' placeholder='userName' />
                    <MyTextInput name='password' placeholder='Password' type='password' />
                 
                    
                 
                 
                    <Button disabled={!isValid || !dirty || isSubmitting} 
                          loading={isSubmitting} content='Register' type='submit' fluid />
                </Form>
))}
        </Formik>
    )
})