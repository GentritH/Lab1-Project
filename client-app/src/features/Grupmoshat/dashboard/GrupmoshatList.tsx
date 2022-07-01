import { observer } from "mobx-react-lite";
import { Segment, Table, TableBody} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import GrupmoshatListItem from "./GrupmoshatListItem";

export default observer(function GrupmoshatList(){
    
    const {grupmoshatStore} =  useStore();
    
    const {grupmoshatTById} =  grupmoshatStore;

    return (
        <Segment.Group>
            <Segment className="grupmoshatlist">
                <Table  celled compact >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell >Emri i Grupmoshes</Table.HeaderCell>
                            <Table.HeaderCell>Shiko</Table.HeaderCell>
                            <Table.HeaderCell>Fshije</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <TableBody>
                        {grupmoshatTById.map(grupmoshat => (
                            <GrupmoshatListItem key={grupmoshat.id} grupmoshat={grupmoshat} />
                        ))}
                    </TableBody>
                </Table>
            </Segment>

        </Segment.Group>

    )
})