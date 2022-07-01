import React, { SyntheticEvent, useState } from "react";
import { Button, TableCell, TableRow } from "semantic-ui-react";
import { Grupmoshat } from "../../../app/models/grupmoshat";
import { useStore } from "../../../app/stores/store";

interface Props{
    grupmoshat: Grupmoshat
}

export default function GrupmoshatListItem({grupmoshat}: Props) {
     
    const {grupmoshatStore} =  useStore();
    
    const {deleteGrupmoshat, loading} =  grupmoshatStore;


    const [target, setTarget] = useState('');

    function handleDeleteGrupmoshat(e:SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(e.currentTarget.name);
        deleteGrupmoshat(id);
    }


    return (
        <TableRow key={grupmoshat.id}>
            <TableCell >{grupmoshat.emriGrupmoshes}</TableCell>
            <TableCell>
                <Button
                   onClick={() => grupmoshatStore.selectGrupmoshat(grupmoshat.id)}
                   floated='right'
                   content='View'
                   color='blue' />
            </TableCell>
            <TableCell>
                <Button
                    name={grupmoshat.id}
                    loading={loading && target === grupmoshat.id}
                    onClick={(e) => handleDeleteGrupmoshat(e, grupmoshat.id)}
                    floated='right'
                    content='Delete' color='red' />
            </TableCell>
        </TableRow>
    )
}