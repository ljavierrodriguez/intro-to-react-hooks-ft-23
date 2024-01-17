import React from 'react'
import Input from './Input'

const Form = ({ search, setSearch }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <Input search={search} setSearch={setSearch} />
    </form>
  )
}

export default Form