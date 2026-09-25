import { navigate } from './router.js';

const navigationMenu = document.querySelector('.navigation__menu-list');

const navigationItems = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Projects',
        path: '/projects'
    },
    {
        name: 'Statistics',
        path: '/statistics'
    }
];

export function initNavigation() {
    navigationMenu.innerHTML = navigationItems
        .map(item => `
            <li
                class="navigation__menu-list-item"
                data-path="${item.path}"
            >
                <span>${item.name}</span>
            </li>
        `)
        .join('');

    navigationMenu.addEventListener('click', (event) => {
        const item = event.target.closest('[data-path]');

        if (!item) return;

        navigate(item.dataset.path);
    });
}