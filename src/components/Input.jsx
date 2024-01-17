import React from 'react'

const Input = ({ search, setSearch }) => {

    
  return (
    <>
    <label>Search:</label> <br />
    <input type="search" name="search" placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value) } />{/* Forma 3 */}
    </>
  )
}

export default Input