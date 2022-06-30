import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, ButtonGroup, Card} from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';

export default observer(function LojtariDetails () {
    const {lojtariStore} = useStore();
    const {selectedLojtari: lojtari, loadingInitial,loadLojtari, cancelSelectedLojtari, openForm2} = lojtariStore;
    const {id} = useParams<{id:  string}>();

    useEffect(() => {
        if(id) loadLojtari(id);
    }, [id, loadLojtari]);

    if(loadingInitial || !lojtari) return <LoadingComponent/>;

    return(
        <Card fluid>
            <Card.Content>
                <Card.Header>{lojtari.emri} {lojtari.mbiemri}</Card.Header>
                <Card.Description>
                    <div><label>Username: </label>{lojtari.userName}</div>
                    <div><label>Emri i prindit: </label>{lojtari.emriPrindit}</div>
                    <div><label>Grupmosha </label>{lojtari.grupmosha}</div>
                    <div><label>Email: </label>{lojtari.email}</div>
                    {/* <div><label>Numri i telefonit: </label>{lojtari.numriTelefonit}</div> */}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <ButtonGroup widths='2'>
                    <Button onClick={() => openForm2(lojtari.id)} basic color='blue' content='Edit'/>
                    <Button onClick={cancelSelectedLojtari} basic color='grey' content='Cancel'/>
                </ButtonGroup>
            </Card.Content>
        </Card>

    )
})