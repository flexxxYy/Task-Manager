const routes = {};

const workspace = document.querySelector('.workspace');

export function registerRoute(path, render, init = null) {
    routes[path] = {
        render,
        init
    };
}

export function navigate(path) {
    history.pushState({}, '', path);
    document.title = `${path.slice(1).charAt(0).toUpperCase() + path.slice(2)} | Task Manager`;
    renderRoute(path);
}

export function renderRoute(path = window.location.pathname) {
    const route = routes[path];

    if (!route) {
        workspace.innerHTML = '<h1>404</h1>';
        return;
    }

    workspace.innerHTML = route.render();

    route.init?.();
}

window.addEventListener('popstate', () => {
    renderRoute();
});