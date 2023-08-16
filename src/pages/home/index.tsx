import { useState } from "react"
import { Button } from "../../components/Button"
import { ResponsiveContactsView } from "../../features/contacts/ResponsiveContactsView"
import { CreateContactModal } from "../../features/contacts/CreateContactModal"
import { Header, PageTitle } from "./styles"

export function Home() {
  const [open, setOpen] = useState(false)

  return (
    <main>
      <Header>
        <PageTitle style={{ margin: 0 }}>Contatos</PageTitle>
        <Button onClick={() => setOpen(true)}>Adicionar contato</Button>
      </Header>

      <CreateContactModal open={open} setOpen={setOpen} />
      <ResponsiveContactsView />
    </main>
  )
}