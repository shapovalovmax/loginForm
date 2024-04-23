import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import UI from "./config/ui.config";
import { validate } from './helpers/validate';
import { showInputError, removeInputError } from './views/form';
import { login } from "./services/auth.service";
import { notify } from "./views/notifications";

const {form, inputEmail, inputPassword, inputUsername } = UI;
const inputs = [inputEmail, inputPassword, inputUsername];

// Events
form.addEventListener('submit', e => {
    e.preventDefault();
    onSubmit();
});
inputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)));

// Handlers

async function onSubmit() {
    const isValidForm = inputs.every((el) => {
        const isValidInput = validate(el);
        if(!isValidInput){
            showInputError(el);
        }
        return isValidInput;
    });

    if (!isValidForm) return;

    try {
        await login(inputUsername.value, inputPassword.value);
        form.reset();
        // show success notify
        notify({msg: 'Login success', className: 'alert-success'});
    } catch (e) {
        // show error notify
        notify({msg: 'Login faild', className: 'alert-danger'});
    }
}