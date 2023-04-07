
const firstForm = document.querySelector('#firstForm')
const secondForm = document.querySelector('#secondForm')
const firstButton = document.querySelector('#firstButton')

firstButton.addEventListener('click', () => {
  const workType = document.querySelector('input[name="workType"]:checked').value;
  const websiteType = document.querySelector('input[name="websiteType"]:checked').value;
  const websiteSize = document.querySelector('input[name="websiteSize"]:checked').value;

  firstForm.classList.add('hidden')
  secondForm.classList.remove('hidden')
  console.log(workType)

})

// Slider Function
function rotate() {
    var firstChild = $('.slider div:first-child').clone();
    var secondChild = $('.slider div:nth-child(2)').clone();
    /*$('#test').html(lastChild)*/
    
    $('.slider div:first-child').remove();
    
    $('.slider').append(firstChild)
    $('.slider div').removeClass('firstSlide')
    $('.slider div:first-child').addClass('firstSlide')

  }

  function rotate1() {
    var lastChild = $('.slider div:last-child').clone();
    /*$('#test').html(lastChild)*/
    $('.slider div').removeClass('firstSlide')
    $('.slider div:last-child').remove();
    $('.slider').prepend(lastChild)
    
  }

  function selectDynamicElement() {
    presentElement = document.querySelector('.present');
    
  }

document.querySelector('#projects').addEventListener('click', () => {
    rotate()

})

 

  