function showMore() {
    const breakNewsBoxText = document.querySelector('.breakNewsBoxText');
    const button = document.querySelector('.show-more-button1');
  
    if (breakNewsBoxText.style.maxHeight === '80px') {
      breakNewsBoxText.style.maxHeight = 'none';
      button.textContent = '';
    } else {
      breakNewsBoxText.style.maxHeight = '80px';
      button.textContent = 'Devamını Gör';
    }
  }
  
  // Mouseout olayını dinleyen fonksiyon
  const breakNewsBoxText = document.querySelector('.breakNewsBoxText');
  const button = document.querySelector('.show-more-button1');
  
  breakNewsBoxText.addEventListener('mouseout', function(event) {
    const isOutside = !breakNewsBoxText.contains(event.relatedTarget);
    if (isOutside && breakNewsBoxText.style.maxHeight !== '80px') {
      breakNewsBoxText.style.maxHeight = '80px';
      button.textContent = 'Devamını Gör';
    }
  });
  function showMore1() {
    const breakNewsBoxText2 = document.querySelector('.breakNewsBoxText2');
    const button1 = document.querySelector('.show-more-button2');
  
    if (breakNewsBoxText2.style.maxHeight === '80px') {
      breakNewsBoxText2.style.maxHeight = 'none';
      button1.textContent = '';
    } else {
      breakNewsBoxText2.style.maxHeight = '80px';
      button1.textContent = 'Devamını Gör';
    }
  }
  
  // Mouseout olayını dinleyen fonksiyon
  const breakNewsBoxText2 = document.querySelector('.breakNewsBoxText2');
  const button1 = document.querySelector('.show-more-button2');
  
  breakNewsBoxText2.addEventListener('mouseout', function(event) {
    const isOutside = !breakNewsBoxText2.contains(event.relatedTarget);
    if (isOutside && breakNewsBoxText2.style.maxHeight !== '80px') {
      breakNewsBoxText2.style.maxHeight = '80px';
      button1.textContent = 'Devamını Gör';
    }
  });

  