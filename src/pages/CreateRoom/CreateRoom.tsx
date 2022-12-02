import FormInput from 'components/Form/FormInput/FormInput'
import FormButton from 'components/Form/FormButton/FormButton'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from 'components/Container/Container'

const CreateRoom: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [roomName, setRoomName] = useState('')
  const navigate = useNavigate()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    navigate('/call/94959-3937-399')
  }

  return (
    <Container centerContent>
      <form
        onSubmit={onSubmit}
        className="container flex flex-col gap-y-4 items-center mx-auto w-10/12  bg-gradient-to-r from-primary to-primary-darker rounded-md md:w-1/2 xl:w-1/3"
      >
        <div
          id="form-header"
          className="self-start mb-3 w-full divide-y divide-white"
        >
          <h3 className="my-4 mb-2 ml-4 text-lg font-bold text-white">
            Create Room
          </h3>
          <p></p>
        </div>

        <div className="flex flex-col w-4/5 font-bold md:w-80">
          <label htmlFor="name" className="text-sm text-white">
            Name
          </label>
          <FormInput
            id="name"
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setName(e.currentTarget.value)
            }
          />
        </div>

        <div className="flex flex-col w-4/5 font-bold md:w-80">
          <label htmlFor="email" className="text-sm text-white">
            Email
          </label>
          <FormInput
            id="email"
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setEmail(e.currentTarget.value)
            }
          />
        </div>

        <div className="flex flex-col w-4/5 font-bold md:w-80">
          <label htmlFor="roomName" className="text-sm text-white">
            Room Name
          </label>
          <FormInput
            id="roomName"
            type="text"
            value={roomName}
            placeholder="Ex: Design Critique"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setRoomName(e.currentTarget.value)
            }
          />
        </div>

        <FormButton title="Create" />
      </form>

      <div className="mt-4">
        <Link className="font-bold text-white underline" to="/join-room">
          Join Room
        </Link>
      </div>
    </Container>
  )
}

export default CreateRoom
