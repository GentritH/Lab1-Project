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
      hene1: "",
      hene2: "",
      hene3: "",
      hene4: "",
      hene5: "",
      hene6: "",
      marte1: "",
      marte2: "",
      marte3: "",
      marte4: "",
      marte5: "",
      marte6: "",
      merkure1: "",
      merkure2: "",
      merkure3: "",
      merkure4: "",
      merkure5: "",
      merkure6: "",
      enjte1: "",
      enjte2: "",
      enjte3: "",
      enjte4: "",
      enjte5: "",
      enjte6: "",
      premte1: "",
      premte2: "",
      premte3: "",
      premte4: "",
      premte5: "",
      premte6: "",
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
              placeholder="Grupmosha"
              name="grupmoshaId"
            />
             <MySelectInput 
               label="Ushtrimi"
               options={ushtrimetById.map(ushtrimi => (
                 {
                key:ushtrimi.id,
                 text:ushtrimi.emriUshtrimit,
                  value:ushtrimi.id}
             ))}
               placeholder="Ushtrimi"
               name="ushtrimiId"
              
            />
            <MySelectInput
              label="E Hene Ora 1"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="hene1"
            />
          
            <MySelectInput
              label="E Hene Ora 2"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="hene2"
            />
            <MySelectInput
              label="E Hene Ora 3"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="hene3"
            />
            <MySelectInput
              label="E Hene Ora 4"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="hene4"
            />
            <MySelectInput
              label="E Hene Ora 5"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="hene5"
            />
            <MySelectInput
              label="E Hene Ora 6"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="hene6"
            />
            <MySelectInput
              label="E Marte Ora 1"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="marte1"
            />
            <MySelectInput
              label="E Marte Ora 2"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="marte2"
            />
            <MySelectInput
              label="E Marte Ora 3"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="marte3"
            />
            <MySelectInput
              label="E Marte Ora 4"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="marte4"
            />
            <MySelectInput
              label="E Marte Ora 5"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="marte5"
            />
            <MySelectInput
              label="E Marte Ora 6"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="marte6"
            />
            <MySelectInput
              label="E Merkure Ora 1"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="merkure1"
            />
            <MySelectInput
              label="E Merkure Ora 2"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="merkure2"
            />
            <MySelectInput
              label="E Merkure Ora 3"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="merkure3"
            />
            <MySelectInput
              label="E Merkure Ora 4"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="merkure4"
            />
            <MySelectInput
              label="E Merkure Ora 5"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="merkure5"
            />
            <MySelectInput
              label="E Merkure Ora 6"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="merkure6"
            />
            <MySelectInput
              label="E Enjte Ora 1"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="enjte1"
            />
            <MySelectInput
              label="E Enjte Ora 2"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="enjte2"
            />
            <MySelectInput
              label="E Enjte Ora 3"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="enjte3"
            />
            <MySelectInput
              label="E Enjte Ora 4"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="enjte4"
            />
            <MySelectInput
              label="E Enjte Ora 5"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="enjte5"
            />
            <MySelectInput
              label="E Enjte Ora 6"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="enjte6"
            />
            <MySelectInput
              label="E Premte Ora 1"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="premte1"
            />
            <MySelectInput
              label="E Premte Ora 2"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="premte2"
            />
            <MySelectInput
              label="E Premte Ora 3"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="premte3"
            />
            <MySelectInput
              label="E Premte Ora 4"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="premte4"
            />
            <MySelectInput
              label="E Premte Ora 5"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="premte5"
            />
            <MySelectInput
              label="E Premte Ora 6"
              options={ushtrimetById.map(ushtrimi => (
                {
               key:ushtrimi.id,
                text:ushtrimi.emriUshtrimit,
                 value:ushtrimi.id}
            ))}
              placeholder="Ushtrimi"
              name="premte6"
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
