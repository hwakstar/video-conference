import React from 'react'

interface ContainerProps {
  children?: React.ReactNode
  centerContent?: boolean
}

const Container: React.FC<ContainerProps> = ({
  children,
  centerContent = false
}) => {
  return (
    <main className="flex w-screen h-screen bg-gradient-to-r from-bg-color-s to-bg-color-e">
      <div
        className={`container flex flex-col
          lg:max-w-none ${centerContent ? 'justify-center items-center' : ''}`}
      >
        {children}
      </div>
    </main>
  )
}

export default Container
