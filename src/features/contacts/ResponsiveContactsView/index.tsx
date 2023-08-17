import { useState, useEffect } from "react"
import useViewport from "../../../hooks/useViewport"
import { useContacts } from "../useContacts"
import { List } from "./List"
import { Table } from "./Table"
import { ContactDetailsModal } from "../ContactDetailsModal"
import { Contact } from "../types"
import { Input } from "../../../components/Input"
import { IconSearch } from "@tabler/icons-react"
import { SearchWrapper } from "./style"

const desktopSize = 980

export function ResponsiveContactsView() {
  const [open, setOpen] = useState(false)
  const [selectedContact, setSelectedContact] = useState<Contact | undefined>()
  const { data, isLoading } = useContacts()

  const [filteredContacts, setFilteredContacts] = useState<Contact[]>(data)
  const [search, setSearch] = useState('')
  const { width } = useViewport()

  function handleContactClick(contact: Contact) {
    setSelectedContact(contact)
    setOpen(true)
  }

  useEffect(() => {
    if (data) {
      const newFilteredContacts = (data as Contact[]).filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase()))
      setFilteredContacts(newFilteredContacts)
    }
  }, [search, data])


  return <>
    <ContactDetailsModal open={open} setOpen={setOpen} contact={selectedContact} />

    <SearchWrapper>
      <Input label="Pesquisar por nome" name="search" value={search} onChange={(e) => setSearch(e.currentTarget.value)} icon={<IconSearch />} />
    </SearchWrapper>

    {!isLoading &&
      width > desktopSize ?
      <Table data={filteredContacts} onClick={handleContactClick} />
      :
      <List data={filteredContacts} onClick={handleContactClick} />
    }
  </>
}