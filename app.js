const dropdownBtns = document.querySelectorAll('.dropdown__btn');
const lists = document.querySelectorAll('.list__wrapper')

dropdownBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const parent = btn.parentNode.parentNode.querySelector('ul');
    const btnI = btn.querySelector('i');

    btnI.setAttribute('class', '');
    if (!parent.classList.contains('hide')) {
      parent.classList.add('hide');
      btnI.classList.add('fa-solid', 'fa-chevron-up');
    } else {
      parent.classList.remove('hide');
      btnI.classList.add('fa-solid', 'fa-chevron-down')
    }
  });
});