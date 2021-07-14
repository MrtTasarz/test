const menuBtn = document.querySelector('#menu');
const closeMenu = document.querySelector('#closeMenu')
const sideNav = document.querySelector('#nav');
const openFaq = document.querySelectorAll('.openFaq')


const toggleNav = () => {
  sideNav.classList.toggle('active');
}
const toggleAnswer = (e) => {
  const answer = e.target.parentElement.nextElementSibling
  answer.classList.toggle('question-answer--open')
  if (answer.style.maxHeight) {
    e.target.style.transform = 'rotate(0)'
    answer.style.maxHeight = null;
  } else {
    e.target.style.transform = 'rotate(45deg)'
    answer.style.maxHeight = answer.scrollHeight + "px";
  }
}
openFaq.forEach(btn => btn.addEventListener('click', (e) => toggleAnswer(e)))


menuBtn.addEventListener('click', toggleNav)
closeMenu.addEventListener('click', toggleNav)