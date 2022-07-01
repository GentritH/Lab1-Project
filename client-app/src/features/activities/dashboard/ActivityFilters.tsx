import React from 'react';
import Calendar from 'react-calendar';
import { Header, Menu } from 'semantic-ui-react';

export default function ActivityFilters() {
    return (
        <>
            <Menu vertical size='large' style={{ width: '100%', marginTop: 25 }}>
                <Header icon='calendar' attached color='teal' content='Kalendari' />
                
            </Menu>
            <Header />
            <Calendar />
        </>
    )
}