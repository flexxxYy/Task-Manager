const routes = {};

const workspace = document.querySelector('.workspace');

export function registerRoute(path, page) {
    routes[path] = page;
}

export function navigate(path) {
    history.pushState({}, '', path);
    renderRoute(path);
}

export function renderRoute(path = window.location.pathname) {
    const page = routes[path];

    if (!page) {
        workspace.innerHTML = `
            <div class="error-page">
                <h1>404</h1>
                <p>Page not found</p>
            </div>
        `;

        return;
    }

    workspace.innerHTML = page();
}

window.addEventListener('popstate', () => {
    renderRoute();
});