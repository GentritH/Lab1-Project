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
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.hene1)}</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.marte1)}</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.merkure1)}</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.enjte1)}</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.premte1)}</Table.Cell>

              </Table.Row>
              <Table.Row>
                <Table.Cell>2</Table.Cell>
                 <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.hene2)}</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.marte2)}</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.merkure2)}</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.enjte2)}</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.premte2)}</Table.Cell>
              </Table.Row>
              
              <Table.Row>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.hene3)}</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.marte3)}</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.merkure3)}</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.enjte3)}</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.premte3)}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>4</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.hene4)}</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.marte4)}</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.merkure4)}</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.enjte4)}</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.premte4)}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.hene5)}</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.marte5)}</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.merkure5)}</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.enjte5)}</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.premte5)}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>6</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.hene6)}</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.marte6)}</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.merkure6)}</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.enjte6)}</Table.Cell>
                <Table.Cell>{ushtrimiStore.getEmriUshtrimitById(oraret.premte6)}</Table.Cell>
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