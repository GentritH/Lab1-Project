import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import ActivityListItem from '../../features/activities/dashboard/ActivityListItem';
import NjoftimDashboard from '../../features/Njoftimet/dashboard/NjoftimDashboard';
import NjoftimListItem from '../../features/Njoftimet/dashboard/NjoftimListItem';
import { observer } from 'mobx-react-lite';
import { Route, Switch, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';
import NjoftimForm from '../../features/Njoftimet/form/NjoftimForm';
import NjoftimDetails from '../../features/Njoftimet/details/NjoftimDetails';
import TestErrors from '../../features/errors/TestError';
import { ToastContainer } from 'react-toastify';
import NotFound from '../../features/errors/NotFound';
import ServerError from '../../features/errors/ServerError';
import LoginForm from '../../features/users/LoginForm';
import { useStore } from '../stores/store';
import LoadingComponent from './LoadingComponent';
import ModalContainer from '../common/modals/ModalContainer';
import TrajneriDashboard from '../../features/Trajneret/dashboard/TrajneriDashboard';
import RegisterFormTrajneri from '../../features/Trajneret/form/RegisterFormTrajneri';
import TrajneriForm from '../../features/Trajneret/form/TrajneriForm';
import LojtariDashboard from '../../features/Lojtaret/dashboard/LojtariDashboard';
import RegisterFormLojtari from '../../features/Lojtaret/form/RegisterFormLojtari';
import LoginFormLojtari from '../../features/Lojtaret/form/LoginFormLojtari';
import LojtariForm from '../../features/Lojtaret/form/LojtariForm';


import NavLojtari from './NavLojtari';
import NavTrajneri from './NavTrajneri';
import LojtariPage from './LojtariPage';
import TrajneriPage from './TrajneriPage';


function App() {
  const location = useLocation();
  const {commonStore, TrajneriStore} = useStore();

  useEffect(() => {
    if (commonStore.token) {
      TrajneriStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, TrajneriStore])

  if (!commonStore.appLoaded) return <LoadingComponent content='Loading app...' />

  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar />
      <ModalContainer />
      <Route exact path='/' component={HomePage} />

      <Route path="/Lojtari" component={LojtariPage} />
      <Route
        path={'/Lojtari/(.+)'}
        render={() => (
          <>
            <NavLojtari />
            <Container style={{ marginTop: '7em' }}>
              <Switch>
              <Route
                exact path="/Lojtari/Profili/" component={LojtariDashboard} />
                <Route exact path='/Lojtari/activities' component={ActivityDashboard} />
                <Route path='/Lojtari/activities/:id' component={ActivityDetails} />
                <Route exact path='/Lojtari/njoftimet' component={NjoftimDashboard} />
                <Route path='/Lojtari/njoftimet/:id' component={NjoftimDetails} />
                <Route exact path='/Lojtari/njoftimet' component={NjoftimDashboard} />
                <Route path='/Lojtari/njoftimet/:id' component={NjoftimDetails} />
                

                 <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm} />
                 <Route key={location.key} path={['/createNjoftim', '/manage2/:id']} component={NjoftimForm} />
                //<Route path='/errors' component={TestErrors} />
                //<Route path='/server-error' component={ServerError} />
                //<Route path='/login' component={LoginForm} />
                //<Route component={NotFound} />
              </Switch>
            </Container>
          </>
        )}
      />


      <Route path="/Trajneri" component={TrajneriPage} />
      <Route
        path={"/Trajneri/(.+)"}
        render={() => (
          <>
            <NavTrajneri />

            <Container style={{ marginTop: "7em" }}>
              <Switch>
                <Route exact path='/Trajneri/Trajneret' component={TrajneriDashboard} />

                <Route exact path='/Trajneri/activities' component={ActivityDashboard} />
                <Route path='/Trajneri/activities/:id' component={ActivityDetails} />
                <Route exact path='/Trajneri/njoftimet' component={NjoftimDashboard} />
                <Route path='/Trajneri/njoftimet/:id' component={NjoftimDetails} />
                <Route exact path='/Trajneri/njoftimet' component={NjoftimDashboard} />
                <Route path='/Trajneri/njoftimet/:id' component={NjoftimDetails} />

                <Route exact path='/Trajneri/Lojtaret' component={LojtariDashboard} />  
                <Route exact path='/Trajneri/login' component={LoginForm} />
                <Route path='/Trajneri/Lojtaret/:id' component={LojtariForm} />
                <Route path='/Trajneri/registertrajneri' component={RegisterFormTrajneri} />
                <Route path='/Trajneri/registerLojtari' component={RegisterFormLojtari} />
                

                <Route key={location.key} path={['/Trajneri/trajneret', '/Trajneri/manage4/:id']} component={TrajneriForm} />
                 <Route key={location.key} path={['/Trajneri/createActivity', '/manage/:id']} component={ActivityForm} />
                 <Route key={location.key} path={['/Trajneri/createNjoftim', '/manage2/:id']} component={NjoftimForm} />

            
              </Switch>
            </Container>
          </>
        )}
      />




    </>
  );
}

export default observer(App);
