import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavbarFlight from './components/NavbarFlight'
import Home from './components/Home'
// import AddFlight from './components/AddFlight'
import ViewFlights from './components/ViewFlights'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

    

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/add-flight" element={<AddFlight />} /> */}
          <Route path="/view" element={<ViewFlights />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App