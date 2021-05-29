import React from 'react'

interface IHeaderProps {
  className?: string
}

const Container: React.FC<IHeaderProps> = ({ children, className }) => {
  return (
    <div className={`container ${className}`}>
      {children}
    </div>
  )
}

export default Container
