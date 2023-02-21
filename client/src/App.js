import { Route, Routes } from 'react-router-dom'
import ViewCoaster from './pages/ViewCoaster'
import Footer from './components/Footer'
import SignIn from './pages/SignIn'
import Nav from './components/Nav'
import About from './pages/About'
import { useState } from 'react'
import Home from './pages/Home'

function App() {
  const [user, setUser] = useState('')

  return (
    <>
      <header>
        <Nav setUser={setUser} />
      </header>
      <main className="h-96">
        <Routes>
          {!user === '' ? (
            <Route path="/" element={<Home user={user} />} />
          ) : (
            <Route path="/" element={<SignIn setUser={setUser} />} />
          )}
          <Route path="/viewCoaster/:id" element={<ViewCoaster />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  )
}

export default App
