import { observer } from "mobx-react-lite";
import { Segment, Table, TableBody} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import UshtrimiListItem from "./UshtrimiListItem";

export default observer(function UshtrimiList(){
    
    const {ushtrimiStore} =  useStore();
    
    const { ushtrimetById} =  ushtrimiStore;

    return (
        <Segment.Group>
            <Segment className="ushtrimetlist">
                <Table celled compact >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell width='5' >Emri i Ushtrimit</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Pershkrimi i Ushtrimit</Table.HeaderCell>
                            <Table.HeaderCell>Shiko</Table.HeaderCell>
                            <Table.HeaderCell>Fshije</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <TableBody>
                        {ushtrimetById.map(ushtrimi => (
                            <UshtrimiListItem key={ushtrimi.id} ushtrimi={ushtrimi} />
                        ))}
                    </TableBody>
                </Table>
            </Segment>

        </Segment.Group>

    )
})