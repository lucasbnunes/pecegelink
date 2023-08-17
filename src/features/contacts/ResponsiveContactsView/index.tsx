import { useState, useEffect, useCallback } from "react"
import useViewport from "../../../hooks/useViewport"
import { useContacts } from "../useContacts"
import { List } from "./List"
import { Table } from "./Table"
import { ContactDetailsModal } from "../ContactDetailsModal"
import { Contact } from "../types"
import { Input } from "../../../components/Input"
import { IconSearch } from "@tabler/icons-react"
import { SearchWrapper, SortButton } from "./style"

const desktopSize = 980

export function ResponsiveContactsView() {
  const [open, setOpen] = useState(false)
  const [selectedContact, setSelectedContact] = useState<Contact | undefined>()
  const { data, isLoading } = useContacts()

  const [filteredContacts, setFilteredContacts] = useState<Contact[]>(data)
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(false)
  const { width } = useViewport()

  function handleContactClick(contact: Contact) {
    setSelectedContact(contact)
    setOpen(true)
  }

  const filterContacts = useCallback((search: string, contacts: Contact[]) => {
    if (data) {
      const newFilteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase()))

      if (sort) {
        const sortedContacts = sortContactsByName(newFilteredContacts)
        setFilteredContacts(sortedContacts)
        return
      }

      setFilteredContacts(newFilteredContacts)
    }
  }, [data, sort])

  useEffect(() => {
    filterContacts(search, data)
  }, [search, data, filterContacts])


  function handleToggleSort(active: boolean) {
    setSort(active)
    if (active) {
      const sortedData = sortContactsByName(filteredContacts)
      setFilteredContacts(sortedData)
    } else {
      filterContacts(search, data)
    }
  }

  function sortContactsByName(contacts: Contact[]) {
    const sortedData = contacts.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    })

    return sortedData;
  }


  return <>
    <ContactDetailsModal open={open} setOpen={setOpen} contact={selectedContact} />

    <SearchWrapper>
      <SortButton active={sort} onClick={() => handleToggleSort(!sort)}>Ordenar A-Z</SortButton>
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