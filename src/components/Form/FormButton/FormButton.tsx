import React from 'react'

interface FormButtonProps extends React.HTMLProps<HTMLButtonElement> {
  title: string
  type?: 'button' | 'submit' | 'reset'
}

const FormButton: React.FC<FormButtonProps> = ({
  title,
  className,
  type,
  ...props
}) => {
  return (
    <button
      type={type || 'submit'}
      className={`py-2 px-12 my-4 font-bold text-white bg-primary rounded-md focus:ring-2 focus:ring-inset focus:ring-white ${className}`}
      {...props}
    >
      {title}
    </button>
  )
}

export default FormButton
