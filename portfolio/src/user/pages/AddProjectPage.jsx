import { useNavigate } from "react-router-dom";
import { AddForm } from "../components/AddForm";
import { HeaderDashboard } from "../components/HeaderDashboard";


export function AddProjectPage() {
    const navigate = useNavigate()
    const previousPage = () => navigate(-1)
    return (
        <>
            <HeaderDashboard />
            <main className="px-20 py-10">
                <p className="font-lato text-white text-lg p-4 cursor-pointer" onClick={previousPage}>Go back</p>
               <AddForm/>
            </main>
        </>
    )
}