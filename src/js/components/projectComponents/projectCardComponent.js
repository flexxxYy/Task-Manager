export function projectCardComponent(title, description) {
    return `
        <div class="project-item">
            <div class="project-item__title">${title}</div>
            <div class="project-item__description">${description}</div>
        </div>
    `
}
