import { Route, Routes } from "react-router-dom";
import { Landing } from '../pages/Landing'
import { About } from "../pages/About";
import { Services } from "../pages/Services";
import { Projects } from "../projects/Projects";
import { Contact } from "../pages/Contact";
import { LoginPage } from '../auth/pages/LoginPage'
import { MemberPage } from '../pages/MemberPage'
import { ProjectDetailPage } from '../pages/ProjectDetailPage'
import { PrivateRoute } from '../user/routes/PrivateRoute'
import { DashboardPage } from '../user/pages/DashboardPage'
import { AddProjectPage } from '../user/pages/AddProjectPage'

export function AppRouter() {
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
                path="/projects"
                element={<Projects />} />
            <Route
                path="/contact"
                element={<Contact />} />
            <Route
                path="/login"
                element={<LoginPage />} />
            <Route
                path="/member:id"
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