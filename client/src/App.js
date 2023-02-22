import { Route, Routes } from 'react-router-dom'
import ViewCoaster from './pages/ViewCoaster'
import SignIn from './pages/SignIn'
import Add from './components/Add'
import Nav from './components/Nav'
import About from './pages/About'
import { useState } from 'react'
import Home from './pages/Home'
import UpdateCoaster from './components/UpdateCoaster'

function App() {
  const [user, setUser] = useState('')

  return (
    <>
      <header>
        <Nav setUser={setUser} />
      </header>
      <main className="">
        <Routes>
          {!user === '' ? (
            <Route path="/" element={<Home user={user} />} />
          ) : (
            <Route path="/" element={<SignIn setUser={setUser} />} />
          )}
          <Route path="/viewCoaster/:id" element={<ViewCoaster />} />
          <Route path="/about" element={<About />} />
          <Route path="/add" element={<Add />} />
          <Route path="/editCoaster/:id" element={<UpdateCoaster />} />
        </Routes>
      </main>
    </>
  )
}

export default App
