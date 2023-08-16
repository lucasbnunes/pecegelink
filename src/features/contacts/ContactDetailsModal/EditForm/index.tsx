import { SubmitHandler } from "react-hook-form"
import { Contact } from "../../types"
import { Button } from "../../../../components/Button"
import { Modal } from "../../../../components/Modal"
import { useUpdateContactMutation } from "../../useUpdateContactMutation"
import { ContactForm } from "../../ContactForm"

interface EditFormProps {
  defaultValues: Contact;
  onSuccess: () => void;
  onCancel: () => void;
}

export function EditForm({ defaultValues, onSuccess, onCancel }: EditFormProps) {
  const { mutateAsync, isLoading } = useUpdateContactMutation()

  const onSubmit: SubmitHandler<Partial<Contact>> = async (data) => {
    try {
      await mutateAsync(data as Contact)
      onSuccess()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <Modal.Title>Editar contato</Modal.Title>
      <Modal.Body>
        <ContactForm onSubmit={onSubmit} defaultValues={defaultValues} id="edit-contact" />
      </Modal.Body>
      <Modal.Footer>
        <Button color="gray" variant="outline" disabled={isLoading} onClick={onCancel}>Cancelar</Button>
        <Button type="submit" form="edit-contact" disabled={isLoading}>Salvar</Button>
      </Modal.Footer>
    </>
  )
}