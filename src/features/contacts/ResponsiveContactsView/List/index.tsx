import { Contact } from "../../types";
import { ContactId, ContactInfo, ContactName, StyledLi, StyledUl } from "./styles";

interface ListProps {
  data: Contact[];
  onClick: (contact: Contact) => void
}

export function List({ data, onClick }: ListProps) {
  return (
    <StyledUl>
      {data?.map((contact) =>
        <StyledLi key={contact.id} onClick={() => onClick(contact)}>
          <ContactId>{contact.id}</ContactId>

          <div>
            <ContactName>{contact.name}</ContactName>

            <ContactInfo>
              <span>{contact.email}</span>
              <span>{contact.phone}</span>
            </ContactInfo>
          </div>
        </StyledLi>
      )}
    </StyledUl>
  )
}