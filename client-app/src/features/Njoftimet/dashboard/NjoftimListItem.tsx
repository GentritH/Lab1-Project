import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Icon, Item, Segment, Menu } from 'semantic-ui-react';
import { Njoftim } from '../../../app/models/njoftim';
import {format} from 'date-fns';

interface Props {
    njoftim: Njoftim
}

export default function NjoftimListItem({ njoftim }: Props) {

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/user.png' />
                        <Item.Content>
                            <Item.Header as={Link} to={`/Trajneri/njoftimet/${njoftim.id}`}>
                                {njoftim.title}
                            </Item.Header>
                            <Item.Description>Akademi Futbolli</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment secondary>
                <span>
                    <Icon name='clock' /> {format(njoftim.date!, 'dd MMM yyyy h:mm aa')}
                    
                </span>
            </Segment>
            
            <Segment clearing>
                <span>{njoftim.description}</span>
                
                <Button 
                    as={Link}
                    to={`/Trajneri/njoftimet/${njoftim.id}`}
                    color='teal'
                    floated='right'
                    content='View'
                />
            </Segment>
        </Segment.Group>
    )
}