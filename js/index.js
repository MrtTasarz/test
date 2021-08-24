const menuBtn = document.querySelector('#menu');
const closeMenu = document.querySelector('#closeMenu');
const sideNav = document.querySelector('#nav');
const openFaq = document.querySelectorAll('.openFaq');
const submitBtn = document.querySelector('#submitBtn');
const contactSection = document.querySelector('#contact');
const contactForm = document.querySelector('#contact-form');

const toggleNav = () => {
  sideNav.classList.toggle('active');
}
const toggleAnswer = (e) => {
  const answer = e.target.parentElement.nextElementSibling
  answer.classList.toggle('question-answer--open')
  if (answer.style.maxHeight) {
    e.target.classList.remove('rotate')
    answer.style.maxHeight = null;
  } else {
    e.target.classList.add('rotate')
    answer.style.maxHeight = answer.scrollHeight + "px";
  }
}

const setAction = (form) => {
  form.action = "/index.html"
  showSuccessMessage()
  return false;
}

const showSuccessMessage = () => {
  const message = document.createElement('div')
  message.classList.add('success-message')
  message.innerHTML = `<h3>Wiadomość wysłana!<h3>`
  contact.insertBefore(message, contactForm)
  setTimeout(() => {
    contact.removeChild(message)
  }, 2000)
}


openFaq.forEach(btn => btn.addEventListener('click', (e) => toggleAnswer(e)))
menuBtn.addEventListener('click', toggleNav)
closeMenu.addEventListener('click', toggleNav)
submitBtn.addEventListener('click', showSuccessMessage)