import { observer } from 'mobx-react-lite';
import React, { Fragment } from 'react';
import { Header } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import NjoftimListItem from './NjoftimListItem';

export default observer(function NjoftimList() {
    const { njoftimStore } = useStore();
    const { groupedNjoftimet } = njoftimStore;

    return (
        <>
            {groupedNjoftimet.map(([group, njoftimet]) => (
                <Fragment key={group}>
                    <Header sub color='teal'>
                        {group}
                    </Header>
                    {njoftimet.map(njoftim => (
                        <NjoftimListItem key={njoftim.id} njoftim={njoftim} />
                    ))}
                </Fragment>
            ))}
        </>

    )
})