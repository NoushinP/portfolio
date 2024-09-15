import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<AboutMe/>
    </>
  )
}

export default App
