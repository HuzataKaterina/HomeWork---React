import { useState } from 'react'
import FComponentListName from './Components/FComponentListName'
import FComponentCounter from './Components/FComponentCounter'
import FChangeLists from './Components/FChangeLists'
import FCompStopProp from './Components/FCompStopProp'

import './App.css'

function App() {
  
  return (
    <>
      <h2>Task 2</h2>
      <FComponentListName />
      <hr />
      <h2>Task 3</h2>
      <FComponentCounter />
      <hr />
      <h2>Task 5</h2>
      <FChangeLists />
      <hr />
      <h2>Task 6</h2>
      <FCompStopProp />
    </>
  )
}

export default App
