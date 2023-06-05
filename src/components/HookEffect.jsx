import { useEffect, useState } from 'react'

export function HookEffect () {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setCounter(counter + 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <button
        onClick={() => setCounter(counter + 1)}
        className='relative w-48 h-12 overflow-hidden text-lg font-bold text-white bg-green-500 group rounded-2xl'
      >
        {counter}
        <div className='absolute inset-0 w-full h-full transition-all duration-300 scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl' />
      </button>
    </>
  )
}
