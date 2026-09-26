export function modalComponent(content) {
    return `
        <div class="modal">
            <div class="modal__content">
                <button
                    type="button"
                    class="modal__close"
                >
                    ×
                </button>

                ${content}
            </div>
        </div>
    `;
}

export function initModal() {
    const modal = document.querySelector('.modal');
    const closeBtn = modal?.querySelector('.modal__close');

    if (!modal || !closeBtn) return;

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

export function closeModal() {
    const modalRoot = document.querySelector('#modal-root');

    if (!modalRoot) return;

    modalRoot.innerHTML = '';
}
