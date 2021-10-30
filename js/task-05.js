const refs = {
    inputRef: document.querySelector('#name-input'),
    nameRef: document.querySelector('#name-output'),
  };
  
  const onInputName = event => {
    refs.nameRef.textContent = event.currentTarget.value.trim();
    if (!event.currentTarget.value) {
      refs.nameRef.textContent = 'Anonymous';
    }
  };
  
  refs.inputRef.addEventListener('input', onInputName);
  