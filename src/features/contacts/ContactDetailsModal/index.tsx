import { Button } from "../../../components/Button";
import { Modal } from "../../../components/Modal";
import { Contact } from "../types";
import { DetailsContainer, InfoGroup, MainInfo, Separator } from "./styles";

interface ContactDetailsModal {
  open: boolean;
  setOpen: (open: boolean) => void;
  contact?: Contact;
}

export function ContactDetailsModal({ open, setOpen, contact }: ContactDetailsModal) {
  if (!contact) {
    return
  }

  return (
    <Modal open={open} setOpen={setOpen}>
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
        <Button color="primary" variant="ghost">Excluir</Button>
        <Button color="gray" variant="outline">Editar</Button>
      </Modal.Footer>
    </Modal>
  )
}