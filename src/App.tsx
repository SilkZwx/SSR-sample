import { useState } from 'react'
import vim from './assets/vim.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://github.com/vim/vim" target="_blank">
          <img src={vim} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Ariyama</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
