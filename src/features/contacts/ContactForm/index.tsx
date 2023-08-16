import { useForm } from "react-hook-form";
import { Contact } from "../types";
import { Input } from "../../../components/Input";
import { StyledForm, InputGroup } from "./styles";

interface ContactFormProps {
  onSubmit: (data: Contact | Partial<Contact>) => void;
  id?: string;
  defaultValues?: Partial<Contact>;
}
export function ContactForm({ onSubmit, id = "", defaultValues }: ContactFormProps) {
  const {
    register,
    handleSubmit,
  } = useForm({ defaultValues })

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} id={id}>
      <Input label="Nome" name="name" register={register} />
      <Input label="Email" name="email" type="email" register={register} />
      <Input label="Nome de usuário" name="username" register={register} />

      <InputGroup>
        <Input label="Telefone" name="phone" register={register} />
        <Input label="Website" name="website" register={register} />
      </InputGroup>

      <InputGroup>
        <Input label="CEP" name="address.zipcode" register={register} />
        <Input label="Cidade" name="address.city" register={register} />
      </InputGroup>
      <InputGroup>
        <Input label="Rua" name="address.street" register={register} />
        <Input label="Número" name="address.suite" register={register} />
      </InputGroup>

      <Input label="Empresa" name="company.name" register={register} />
      <Input label="Slogan" name="company.catchPhrase" register={register} />
      <Input label="Segmento" name="company.bs" register={register} />
    </StyledForm>
  )
}