import Container from 'components/Container/Container'
import React from 'react'
import { useParams } from 'react-router-dom'

const Call: React.FC = () => {
  const { callId } = useParams()

  return (
    <Container>
      <p>Call</p>
    </Container>
  )
}

export default Call
