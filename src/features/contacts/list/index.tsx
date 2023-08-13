import { Contact } from "../types";
import { ContactId, ContactInfo, ContactName, StyledLi, StyledUl } from "./styles";

interface ListProps {
  data: Contact[]
}

export function List({ data }: ListProps) {
  return (
    <StyledUl>
      {data.map((contact) =>
        <StyledLi>
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