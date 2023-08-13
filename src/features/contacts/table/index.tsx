import { Contact } from "../types"
import { StyledTBody, StyledTHead, StyledTable } from "./styles"

interface TableProps {
  data: Contact[]
}

export function Table({ data }: TableProps) {
  return <StyledTable>
    <StyledTHead>
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>E-mail</th>
        <th>Telefone</th>
      </tr>
    </StyledTHead>
    <StyledTBody>
      {data.map((contact) => <tr key={contact.id}>
        <td>{contact.id}</td>
        <td>{contact.name}</td>
        <td>
          <a href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </td>
        <td>{contact.phone}</td>
      </tr>
      )}
    </StyledTBody>
  </StyledTable>
}