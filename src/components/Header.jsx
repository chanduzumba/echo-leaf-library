import React from 'react'
import { useSelector } from 'react-redux'

function Header() {
  const books = useSelector(store => store.books.allBooks)
  console.log(books) //testing store subscription
  return (
    <div>
      <h1>Echo Leaf Library</h1>
    </div>
  )
}

export default Header
