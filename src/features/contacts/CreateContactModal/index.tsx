import { Button } from "../../../components/Button";
import { Modal } from "../../../components/Modal";
import { ContactForm } from "../ContactForm";
import { Contact } from "../types";
import { useCreateContactMutation } from "../useCreateContactMutation";

interface CreateContactModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function CreateContactModal({ open, setOpen }: CreateContactModalProps) {
  const { mutateAsync } = useCreateContactMutation()

  async function handleSubmit(data: Partial<Contact>) {
    try {
      await mutateAsync(data as Contact)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Modal open={open} setOpen={setOpen}>
      <Modal.Title>Adicionar novo contato</Modal.Title>
      <Modal.Body>
        <ContactForm onSubmit={handleSubmit} id="create-form" />
      </Modal.Body>
      <Modal.Footer>
        <Button color="gray" variant="outline">Cancelar</Button>
        <Button form="create-form">Salvar</Button>
      </Modal.Footer>
    </Modal>
  )
}