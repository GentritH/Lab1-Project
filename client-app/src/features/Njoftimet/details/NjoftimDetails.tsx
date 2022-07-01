import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import NjoftimDetailedChat from './NjoftimDetailedChat';
import NjoftimDetailedInfo from './NjoftimDetailedInfo';
import NjoftimDetailedHeader from './NjoftimDetaledHeader';


export default observer(function NjoftimDetails() {
    const {njoftimStore} = useStore();
    const {selectedNjoftim: njoftim, loadNjoftim, loadingInitial} = njoftimStore;
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        if (id) loadNjoftim(id);
    }, [id, loadNjoftim]);

    if (loadingInitial || !njoftim) return <LoadingComponent />;

    return (
        <Grid>
            <Grid.Column width={10}>
                <NjoftimDetailedHeader njoftim={njoftim} />
                <NjoftimDetailedInfo njoftim={njoftim} />
               <NjoftimDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>

            </Grid.Column>
        </Grid>
    )
})

