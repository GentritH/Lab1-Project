import { observer } from 'mobx-react-lite';
import React from 'react'
import { Segment, Grid, Icon } from 'semantic-ui-react'
import { Njoftim } from "../../../app/models/njoftim";
import {format} from 'date-fns';

interface Props {
    njoftim: Njoftim
}

export default observer(function NjoftimDetailedInfo({ njoftim }: Props) {
    return (
        <Segment.Group>
            <Segment attached='top'>
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size='large' color='teal' name='info' />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <p>{njoftim.description}</p>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign='middle'>
                    <Grid.Column width={1}>
                        <Icon name='calendar' size='large' color='teal' />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <span>
                            {format(njoftim.date!, 'dd MMM yyyy h:mm aa')}
                        </span>
                    </Grid.Column>
                </Grid>
            </Segment>
            
        </Segment.Group>
    )
})