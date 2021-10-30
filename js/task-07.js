const refs = {
    sizeControlRef: document.querySelector('#font-size-control'),
    textRef: document.querySelector('#text'),
  };
  
  const onInputFontResize = event => {
    refs.textRef.style.fontSize = `${event.currentTarget.value}px`;
  };
  
  refs.sizeControlRef.addEventListener('input', onInputFontResize);
  