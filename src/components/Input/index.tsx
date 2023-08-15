import { HTMLProps } from "react";
import { FieldValues, Path, UseFormRegister, RegisterOptions, FieldError } from "react-hook-form";
import { ErrorMessage, InputWrapper, StyledFieldset } from "./styles";

interface InputProps<T extends FieldValues> extends HTMLProps<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  name: Path<T>;
  register?: UseFormRegister<T>;
  registerOptions?: RegisterOptions<T, Path<T>>;
  error?: FieldError;
}


export function Input<T extends FieldValues>({
  label,
  icon,
  register,
  name = '' as Path<T>,
  registerOptions = {},
  error,
  ...props
}: InputProps<T>) {
  return (
    <StyledFieldset>
      <label htmlFor={name}>{label}</label>

      <InputWrapper>
        <input id={name} {...register ? register(name, registerOptions) : {}} {...props} />
        {icon}
      </InputWrapper>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </StyledFieldset>
  )
}