import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import BookList from "./components/BookList.jsx";
import AddBook from "./components/AddBook.jsx";
import BrowseBooks from "./pages/BrowseBooks.jsx";
import PageNotFound from "./components/PageNotFound.jsx";

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  errorElement: <PageNotFound />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "/books/:category",
      element: <BrowseBooks />,
    },
    {
      path: 'books',
      element: <BrowseBooks />
    },
    {
      path: "/book/:id",
      element: <BookDetails />,
    },
    {
      path: "/add",
      element: <AddBook />,
    },
    // {
    //   path: "/browse",
    //   element: <BrowseBooks />,
    // },
  ],
}]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
