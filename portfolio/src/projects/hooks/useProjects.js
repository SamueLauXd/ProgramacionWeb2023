import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

export function useProjects() {
    const projectContext = useContext(ProjectContext)

    if (!projectContext) {
        throw new Error('useProjects hook component use should be within its context Provider <ProjectContextProvider>')
    }

    const { projects } = projectContext

    return { projects }

}