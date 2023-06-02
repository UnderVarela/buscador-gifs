import PropTypes from 'prop-types'
import { getGifs } from '../helpers/getgifs'
import { useState, useEffect } from 'react'

export function GifGrid ({ category }) {
  // setData(getGifs(category))
  const [data, setData] = useState([])
  useEffect(function () {
    getGifs(category).then(setData)
  }, [])
  return (

    <div className='flex gap-1 flex-wrap'>
      {
        data?.map(function (gif) {
          const { id, title, url } = gif
          return (
            <figure key={id}>
              <img className='w-56' key={id} src={url} alt={title} />
              <figcaption>{title}</figcaption>
            </figure>
          )
        })
      }
    </div>
  )
}
GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
