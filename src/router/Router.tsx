import Call from 'pages/Call/Call'
import CreateRoom from 'pages/CreateRoom/CreateRoom'
import EndCall from 'pages/EndCall/EndCall'
import JoinRoom from 'pages/JoinRoom/JoinRoom'
import NotFound from 'pages/NotFound/NotFound'
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="create-room" replace />} />
      <Route path="/create-room" element={<CreateRoom />} />
      <Route path="/join-room" element={<JoinRoom />} />
      <Route path="/call/:callId" element={<Call />} />
      <Route path="/end-call" element={<EndCall />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router
