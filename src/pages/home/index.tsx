import { List } from "../../features/contacts/list"
import { Table } from "../../features/contacts/table"
import { useContacts } from "../../features/contacts/useContacts"
import useViewport from "../../hooks/useViewport"

const desktopSize = 980

export function Home() {
  const { data, isLoading } = useContacts()
  const { width } = useViewport()

  if (isLoading) {
    return <>Carregando</>
  }

  return (
    <main>
      <h1>Contatos</h1>

      {width >= desktopSize ? <Table data={data} /> : <List data={data} />}
    </main>
  )
}