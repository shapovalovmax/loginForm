/**
 * Function inputErrorTemplate
 * @param {String} msg
 * return
 */
function inputErrorTemplate(msg) {
    return `
        <div class="invalid-feedback">${msg}</div>
    `;
}

/**
 * Function showInputError. Add input error
 * @param {HTMLInputElement} el
 */
export function showInputError(el) {
    const parent = el.parentElement;
    const existingError = parent.querySelector('.invalid-feedback');
    const msg = el.dataset.invalidMessage || 'Invalid input';
    if (existingError) {
        existingError.textContent = msg;
    } else {
        const template = inputErrorTemplate(msg);
        el.classList.add('is-invalid');
        parent.insertAdjacentHTML('beforeend', template);
    }
}

/**
 * Function removeInputError. Remove input error
 * @param {HTMLInputElement} el
 */
export function removeInputError(el) {
    const parent = el.parentElement;
    const err = parent.querySelectorAll('.invalid-feedback');
    if (!err) return;

    el.classList.remove('is-invalid');
    err.forEach(err => {
        parent.removeChild(err);
    });
}