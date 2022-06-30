import React, { SyntheticEvent, useState } from "react";
import { Button, Header, Icon, Modal, TableCell, TableRow } from "semantic-ui-react";
import { Lojtaret } from "../../../app/models/UserLojtari";
import { useStore } from "../../../app/stores/store";

interface Props {
    lojtari: Lojtaret
}

export default function LojtariListItem({ lojtari }: Props) {

    const { lojtariStore } = useStore();

    const { deleteLojtari, loading } = lojtariStore;


    const [target, setTarget] = useState('');

    const [open, setOpen] = React.useState(false);


    function handleDeleteLojtari(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteLojtari(id);
    }

    return (
        <TableRow key={lojtari.id}>
            <TableCell >{lojtari.emri}</TableCell>
            <TableCell>{lojtari.mbiemri}</TableCell>
            <TableCell>{lojtari.userName}</TableCell>
            <TableCell>{lojtari.grupmosha}</TableCell>
            <TableCell>{lojtari.emriPrindit}</TableCell>
            <TableCell>{lojtari.email}</TableCell>
            {/* <TableCell>{lojtari.numriTelefonit}</TableCell> */}
            <TableCell>
                <Button
                    onClick={() => lojtariStore.selectLojtaret(lojtari.id)}
                    floated='right'
                    content='View'
                    color='blue' />
            </TableCell>
            <TableCell>

                <Modal
                    closeIcon
                    open={open}
                    trigger={<Button floated="right" content='Delete' color="red" />}
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
                            name={lojtari.id}
                            loading={loading && target === lojtari.id}
                            onClick={(e) => handleDeleteLojtari(e, lojtari.id)}
                            color='green'>
                            <Icon name='checkmark' /> Yes

                        </Button>
                    </Modal.Actions>
                </Modal>
            </TableCell>
        </TableRow>
    )
}


