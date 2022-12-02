import Container from 'components/Container/Container'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound: React.FC = () => {
  return (
    <Container centerContent>
      <h1 className="text-6xl font-bold tracking-wider text-white md:text-8xl">
        404
      </h1>
      <h2 className="mt-1 text-center text-white md:text-xl">
        Page not found, try to create a new room.
      </h2>

      <div className="mt-8">
        <Link className="font-bold text-white underline" to="/create-room">
          Create a new Room
        </Link>
      </div>
    </Container>
  )
}

export default NotFound
