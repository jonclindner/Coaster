import UpdateCoaster from './components/UpdateCoaster'
import AddCoaster from './components/AddCoaster'
import { Route, Routes } from 'react-router-dom'
import ViewCoaster from './pages/ViewCoaster'
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
        <Nav />
      </header>
      <main className="">
        <Routes>
          {!user === '' ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/" element={<SignIn setUser={setUser} />} />
          )}
          <Route path="/viewCoaster/:id" element={<ViewCoaster />} />
          <Route path="/about" element={<About />} />
          <Route path="/add" element={<AddCoaster />} />
          <Route path="/editCoaster/:id" element={<UpdateCoaster />} />
        </Routes>
      </main>
    </>
  )
}

export default App
