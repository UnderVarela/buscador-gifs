import PropTypes from 'prop-types'
import { useState } from 'react'

export function AddCategory ({ onAddCategory }) {
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setSearch(value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (search.trim().length === 0) return
    onAddCategory(search.trim())
    // const copy = structuredClone(categories)
    // copy.push({ id: Date.now(), category: search })
    // setCategories(copy)

    // Ahora con el metodo Spread:
    // setCategories([...categories, { id: Date.now(), category: search }])
    setSearch('')
  }

  return (
    <form onSubmit={handleSubmit} role='search' style={{ display: 'flex', gap: '.5rem' }}>
      <label htmlFor='search'>Categorias</label>
      <input
        type='text'
        id='search'
        placeholder='ej: gatitos'
        value={search}
        onChange={handleChange}
        className='border border-black rounded'
      />
    </form>
  )
}
AddCategory.proptypes = {
  onAddCategory: PropTypes.func.isRequired
}
