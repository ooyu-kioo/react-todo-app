import React from 'react'

interface Props {
  label: string;
}

export const Input: React.FC<Props> = ({ label }) => {

  return (
    <input type='text' name={label} />
  )
} 