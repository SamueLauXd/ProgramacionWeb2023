import { Route, Routes } from "react-router-dom"
import { Landing, About, Services, Contact, Login, MemberPage } from './Pages'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/member" element={<MemberPage />} />
    </Routes>
  )
}

export default App