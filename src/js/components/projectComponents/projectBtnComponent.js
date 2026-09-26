import { projectFormComponent, initProjectForm } from "./projectFormComponent.js";
import { modalComponent, initModal } from '../common/modalComponent.js';

export function projectBtnComponent() {
    return `
        <button class="projects-page__add-project-btn">Add Project</button>
    `;
}

export function initProjectBtn() {
    const btn = document.querySelector('.projects-page__add-project-btn');

    if (!btn) return;

    btn.addEventListener('click', handleProjectBtn);
}

function handleProjectBtn(e) {
    e.preventDefault();

    const modalRoot = document.querySelector('#modal-root');

    if (!modalRoot) return;

    modalRoot.innerHTML = modalComponent(
        projectFormComponent()
    );

    initModal();
    initProjectForm();
}
