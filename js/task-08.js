const refs = { form: document.querySelector('.login-form') };

const onSubmitForm = event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  const inputData = {
    [email.name]: email.value,
    [password.name]: password.value,
  };

  if (email.value === '' || password.value === '') {
    event.currentTarget.reset();
    return alert('All fields must be completed!');
  }

  console.log('Input Data: ', inputData);

  event.currentTarget.reset();
};

refs.form.addEventListener('submit', onSubmitForm);
