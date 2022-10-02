const submit = document.querySelector('button[type="submit"]');
const email = document.querySelector('input');
const form = document.querySelector('form');

const rfc5322 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

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