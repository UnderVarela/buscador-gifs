import data from './mocks/luke-skywalker.json'
import './App.css'
import { useState } from 'react'

const addFilm = () => {
  console.log('funciono')
}
function App () {
  const [luke, setLuke] = useState(data)
  const [value, setValue] = useState('Soy yo')
  const { films } = luke
  const addFilm = (e) => {
    e.preventDefault()
    if (value.trim().length === 0) return
    const copy = structuredClone(luke)
    copy.films.push(value)
    setLuke(copy)
  }

  const handleChange = ({ target }) => {
    setValue(target.value)
  }
  return (
    <>
      <h1> Ejercicio Star Wars </h1>
      {luke.name}
      <form
        onSubmit={addFilm}
        id='alta'
      >

        <label>
          Direccion URL
          <input
            type='url'
            placeholder='https://www.google.es'
            onChange={handleChange}
            value={value}
          />
        </label>
        {value}

      </form>
      <button
        form='alta'
        onClick={addFilm}
        style={{ display: 'block' }}
      >
        Añadir Enlace
      </button>
      <ul>
        {films.map((link, i) => <li key={i}>
          <a href={link}>Enlace {i + 1}</a>
        </li>)}
      </ul>
    </>
  )
}

export default App
