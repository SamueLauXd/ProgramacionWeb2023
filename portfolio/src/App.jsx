import { Route, Routes } from "react-router-dom"
import { Landing, About, Services, Contact, MemberPage, ProjectDetailPage } from './pages'
import { LoginPage } from "./auth/pages/LoginPage"
import { DashboardPage } from "./user/pages/DashboardPage"
import { PrivateRoute } from "./user/routes/PrivateRoute"
import { AddProjectPage } from "./user/pages/AddProjectPage"

function App() {

  return (
    <Routes>
      <Route
        path="/"
        element={<Landing />} />
      <Route
        path="/about"
        element={<About />} />
      <Route
        path="/services"
        element={<Services />} />
      <Route
        path="/contact"
        element={<Contact />} />
      <Route
        path="/login"
        element={<LoginPage />} />
      <Route
        path="/member"
        element={<MemberPage />} />
      <Route
        path="/detail"
        element={<ProjectDetailPage />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        } />
        <Route
        path="/dashboard/add"
        element={
          <PrivateRoute>
            <AddProjectPage />
          </PrivateRoute>
        } />
    </Routes>
  )
}

export default App