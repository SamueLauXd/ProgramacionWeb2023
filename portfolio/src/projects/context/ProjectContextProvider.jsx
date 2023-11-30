import { collection, onSnapshot, query } from "firebase/firestore";
import { ProjectContext } from "./ProjectContext";
import { db } from "../../services/firebaseConfig";
import { useEffect, useState } from "react";

export function ProjectContextProvider({ children }) {
    const [projects, setProjects] = useState([])

    const getProjects = async () => {
        const q = query(collection(db, "projects"));
        const updatedProjects = []
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                updatedProjects.push(doc.data());
            });
            setProjects(updatedProjects)
        });
    }

    useEffect(() => {
        getProjects()
    }, [])

    return(
        <ProjectContext.Provider value={{
            projects
        }}>
            {children}
        </ProjectContext.Provider>
    )
}