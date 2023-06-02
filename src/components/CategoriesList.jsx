import PropTypes from 'prop-types'
import { GifGrid } from './GifGrid'

export function CategoriesList ({ categoriesAll = [] }) {
  return (
    <>
      {
        categoriesAll?.map(
          ({ id, category }) => (
            <section key={id}>
              <h2>{category}</h2>
              {/* Aqui van todos los GIFs de la categoria */}
              <GifGrid category={category} />
            </section>
          ))
      }

    </>
  )
}
CategoriesList.propTypes = {
  categoriesAll: PropTypes.array
}
