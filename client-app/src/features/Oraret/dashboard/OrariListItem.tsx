import React, { SyntheticEvent, useState } from "react";
 import { Button, Table, TableCell, TableRow } from "semantic-ui-react";
 import { Orari } from "../../../app/models/orari";
 import { useStore } from "../../../app/stores/store";

 interface Props {
     oraret: Orari
 }

 export default function OrariListItem({ oraret }: Props) {

     const { orariStore } = useStore();

     const { deleteOrari, loading } = orariStore;


     const [target, setTarget] = useState('');




     function handleDeleteOrari(e: SyntheticEvent<HTMLButtonElement>, id: string) {
         setTarget(e.currentTarget.name);
         deleteOrari(id);
     }

     return (
         <TableRow key={oraret.id}>
             <Table.Cell>1</Table.Cell>
                 <Table.Cell>{oraret.hene}</Table.Cell>

             <TableCell>
             <Table.Row key={oraret.id}>
                 <Table.Cell>2</Table.Cell>
                 <Table.Cell>{oraret.marte}</Table.Cell>

               </Table.Row>
               <Table.Row key={oraret.id}>
                 <Table.Cell>3</Table.Cell>

                 <Table.Cell>{oraret.merkure}</Table.Cell>

               </Table.Row>
               <Table.Row key={oraret.id}>
                 <Table.Cell>4</Table.Cell>

                 <Table.Cell>{oraret.enjte}</Table.Cell>

               </Table.Row>
               <Table.Row key={oraret.id}>
                 <Table.Cell>5</Table.Cell>
                 <Table.Cell>{oraret.premte}</Table.Cell>
               </Table.Row>

             </TableCell>
             <TableCell>
             <Button
               onClick={() => orariStore.selectOrari(oraret.id)}
               floated="right"
               content="View"
               color="blue"
             />
             <Button
               name={oraret.id}
               loading={loading && target === oraret.id}
               onClick={(e) => handleDeleteOrari(e, oraret.id)}
               floated="right"
               content="Delete"
               color="red"
             />
               
             </TableCell>
         </TableRow>
     )
 }


