import { useState } from "react"
import useViewport from "../../../hooks/useViewport"
import { useContacts } from "../useContacts"
import { List } from "./List"
import { Table } from "./Table"
import { ContactDetailsModal } from "../ContactDetailsModal"
import { Contact } from "../types"

const desktopSize = 980

export function ResponsiveContactsView() {
  const [open, setOpen] = useState(false)
  const [selectedContact, setSelectedContact] = useState<Contact | undefined>()
  const { data, isLoading } = useContacts()
  const { width } = useViewport()

  function handleContactClick(contact: Contact) {
    setSelectedContact(contact)
    setOpen(true)
  }

  if (isLoading) {
    return <>Carregando</>
  }

  return <>
    <ContactDetailsModal open={open} setOpen={setOpen} contact={selectedContact} />

    {width > desktopSize ? <Table data={data} onClick={handleContactClick} /> : <List data={data} onClick={handleContactClick} />}
  </>
}