document.querySelector("#mountain1-btn").addEventListener('click', function(){
  console.log('btn1 clicked')
  document.querySelector('.mountain1').classList.add('shown')
  document.querySelector('.mountain1').classList.remove('hidden')

  document.querySelector('.mountain2').classList.remove('shown')
  document.querySelector('.mountain2').classList.add('hidden')

  document.querySelector('#mountain1-btn')
  .parentElement
  .classList.add('active')

  document.querySelector('#mountain2-btn')
  .parentElement
  .classList.remove('active')
})

document.querySelector("#mountain2-btn").addEventListener('click', function(){
  console.log('btn2 clicked')

  document.querySelector('.mountain2').classList.add('shown')
  document.querySelector('.mountain2').classList.remove('hidden')

  document.querySelector('.mountain1').classList.remove('shown')
  document.querySelector('.mountain1').classList.add('hidden')

  document.querySelector('#mountain2-btn')
  .parentElement
  .classList.add('active')

  document.querySelector('#mountain2-btn')
  .parentElement
  .classList.remove('active')
})