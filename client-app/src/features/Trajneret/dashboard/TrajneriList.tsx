import { observer } from "mobx-react-lite";
import { Segment, Table, TableBody} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import TrajneriListItem from "./TrajneriListItem";

export default observer(function TrajneriList(){
    
    const {TrajneriStore} =  useStore();
    
    const { TrajneriById} =  TrajneriStore;

    return (
        <Segment.Group>
            <Segment className="trajnerilist">
                <Table celled compact >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell width='5'>Emri</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Mbiemri</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Roli</Table.HeaderCell>
                            <Table.HeaderCell>Shiko</Table.HeaderCell>
                            <Table.HeaderCell>Fshije</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <TableBody>
                        {TrajneriById.map(trajneri => (
                            <TrajneriListItem key={trajneri.id} trajneri={trajneri} />
                        ))}
                    </TableBody>
                </Table>
            </Segment>

        </Segment.Group>

    )
})