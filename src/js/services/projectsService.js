import userData from "../../data/user_data.json" with { type: "json" };

export function getProjects() {
    return userData.projects;
}

export function createProject(title, description) {
    const project = {
        title,
        description,
        tasks: []
    };

    userData.projects.push(project);

    return project;
}