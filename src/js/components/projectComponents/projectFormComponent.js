import { createProject } from "../../services/projectsService.js";

export function projectFormComponent() {
    return `
        <div class="project-form">
            <div class="project-form__field">
                <label for="project-title">Project Title</label>
                <input type="text" id="project-title" name="project-title" required>
            </div>
            <div class="project-form__field">
                <label for="project-description">Project Description</label>
                <textarea id="project-description" name="project-description" required></textarea>
            </div>
            <button type="submit" class="project-form__submit-btn">Add Project</button>
        </div>
    `;
}

export function initProjectForm() {
    const form = document.querySelector('.project-form');

    if (!form) return;

    form.addEventListener('submit', handleProjectForm);
}

async function handleProjectForm(e) {
    e.preventDefault();

    const form = new FormData(e.target);

    const title = form.get('project-title');
    const description = form.get('project-description');

    createProject(title, description);
}
