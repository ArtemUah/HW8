const throttle = require("lodash.throttle");

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onInput, 500));
let data = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {};
form.email.value = data.email ?? '';
form.message.value = data.message ?? '';
function onInput (e){
let data = {
    email: form.email.value,
    message: form.message.value,
};
localStorage.setItem('feedback-form-state', JSON.stringify(data))
};

form.addEventListener('submit', onSubmit);
function onSubmit (e) {
    e.preventDefault();
    console.log(localStorage.getItem('feedback-form-state') ?? {});
    form.reset();
    onInput();
}
