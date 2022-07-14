import { observer } from "mobx-react-lite";
import { Segment, Table, TableBody} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import RaportetListItemLojtari from "./RaportetListItemLojtari";



export default observer(function RaportetList(){
    
    const {raportetStore,lojtariStore} =  useStore();
    
    const { RaportetById} =  raportetStore;
    const { lojtaret } =  lojtariStore;

    return (
        <Segment.Group>
            <Segment className="ushtrimetlist">
                <Table celled compact >
                    <Table.Header>
                        <Table.Row>
                           
                           
                            <Table.HeaderCell width='8'>Lojtari</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Grupmosha</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Ushtrimi</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Muaji</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Java</Table.HeaderCell>
                            <Table.HeaderCell width='10'>Komenti</Table.HeaderCell>
                            <Table.HeaderCell>Shiko</Table.HeaderCell>
                            
                            
                        </Table.Row>
                    </Table.Header>
                    <TableBody>
                     
                      {RaportetById.filter(lojtari => lojtari.lojtariId === lojtaret?.id).map(planet => (
                             <RaportetListItemLojtari key={planet.id} raporti={planet} />
                         ))}
                    </TableBody>
                </Table>
            </Segment>

        </Segment.Group>

    )
})



