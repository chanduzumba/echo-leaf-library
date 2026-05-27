import { useSelector } from "react-redux"
import BookList from "../components/BookList"

function BrowseBooks() {
  const [books, setBooks] = useSelector(store => store.books.allBooks)
  console.log(books)
  return (
    <div>
      <h1>Browse Page</h1>
      <BookList />
    </div>
  )
}

export default BrowseBooks
