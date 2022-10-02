const submit = document.querySelector('button[type="submit"]');
const email = document.querySelector('input');
const form = document.querySelector('form');

const rfc5322 = /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/gm

submit.addEventListener('click', (e) => {
  e.preventDefault();
  if (form.lastElementChild !== submit) {
      form.lastElementChild.remove();
  }

  if (email.value === '') {
    email.classList.add('error');
    form.insertAdjacentHTML('beforeend', `<span>Oops! Please add your email</span>`)
  } else if (!rfc5322.test(email.value)) {
    email.classList.add('error');
    form.insertAdjacentHTML('beforeend', `<span>Oops! Please check your email</span>`)
  } else {
    email.classList.remove('error');
    email.value = '';
    form.insertAdjacentHTML('beforeend', `<p>Your request has been sent!</p>`)
  }
});