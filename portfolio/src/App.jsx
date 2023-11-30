import { Route, Routes } from "react-router-dom"
import { Landing, About, Services, Contact, MemberPage, ProjectDetailPage } from './pages'
import { LoginPage } from "./auth/pages/LoginPage"
import { DashboardPage } from "./user/pages/DashboardPage"
import { PrivateRoute } from "./user/routes/PrivateRoute"
import { Projects } from "./Pages/Projects"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/member/:name" element={<MemberPage />} />
      <Route path="/detail" element={<ProjectDetailPage />} />
      <Route path="/dashboard" element={
        <PrivateRoute>
          <DashboardPage />
        </PrivateRoute>
      } />
    </Routes>
  )
}

export default App