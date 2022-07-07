import { observer } from "mobx-react-lite";
import {useState } from "react";
import { Form, Formik } from "formik";
import { Button, Segment } from "semantic-ui-react";
import { v4 as uuid } from 'uuid';
import { useEffect } from "react";
import { useStore } from "../../../app/stores/store";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { Link, useHistory, useParams } from "react-router-dom";
import { Orari } from "../../../app/models/orari";
import LoadingComponent from "../../../app/layout/LoadingComponent";

export default observer(function OrariForm() {
    const history = useHistory();
    const { orariStore, ushtrimiStore,grupmoshatStore } = useStore();
    const { createOrari,loadOrari, updateOrari,loading, loadingInitial,closeForm,} = orariStore;
    const { id } = useParams<{ id: string }>();
    const {ushtrimetById}=ushtrimiStore;
    const {grupmoshatTById}=grupmoshatStore;

    const [oraret, setOrari] = useState<Orari>( {
    id: "",
    ushtrimiId:"",
    grupmoshaId: "",
    hene: "",
    marte: "",
    merkure: "",
    enjte: "",
    premte: "",

  });

  useEffect(() => {
    if (id) loadOrari(id).then(oraret => setOrari(oraret!))
}, [id, loadOrari]);

function handleFormSubmit(oraret: Orari) {
    if (oraret.id.length === 0) {
        let newOrari = {
            ...oraret,
            id: uuid()
        };
        createOrari(newOrari, oraret.ushtrimiId, oraret.grupmoshaId).then(() => history.push(`/Trajneri/Oraret/`))
    } else {
        updateOrari(oraret).then(() => history.push(`/Trajneri/Oraret/${oraret.id}`))
    }
}


if (loadingInitial) return <LoadingComponent content='Loading ...' />
  return (
    <Segment clearing>
      <Formik
        // validationSchema={validationSchema}
        enableReinitialize
        initialValues={oraret}
        onSubmit={values => handleFormSubmit(values)}
      >
        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
          <Form className="ui form" onSubmit={handleSubmit}  autoComplete="off">
            <MySelectInput
              label="Grupmosha"
              options={grupmoshatTById.map(grupmosha => (
                {
               key:grupmosha.id,
                text:grupmosha.emriGrupmoshes,
                 value:grupmosha.id}
            ))}
              placeholder="grupmosha"
              name="grupmoshaId"
            />
             <MySelectInput 
               label="Ushtrimi"
               options={ushtrimetById.map(ushtrimi => (
                 {
                key:ushtrimi.id,
                 text:ushtrimi.id,
                  value:ushtrimi.id}
             ))}
               placeholder="Ushtrimi"
               name="ushtrimiId"
              
            />
            <MySelectInput
              label="E Hene "
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="hene"
            />



            <MySelectInput
              label="E Marte "
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="marte"
            />



            <MySelectInput
              label="E Merkure "
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="merkure"
            />


            <MySelectInput
              label="E Enjte "
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="enjte"
            />


            <MySelectInput
              label="E Premte "
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="premte"
            />
            

            <Button
              // disabled={isSubmitting || !dirty || !isValid}
              loading={loading} 
              floated="right"
              positive
              type="submit"
              content="Submit"
            />
            <Button
              onClick={closeForm} as={Link} to='/Trajneri/Oraret'
              floated="right"
              type="button"
              content="Cancel"
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
});
