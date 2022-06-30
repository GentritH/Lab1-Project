import React, { SyntheticEvent, useState } from "react";
import { Button, Header, Icon, Modal,TableCell, TableRow } from "semantic-ui-react";
import { Trajneri } from "../../../app/models/UserTrajneri";
import { useStore } from "../../../app/stores/store";

interface Props{
    trajneri: Trajneri
}

export default function TrajneriListItem({trajneri}: Props) {
     
    const {TrajneriStore} =  useStore();
    
    const {deleteTrajneri,loading} =  TrajneriStore;


    const [target, setTarget] = useState('');

    const [open, setOpen] = React.useState(false);


    function handleDeleteTrajneri(e:SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(e.currentTarget.name);
        deleteTrajneri(id);
    }

    return (
        <TableRow key={trajneri.id}>
            <TableCell >{trajneri.emri}</TableCell>
            <TableCell>{trajneri.mbiemri}</TableCell>
            <TableCell>{trajneri.roli}</TableCell>
            <TableCell>
                <Button
                   onClick={() => TrajneriStore.selectTrajneri(trajneri.id)}
                   floated='right'
                   content='View'
                   color='blue' />
            </TableCell>
            <TableCell>
    
                        <Modal
                            closeIcon
                            open={open}
                            trigger={<Button floated="right" content='Delete' color="red"  />}
                            onClose={() => setOpen(false)}
                            onOpen={() => setOpen(true)}
                            >
                            <Header icon='delete' content='Are you sure' />
                            <Modal.Content>
                                <p>
                                 Are you sure you want to delete the user?
                                </p>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button color='red' onClick={() => setOpen(false)}>
                                <Icon name='remove' /> No
                                </Button>
                                <Button
                                name={trajneri.id}
                                loading={loading && target === trajneri.id}
                                onClick={(e) => handleDeleteTrajneri(e, trajneri.id)}
                                  color='green'>
                                     <Icon name='checkmark' /> Yes

                                </Button>
                            </Modal.Actions>
                            </Modal>


            </TableCell>
        </TableRow>
    )
}


