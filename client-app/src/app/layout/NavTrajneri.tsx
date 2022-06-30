import { observer } from 'mobx-react-lite';
import { Link, NavLink } from 'react-router-dom';
import { Container, Menu, Dropdown, Image, Button } from 'semantic-ui-react';
import { useStore } from '../stores/store';

export default observer(function NavBarTrajneri() {
    const { TrajneriStore: { trajneri, logout } } = useStore();
    
    return (
        <>
           <Menu inverted  fixed='top'>
            <Container >
                <Menu.Item  style={{ marginRight: '6px' }} as={NavLink} exact to='/' header>
                    <img  src='/assets/logo.ico' alt='logo' style={{ marginRight: '10px' }} />
                    Akademi Futbolli
                </Menu.Item>

                <Menu.Item as={NavLink} to='/Trajneri/Trajneret'>Trajneri</Menu.Item>
                
                <Menu.Item as={NavLink} to='/Trajneri/Lojtaret' name='Lojtaret' />
                <Menu.Item as={NavLink} to='/Trajneri/activities' name='Sukseset' />
                <Menu.Item as={NavLink} to='/Trajneri/njoftimet' name='Njoftimet' />

                
                <Menu.Item>
                    <Button as={NavLink} to='/Trajneri/createNjoftim' positive content='Create Njoftim' />
                </Menu.Item>
                <Menu.Item>
                    <Button as={NavLink} to='/Trajneri/createActivity' positive content='Create Sukseset' floated='right' />
                </Menu.Item>

                <Menu.Item style={{ marginRight: '15px' }} inverted position='right'>
                    <Image src={'/assets/user.png'} avatar spaced='right' />
                    <Dropdown pointing='top left' text={trajneri?.emri}>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to={`/profile/${trajneri?.emri}`} 
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