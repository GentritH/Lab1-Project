import { observer } from 'mobx-react-lite'
import React from 'react'
import {Segment, Header, Comment, Form, Button} from 'semantic-ui-react'

export default observer(function ActivityDetailedChat() {
    return (
        <>
            <Segment
                textAlign='center'
                attached='top'
                inverted
                color='teal'
                style={{border: 'none'}}
            >
                <Header>--------------------------------</Header>
            </Segment>
            <Segment attached>

            </Segment>
        </>

    )
})