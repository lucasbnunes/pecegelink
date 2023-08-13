import { Table } from "../../features/contacts/table"
import { useContacts } from "../../features/contacts/useContacts"

export function Home() {
  const { data } = useContacts()

  return (
    <main>
      <h1>Contatos</h1>

      <Table data={data} />
    </main>
  )
}