import { observer } from "mobx-react-lite";
import { Segment, Table, TableBody} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import UshtrimiListItem from "./UshtrimiListItemLojtari";

export default observer(function UshtrimiListLojtari(){
    
    const {ushtrimiStore} =  useStore();
    
    const { ushtrimetById} =  ushtrimiStore;

    return (
        <Segment.Group>
            <Segment className="ushtrimetlist">
                <Table celled compact >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell width='6' >Emri i Ushtrimit</Table.HeaderCell>
                            <Table.HeaderCell width='9'>Pershkrimi i Ushtrimit</Table.HeaderCell>
                            
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