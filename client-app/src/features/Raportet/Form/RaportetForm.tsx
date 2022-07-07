import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Header, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import { v4 as uuid } from 'uuid';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';

import MySelectInput from '../../../app/common/form/MySelectInput';
import { AktivitetiOptions, AngazhimiOptions, JavaOption, MuajiOptions, PerformancaOptions } from '../../../app/common/options/categoryOptions';
import { raportet } from '../../../app/models/Raportet';

export default observer(function RaportetForm() {
    const history = useHistory();
    const { raportetStore,ushtrimiStore,grupmoshatStore,lojtariStore } = useStore();
    const { createRaportet, updateRaportet,
         loadRaportin, loadingInitial,closeForm } = raportetStore;

        const {ushtrimetById}=ushtrimiStore;
    
        const {grupmoshatTById}=grupmoshatStore;
        const {LojtariById}=lojtariStore;
    
   

    const { id } = useParams<{ id: string }>();

    const [raportet, setRaportet] = useState<raportet>({

        id: '',
        grupmoshaId: '',
        ushtrimiId: '',
        lojtariId: '',
        muaji: '',
        java:'',
        angazhimi:'',
        performanca:'',
        aktivititeti:'',
        komenti:'',
    });
    
    


    const validationSchema = Yup.object({
        grupmoshaId: Yup.string().required('Grupmosha is required'),
        ushtrimiId: Yup.string().required('Ushtrimi  is required'),
        lojtariId: Yup.string().required('Lojtari  is required'),
        muaji: Yup.string().required('Muaji  is required'),
        java: Yup.string().required('Java  is required'),
        angazhimi: Yup.string().required('Angazhimi  is required'),
        performanca: Yup.string().required('Performanca  is required'),
        aktivititeti: Yup.string().required('Aktiviteti  is required'),
        komenti: Yup.string().required('Komenti  is required'),
      
     
    })

    useEffect(() => {
        if (id) loadRaportin(id).then(raportet => setRaportet(raportet!))
    }, [id, loadRaportin]);

    function handleFormSubmit(raportet: raportet) {
        if (raportet.id.length === 0) {
            let newActivity = {
                ...raportet,
                id: uuid()
            };
            createRaportet(newActivity,raportet.ushtrimiId,raportet.grupmoshaId,raportet.lojtariId).then(() => history.push(`/Trajneri/Raportet/`))
        } else {
            updateRaportet(raportet).then(() => history.push(`/Raportet/${raportet.id}`))
        }
    }

    if (loadingInitial) return <LoadingComponent content='Loading Raportet...' />

    return (
        <Segment clearing>
            <Header content='Raportet Details' sub color='teal' />
            <Formik 
                validationSchema={validationSchema}
                enableReinitialize 
                initialValues={raportet} 
                onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>

                         <MySelectInput options={grupmoshatTById.map(grupmosha => (
                            {
                                key: grupmosha.id,
                                text: grupmosha.emriGrupmoshes,
                                value: grupmosha.id
                            }
                        ))} label='Grupmosha' name='grupmoshaId' placeholder={''} />

                        <MySelectInput options={ushtrimetById.map(ushtrimi => (
                            {
                                key: ushtrimi.id,
                                text: ushtrimi.emriUshtrimit,
                                value: ushtrimi.id
                            }
                        ))} label='Ushtrimi' name='ushtrimiId' placeholder={''} />


                                 <MySelectInput options={LojtariById.map(lojtari => (
                            {
                                key: lojtari.id,
                                text: lojtari.emri,
                                value: lojtari.id
                            }
                        ))} label='Lojtari' name='lojtariId' placeholder={''} />

                    
                             
                       
                        <MySelectInput options={MuajiOptions} label='Muaji' name='muaji' placeholder={''} />   
                        <MySelectInput options={JavaOption} label='Java' name='java' placeholder={''} />   
                        <MySelectInput options={AngazhimiOptions} label='Angazhimi' name='angazhimi' placeholder={''} />   
                        <MySelectInput options={PerformancaOptions} label='Performanca' name='performanca' placeholder={''} />   
                        <MySelectInput options={AktivitetiOptions} label='Aktiviteti' name='aktivititeti' placeholder={''} />   
                        <MyTextInput  label='Komente shtesë' name='komenti' placeholder={''} />

                       
                            
                     
                        <Button 
                           floated='right' 
                            positive type='submit' content='Submit' />
                        <Button  onClick={closeForm} as={Link} to='/Trajneri/Raportet' floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>

        </Segment>
    )
})