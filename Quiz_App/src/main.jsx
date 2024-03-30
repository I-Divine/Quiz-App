import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const QuizApp= ()=>{
  return(
    <>
      <App></App>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<QuizApp/>)