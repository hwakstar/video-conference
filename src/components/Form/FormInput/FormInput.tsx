import React from 'react'

type FormInputProps = React.HTMLProps<HTMLInputElement>

const FormInput: React.FC<FormInputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`py-2 px-5 text-gray rounded-md focus:outline-secondary ${className}`}
      {...props}
    />
  )
}

export default FormInput
