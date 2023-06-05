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

    <div className='flex flex-wrap gap-1'>
      {
        data?.map(function (gif) {
          const { id, title, url } = gif
          return (
            <figure key={id}>
              <img className='object-cover w-56 h-56 rounded' key={id} src={url} alt={title} />
              {/* <figcaption>{title}</figcaption> */}
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
