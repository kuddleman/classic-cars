// menu click JS
const menu = document.querySelector('.menu')

const handleMenuClick = () => {
  const allTargets = document.querySelectorAll('.target')

  allTargets.forEach( target => {
    target.classList.toggle('change')
  })
}

menu.addEventListener( 'click', handleMenuClick )
// end menu click JS


// wrapper click JS
const allWrappers = document.querySelectorAll('.wrapper')

const handleWrapperClick = () => {
  const targets = document.querySelectorAll('.target')
  targets.forEach( target => {
    target.classList.remove('change')
  } )
}

allWrappers.forEach( wrapper =>{
  wrapper.addEventListener('click', handleWrapperClick)
} )
// end wrapper click JS


// Section 3 play video on mouse hover
