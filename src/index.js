import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"

// function Greeting() {
//   return React.createElement(
//     "h3",
//     {},
//     "Element created using React.createComponent"
//   )
const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}
const Book = () => (
  <article className="book">
    <Img />
    <Title />
    <Author />
  </article>
)

const Img = () => (
  <img
    src="https://m.media-amazon.com/images/I/511Q7vQB90L.jpg"
    alt="book img"
  />
)
const Title = () => (
  <h3> Meow Meow: The Incredible True Story of Baby Patankar</h3>
)
const Author = () => {
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  }
  return <h3 style={inlineHeadingStyles}>Srinath Rao</h3>
}
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<BookList />)
