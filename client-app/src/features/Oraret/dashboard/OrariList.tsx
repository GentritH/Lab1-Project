import { observer } from "mobx-react-lite";
import { SyntheticEvent, useState } from "react";
import { Button, Item, Segment, Table, } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";


export default observer(function OraretList() {
  const { orariStore, ushtrimiStore } = useStore();
  const { getOraret, deleteOrari, loading} = orariStore;

  const [target, setTarget] = useState("");
  function handleOrariDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
    setTarget(e.currentTarget.name);
    deleteOrari(id);
  }

  return (
    <Segment clearing>
      <Item.Group divided relaxed>
      {getOraret.map((oraret) => (
          <Table key={oraret.id} celled compact>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Ora</Table.HeaderCell>
                <Table.HeaderCell>E Hene</Table.HeaderCell>
                <Table.HeaderCell>E Marte</Table.HeaderCell>
                <Table.HeaderCell>E Merkure</Table.HeaderCell>
                <Table.HeaderCell>E Enjte</Table.HeaderCell>
                <Table.HeaderCell>E Premte</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.hene)}</Table.Cell>


              </Table.Row>
              <Table.Row>
                <Table.Cell>2</Table.Cell>
                 <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.marte)}</Table.Cell>

              </Table.Row>
              <Table.Row>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.merkure)}</Table.Cell>

              </Table.Row>
              <Table.Row>
                <Table.Cell>4</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.enjte)}</Table.Cell>

              </Table.Row>
              <Table.Row>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.premte)}</Table.Cell>

              </Table.Row>

            </Table.Body>
            <Button
              onClick={() => orariStore.selectOrari(oraret.id)}
              floated="right"
              content="View"
              color="blue"
            />
            <Button
              name={oraret.id}
              loading={loading && target === oraret.id}
              onClick={(e) => handleOrariDelete(e, oraret.id)}
              floated="right"
              content="Delete"
              color="red"
            />
          </Table>
         ))}
      </Item.Group>
    </Segment>
  );
});