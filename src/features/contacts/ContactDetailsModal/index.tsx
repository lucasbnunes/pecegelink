import { useState } from "react"
import { Modal } from "../../../components/Modal";
import { Contact } from "../types";
import { EditForm } from "./EditForm";
import { Details } from "./Details";

interface ContactDetailsModal {
  open: boolean;
  setOpen: (open: boolean) => void;
  contact?: Contact;
}

export function ContactDetailsModal({ open, setOpen, contact }: ContactDetailsModal) {
  const [isEditing, setIsEditing] = useState(false)

  if (!contact) {
    return
  }

  function handleOpen(open: boolean) {
    setOpen(open)
    setIsEditing(false)
  }

  function handleEditSuccess() {
    setOpen(false)
  }

  function handleCancelEdit() {
    setIsEditing(false)
  }

  return (
    <Modal open={open} setOpen={handleOpen}>
      {isEditing ?
        <EditForm defaultValues={contact} onSuccess={handleEditSuccess} onCancel={handleCancelEdit} />
        :
        <Details contact={contact} onClickEdit={() => setIsEditing(true)} onClickDelete={() => { }} />
      }
    </Modal>
  )
}