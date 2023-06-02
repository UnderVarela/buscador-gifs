import { useState } from 'react'
import Button from './components/Button'

export function ButtonApp () {
  const [count, setCount] = useState(0)
  return (
    <div style={{ display: 'grid', gap: '.5rem' }}>
      <h1>Botones</h1>
      <Button onMyClick={() => setCount(count + 1)}>
        boton {count}
      </Button>
      <Button onMyClick={() => setCount(count + 1)}>
        boton {count}
      </Button>

    </div>

  )
}
