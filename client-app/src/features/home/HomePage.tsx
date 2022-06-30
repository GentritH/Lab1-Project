import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Segment, Image, Button } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';
import LoginFormLojtari from '../Lojtaret/form/LoginFormLojtari';
import LoginFormTrajneri from '../Trajneret/form/LoginFormTrajneri';
import ActivityListItem from '../activities/dashboard/ActivityListItem';

export default observer(function HomePage() {
    const { TrajneriStore, modalStore, lojtariStore } = useStore();
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.ico' alt='logo' style={{ marginBottom: 12 }} />
                    Akademi Futbolli
                </Header>
                {TrajneriStore.isLoggedIn ? (
                    <>
                        <Header as='h2' inverted content='Welcome to Akademi Futbolli' />
                        <Button as={Link} to='/Trajneri/activities' size='huge' inverted>
                            Go to Sukseset!
                        </Button>
                        <br/><br/>
                        <Button as={Link} to='/Trajneri/njoftimet' size='huge' inverted>
                            Go to Njoftimet!
                        </Button><br/><br/>
                        <Button as={Link} to='/Trajneri/Trajneret' size='huge' inverted>
                            Go to Trajneret!
                        </Button><br/><br/>
                    </>

                ) : (
                        <>
                        <Button onClick={() => modalStore.openModal(<LoginFormTrajneri />)} size='huge' inverted>
                            Login as an Trajner!
                        </Button>
                        <br></br>

                    </>

                    )}

                    {lojtariStore.isLoggedIn ? (
                    <>
                        <Header as='h2' inverted content='Welcome to Akademi Futbolli' />
                        <Button as={Link} to='/lojtari' size='huge' inverted>
                            Go to Akademi Futbolli!
                        </Button>
                     
                    </>

                ) : (
                    <>
                     <Button  onClick={() => modalStore.openModal(<LoginFormLojtari />)} size='huge' inverted>Login as Player!</Button>
               
                    </>

                )}
            </Container>
        </Segment>
    )
})