import React, { SyntheticEvent, useState } from "react";
import { Button, TableCell, TableRow } from "semantic-ui-react";
import { Ushtrimi } from "../../../app/models/ushtrimi";
import { useStore } from "../../../app/stores/store";

interface Props{
    ushtrimi: Ushtrimi
}

export default function UshtrimiListItem({ushtrimi}: Props) {
     
    const {ushtrimiStore} =  useStore();
    const {deleteUshtrimi, loading} =  ushtrimiStore;
    const [target, setTarget] = useState('');

    function handleDeleteUshtrimi(e:SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(e.currentTarget.name);
        deleteUshtrimi(id);
    }

    return (
        <TableRow key={ushtrimi.id}>
            <TableCell >{ushtrimi.emriUshtrimit}</TableCell>
            <TableCell>{ushtrimi.pershkrimi}</TableCell>
            <TableCell>
                <Button
                   onClick={() => ushtrimiStore.selectUshtrimi(ushtrimi.id)}
                   floated='right'
                   content='View'
                   color='blue' />
            </TableCell>
            <TableCell>
                <Button
                    name={ushtrimi.id}
                    loading={loading && target === ushtrimi.id}
                    onClick={(e) => handleDeleteUshtrimi(e, ushtrimi.id)}
                    floated='right'
                    content='Delete' color='red' />
            </TableCell>
        </TableRow>
    )
}