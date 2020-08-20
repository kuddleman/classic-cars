
const menu = document.querySelector('.menu')

const handleMenuClick = () => {
  const allTargets = document.querySelectorAll('.target')

  allTargets.forEach( target => {
    target.classList.toggle('change')
  })
}

menu.addEventListener( 'click', handleMenuClick )