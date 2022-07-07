import { observer } from "mobx-react-lite";
import { Segment, Table, TableBody} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import RaportetListItem from "./RaportetListItem";



export default observer(function RaportetList(){
    
    const {raportetStore} =  useStore();
    
    const { RaportetById} =  raportetStore;

    return (
        <Segment.Group>
            <Segment className="ushtrimetlist">
                <Table celled compact >
                    <Table.Header>
                        <Table.Row>
                            {/* <Table.HeaderCell width='5' >Grupmosha ID</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Ushtrimi ID</Table.HeaderCell> */}
                           
                            <Table.HeaderCell width='8'>Lojtari</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Grupmosha</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Ushtrimi</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Muaji</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Java</Table.HeaderCell>
                            <Table.HeaderCell>Shiko</Table.HeaderCell>
                            <Table.HeaderCell>Fshije</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <TableBody>
                        {RaportetById.map(planet => (
                            <RaportetListItem key={planet.id} raporti={planet} />
                        ))}
                    </TableBody>
                </Table>
            </Segment>

        </Segment.Group>

    )
})

