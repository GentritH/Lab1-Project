import { observer } from 'mobx-react-lite';
import React from 'react'
import { Link } from 'react-router-dom';
import {Button, Header, Item, Segment, Image} from 'semantic-ui-react'
import {Njoftim} from "../../../app/models/njoftim";
import {format} from 'date-fns';

const njoftimImageStyle = {
    filter: 'brightness(30%)'
};

const njoftimImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

interface Props {
    njoftim: Njoftim
}

export default observer (function NjoftimDetailedHeader({njoftim}: Props) {
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{padding: '0'}}>
                <Image src={`/assets/categoryImages/${njoftim.category}.jpg`} fluid style={njoftimImageStyle}/>
                <Segment style={njoftimImageTextStyle} basic>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size='huge'
                                    content={njoftim.title}
                                    style={{color: 'white'}}
                                />
                                <p>{format(njoftim.date!, 'dd MMM yyyy')}</p>
                                <p>
                                     <strong>Akademi Futbolli</strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
            <Segment clearing attached='bottom'>
                
                <Button as={Link} to={`/manage2/${njoftim.id}`} color='orange' floated='right'>
                    Ndrysho Event
                </Button>
            </Segment>
        </Segment.Group>
    )
})