import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import NjoftimFilters from './NjoftimFilters';
import NjoftimList from './NjoftimList';

export default observer(function NjoftimDashboard() {
    const {njoftimStore} = useStore();
    const {loadNjoftimet, njoftimRegistry} = njoftimStore;

    useEffect(() => {
      if (njoftimRegistry.size <= 1) loadNjoftimet();
    }, [njoftimRegistry.size, loadNjoftimet])
  
    if (njoftimStore.loadingInitial) return <LoadingComponent content='Loading activities...' />

    return (
        <Grid>
            <Grid.Column width='10'>
                <NjoftimList />
            </Grid.Column>
            <Grid.Column width='6'>
                <NjoftimFilters />
            </Grid.Column>
        </Grid>
    )
})