import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Segment, Image, Button } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';



export default observer(function LojtariPage() {
    const { lojtariStore, modalStore } = useStore();
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.ico' alt='logo' style={{ marginBottom: 12 }} />
                    Akademi Futbolli
                </Header>
                {lojtariStore.isLoggedIn ? (
                    <>
                        <Header as='h2' inverted content='Welcome to Akademi Futbolli' />
                        <Button as={Link} to='/LojtariPage' size='huge' inverted>
                            Go to Football Academy!
                        </Button>
                       
                    </>

                ) : (
                    <>
                        {/* <Button onClick={() => modalStore.openModal(<LoginFormLojtari />)} size='huge' inverted>
                            Login as Player!
                        </Button> */}

                    </>

                )}
            </Container>
        </Segment>
    )
})