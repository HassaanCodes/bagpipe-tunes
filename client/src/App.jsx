import { useState } from 'react'
import './App.css'
import List from './components/List'
import Intro from './components/Intro'
import Dropdown from './components/Dropdown'

function App() {

  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a>About Bagpipes</a></li>
            <li><a>Selected Performances</a></li>
            <li><a>Learning</a></li>
          </ul>
        </nav>

      </header>

      <main>
        <Intro/>
        <Dropdown/>
        {/* <List/> */}
      </main>

      <footer>
        <h2><a>Jacob Marley</a></h2>
        <h2>Believe in Me</h2>
      </footer>
    </>
  )
}

export default App
