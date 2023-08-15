import { useForm, SubmitHandler } from "react-hook-form"
import { Contact } from "../../types"
import { Input } from "../../../../components/Input"
import { InputGroup, StyledForm } from "./styles"
import { Button } from "../../../../components/Button"
import { Modal } from "../../../../components/Modal"

interface EditFormProps {
  defaultValues: Contact
}

export function EditForm({ defaultValues }: EditFormProps) {
  const {
    register,
    handleSubmit,
  } = useForm<Contact>({ defaultValues })

  const onSubmit: SubmitHandler<Contact> = (data) => console.log(data)

  return (
    <>
      <Modal.Title>Editar contato</Modal.Title>
      <Modal.Body>
        <StyledForm onSubmit={handleSubmit(onSubmit)} id="edit-contact">
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
      </Modal.Body>
      <Modal.Footer>
        <Button color="gray" variant="outline">Cancelar</Button>
        <Button type="submit" form="edit-contact">Salvar</Button>
      </Modal.Footer>
    </>
  )
}