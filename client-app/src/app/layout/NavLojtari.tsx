import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Menu, Dropdown, Image, Button } from 'semantic-ui-react';
import { useStore } from '../stores/store';

export default observer(function NavBarLojtari() {
    const { lojtariStore: { lojtaret, logout } } = useStore();

    return (
        <>
           <Menu inverted  fixed='top'>
            <Container>
                <Menu.Item style={{ marginRight: '5px' }} as={NavLink} exact to='/' header>
                    <img src='/assets/logo.ico' alt='logo' style={{ marginRight: '10px' }} />
                    Akademi Futbolli
                </Menu.Item>

              
                <Menu.Item as={NavLink} to='/Lojtari/activities' name='Sukseset' />
                <Menu.Item as={NavLink} to='/Lojtari/njoftimet' name='Njoftimet' />
                <Menu.Item as={NavLink} to='/Lojtari/raportet' name='Raportet' />
                <Menu.Item as={NavLink} to='/Lojtari/oraret' name='Oraret' />
                <Menu.Item as={NavLink} to='/Lojtari/ushtrimet' name='Ushtrimet' />
                
                 


                        
                <Menu.Item style={{ marginRight: '15px' }} inverted position='right'>
                    <Image src={'/assets/user.png'} avatar spaced='right' />
                    <Dropdown pointing='top left' text={lojtaret?.emri}>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to={`/profile/${lojtaret?.emri}`} 
                                text='My Profile' icon='user' />
                            <Dropdown.Item onClick={logout} text='Logout' icon='power' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item> 

        

                
           

           
           
        
           
            </Container>
        </Menu>


        </>
    )
})