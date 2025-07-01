const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
form.addEventListener('input', onInput);

function onInput(event) {
  const fieldName = event.target.name;
  const fieldValue = event.target.value.trim();
  formData[fieldName] = fieldValue;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
const savedData = localStorage.getItem('feedback-form-state');
if (savedData !== null) {
  try {
    const parselData = JSON.parse(savedData);
    formData.email = parselData.email || '';
    formData.message = parselData.message || '';
    form.elements.email.value = parselData.email || '';
    form.elements.message.value = parselData.message || '';
  } catch (error) {
    console.error('Parsing error: ', error);
    localStorage.removeItem('feedback-form-state');
  }
}

form.addEventListener('submit', formHandel);
function formHandel(event) {
  event.preventDefault();

  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
    formData.email = '';
    formData.message = '';
  }
}
