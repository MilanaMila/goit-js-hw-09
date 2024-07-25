const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const locStr = localStorage.getItem('feedback-form-state');

const emailInput = form.elements.email;
const messageInput = form.elements.message;

if (locStr) {
  const parseVal = JSON.parse(locStr);
  formData.email = parseVal.email || '';
  formData.message = parseVal.message || '';
  emailInput.value = formData.email;
  messageInput.value = formData.message;
}

form.addEventListener('input', handlerValue);
form.addEventListener('submit', handlerSubmit);

function handlerValue(evt) {
  formData[evt.target.name] = evt.target.value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function handlerSubmit(evt) {
  evt.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  evt.currentTarget.reset();
}
