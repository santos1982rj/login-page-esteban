const $html = document.querySelector('html')
const $checkbox = document.querySelector('#foo')

$checkbox.addEventListener('change', () => {
  $html.classList.toggle('dark-mode')
})
