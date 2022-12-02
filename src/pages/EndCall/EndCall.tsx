import Container from 'components/Container/Container'
import FormButton from 'components/Form/FormButton/FormButton'
import React from 'react'
import { Link } from 'react-router-dom'

const EndCall: React.FC = () => {
  return (
    <Container centerContent>
      <h1 className="text-xl font-bold text-white md:text-4xl">
        Call has been ended.
      </h1>

      <div className="row-auto mt-4">
        <Link className="font-bold text-white underline" to="/create-room">
          <FormButton title="Create a new room" type="button" />
        </Link>
      </div>
    </Container>
  )
}

export default EndCall
