import React from 'react'
import './App.css'
import Counter from './Counter'
import { Provider } from 'react-redux'
import { mystore } from './redux/store'

function App() {


  return (
    <>
    <Provider store ={mystore}>
      <Counter />   
    </Provider>     
    </>
  )
}

export default App
