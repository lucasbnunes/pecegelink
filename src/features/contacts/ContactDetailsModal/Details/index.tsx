import { Button } from "../../../../components/Button"
import { Modal } from "../../../../components/Modal"
import { Contact } from "../../types"
import { useDeleteContactMutation } from "../../useDeleteContactMutation";
import { DetailsContainer, MainInfo, InfoGroup, Separator } from "./styles"

interface DetailsProps {
  contact: Contact;
  onClickEdit: () => void;
  onDeleteSuccess: () => void;
}

export function Details({ contact, onClickEdit, onDeleteSuccess }: DetailsProps) {
  const { mutateAsync, isLoading } = useDeleteContactMutation()

  async function handleDelete() {
    try {
      await mutateAsync(contact)
      onDeleteSuccess()
    } catch (e) {
      console.error()
    }
  }

  return (
    <>
      <Modal.Title>Detalhes</Modal.Title>
      <Modal.Body>

        <DetailsContainer>
          <MainInfo>
            <h4>{contact.name}</h4>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </MainInfo>

          <InfoGroup>
            <h5>Telefone</h5>
            <span>{contact.phone}</span>
          </InfoGroup>
          <InfoGroup>
            <h5>Website</h5>
            <a href={contact.website} target="_blank" rel="noopener noreferrer">{contact.website}</a>
          </InfoGroup>
          <InfoGroup>
            <h5>Endereço</h5>
            <span>{contact.address.street}, {contact.address.suite} - {contact.address.city} ({contact.address.zipcode})</span>
          </InfoGroup>

          <Separator />

          <InfoGroup>
            <h5>Empresa</h5>
            <span>{contact.company.name}</span>
          </InfoGroup>

          <InfoGroup>
            <h5>Slogan</h5>
            <span>{contact.company.catchPhrase}</span>
          </InfoGroup>

          <InfoGroup>
            <h5>Segmento</h5>
            <span>{contact.company.bs}</span>
          </InfoGroup>
        </DetailsContainer>

      </Modal.Body>
      <Modal.Footer>
        <Button color="primary" variant="ghost" onClick={handleDelete} disabled={isLoading}>Excluir</Button>
        <Button color="gray" variant="outline" onClick={onClickEdit} disabled={isLoading}>Editar</Button>
      </Modal.Footer>
    </>
  )
}