import { projectCardComponent } from "../components/projectComponents/projectCardComponent.js";
import { getProjects } from "../services/projectsService.js";
import { projectBtnComponent, initProjectBtn } from "../components/projectComponents/projectBtnComponent.js";


export function projectsPage() {
    const projects = getProjects();

    return `
        <div class="projects-page">
            ${
                projects.map((project) => projectCardComponent(project.title, project.description)).join('')
            }
            ${ projectBtnComponent() }
        </div>
    `
}

export function initProjectsPage() {
    initProjectBtn();
}
