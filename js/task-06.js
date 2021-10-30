const refs = {
    inputRef: document.querySelector('#validation-input'),
  };
  
  function addClass(element) {
    if (element.value.length === Number(element.dataset.length)) {
      if (element.classList.contains('invalid')) {
        element.classList.replace('invalid', 'valid');
      } else {
        element.classList.add('valid');
      }
    }
  
    if (element.value.length !== Number(element.dataset.length)) {
      if (element.classList.contains('valid')) {
        element.classList.replace('valid', 'invalid');
      } else {
        element.classList.add('invalid');
      }
    }
  }
  
  function removeClass(element) {
    if (element.classList.contains('invalid')) {
      element.classList.remove('invalid');
    }
  
    if (element.classList.contains('valid')) {
      element.classList.remove('valid');
    }
  }
  
  const onInputValidAmountOfSymbols = event => {
    const validationInput = event.currentTarget;
  
    if (validationInput.value) {
      addClass(validationInput);
    }
  
    if (!validationInput.value) {
      removeClass(validationInput);
    }
  };
  
  refs.inputRef.addEventListener('blur', onInputValidAmountOfSymbols);
  