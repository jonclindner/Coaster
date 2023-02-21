import { Route, Routes } from "react-router-dom"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import { useState } from "react"
import Home from "./pages/Home"

function App() {
  const [user, setUser] = useState("")

  return (
    <>
      <header>
        {/* <Nav /> */}
      </header>
      <main className="h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          {user === null ? (
            <Route path="/profile" element={<Profile />} />
          ) : (
            <Route path="/profile" element={<SignIn setUser={setUser} />} />
          )}
        </Routes>
      </main>
      <footer>
        {/* <Footer /> */}
      </footer>
    </>
  )
}

export default App
