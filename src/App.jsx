import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tictactoe from './components/tictactoe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tictactoe/>
    </>
  )
}

export default App
