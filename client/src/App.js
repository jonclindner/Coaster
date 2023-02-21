import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import Nav from "./components/Nav"
import { useState } from "react"
import Home from "./pages/Home"

function App() {
  const [user, setUser] = useState("")

  return (
    <>
      <header><Nav /></header>
      <main className="h-96">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          {user === "" ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/" element={<SignIn setUser={setUser} />} />
          )}
        </Routes>
      </main>
      <footer><Footer /></footer>
    </>
  )
}

export default App
