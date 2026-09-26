import { navigate } from '../../router.js';


export function homeNavBtnComponent(title, path) {
    return `
        <div class="home-page__nav-item" data-path="${path}">
            <div class="nav-item__title"> ${title} </div>
        </div>
    `;
}

export function initHomeNavBtn() {
    const buttons = document.querySelectorAll('.home-page__nav-item');

    if (!buttons.length) return;

    buttons.forEach((button) => {
        button.addEventListener('click', handleHomeNavBtn);
    });
}

function handleHomeNavBtn(event) {
    event.preventDefault();

    const item = event.target.closest('[data-path]');

    if (!item) return;

    navigate(item.dataset.path);
}
