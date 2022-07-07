import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Button, Dimmer, Grid, GridColumn, Loader } from "semantic-ui-react";

import { useStore } from "../../../app/stores/store";
import OrariForm from "../form/OrariForm";
import OrariDetails from "./OrariDetails";
import OrariList from "./OrariList";

export default observer(function OraretDashboard() {
  const { orariStore, grupmoshatStore, ushtrimiStore } = useStore();
  const { selectedOrari, editMode, oraretRegistry, loadOraret } = orariStore;
  const { loadUshtrimet, ushtrimiRegistry } = ushtrimiStore;
  const { loadGrupmoshatT, grupmoshatRegistry} = grupmoshatStore;

  useEffect(() => {
    if (oraretRegistry.size <= 1) loadOraret();
  }, [oraretRegistry.size, loadOraret])

  useEffect(() => {
    if (grupmoshatRegistry.size <= 1) loadGrupmoshatT();
  }, [grupmoshatRegistry.size, loadGrupmoshatT])

  useEffect(() => {
    if (ushtrimiRegistry.size <= 1) loadUshtrimet();
  }, [ushtrimiRegistry.size, loadUshtrimet])

  if (orariStore.loadingInitial) return <Dimmer active><Loader></Loader></Dimmer>;


  return (
    <Grid>
      <Grid.Column width="12">
        <OrariList />
      </Grid.Column>

      <GridColumn width="4">
        <Button
          onClick={() => orariStore.openForm()}
          content="Krijo Orarin"
          size="big"
          color="teal"
        />
        {selectedOrari && !editMode &&
          <OrariDetails />}
        {editMode &&
          <OrariForm />}
      </GridColumn>
    </Grid>
  );
});
