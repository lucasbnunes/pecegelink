import { useContacts } from "../../features/contacts/useContacts"

export function Home() {
  const { data } = useContacts()
  console.log(data)
  return <main>
    <h1>Contatos</h1>
  </main>
}