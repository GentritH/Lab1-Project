import { observer } from "mobx-react-lite";
import { Segment, Table, TableBody} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import LojtariListItem from "./LojtariListItem";

export default observer(function LojtariList(){
    
    const {lojtariStore} =  useStore();
    
    const { LojtariById} =  lojtariStore;

    return (
        <Segment.Group>
            <Segment className="lojtariList">
                <Table celled compact >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell width='5'>Emri</Table.HeaderCell>
                            <Table.HeaderCell width='4'>Mbiemri</Table.HeaderCell>
                            <Table.HeaderCell width='4'>Username</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Grupmosha</Table.HeaderCell>
                            <Table.HeaderCell width='8'>EmriPrindit</Table.HeaderCell>
                            <Table.HeaderCell width='8'>Email</Table.HeaderCell>
                            {/* <Table.HeaderCell width='9'>NumriTelefonit</Table.HeaderCell> */}
                            <Table.HeaderCell>Shiko</Table.HeaderCell>
                            <Table.HeaderCell>Fshije</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <TableBody>
                        {LojtariById.map(lojtaret => (
                            <LojtariListItem key={lojtaret.id} lojtari={lojtaret} />
                        ))}
                    </TableBody>
                </Table>
            </Segment>
        </Segment.Group>

    )
})