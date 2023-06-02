import React, { useState } from 'react'
import { CategoriesList, AddCategory } from './components'
import PropTypes from 'prop-types'
import uuid4 from 'uuid4'
import './App.css'
// import categoryData from './mocks/giphy-results.json'

function GiphyApp ({ title = 'Titulo de ejemplo' }) {
  // const { data } = categoryData
  // console.log(data)
  const [categories, setCategories] = useState([])

  const handleAddCategory = (categoryValue) => {
    const categoryValueLowerCase = categoryValue.toLocaleLowerCase()
    // for (const cat of categories) {
    // if (cat.category.toLocaleLowerCase() === categoryValueLowerCase) return
    // }
    // otra forma:
    if (categories.some(cat => cat.category.toLocaleLowerCase() === categoryValueLowerCase)) return
    setCategories([{ id: uuid4(), category: categoryValue }, ...categories])
    // { id: Date.now(), category: categoryValue }
  }

  return (
    <>
      <h2>{title}</h2>
      <AddCategory onAddCategory={handleAddCategory} />
      <CategoriesList categoriesAll={categories} />
    </>

  )
}

GiphyApp.propTypes = {
  title: PropTypes.string
}

export default GiphyApp
