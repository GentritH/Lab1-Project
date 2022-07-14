import React, { SyntheticEvent, useState } from "react";
import { Button, TableCell, TableRow } from "semantic-ui-react";
import { raportet } from "../../../app/models/Raportet";
import { useStore } from "../../../app/stores/store";

interface Props{
    raporti: raportet
}

export default function RaportetListItem({raporti}: Props) {
     
    const {raportetStore,ushtrimiStore,grupmoshatStore,lojtariStore} =  useStore();
    
    const {deleteRaportet, loading} =  raportetStore;


    const [target, setTarget] = useState('');

    function handleDeleteRaporti(e:SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(e.currentTarget.name);
        deleteRaportet(id);
    }


    return (
        <TableRow key={raporti.id}>
           <TableCell>{lojtariStore.getEmriLojtaritById(raporti.lojtariId)} {lojtariStore.getMbiemriLojtaritById(raporti.lojtariId)}</TableCell>
            <TableCell>{grupmoshatStore.getEmriGrupmoshestById(raporti.grupmoshaId)}</TableCell>
            <TableCell>{ushtrimiStore.getEmriUshtrimitById(raporti.ushtrimiId)}</TableCell>
            <TableCell>{raporti.muaji}</TableCell>
            <TableCell>{raporti.java}</TableCell>
            <TableCell>{raporti.komenti}</TableCell>
            <TableCell>
                <Button
                   onClick={() => raportetStore.selectRaportet(raporti.id)}
                   floated='right'
                   content='View'
                   color='blue' />
            </TableCell>
            

        </TableRow>
    )
}