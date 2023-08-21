import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(changeFields, 500));
formEl.addEventListener('submit', sendBtn);

checkLocalSt();

const obj = {
  email: '',
  message: '',
};

function changeFields(event) {
  obj.email = formEl.elements.email.value;
  obj.message = formEl.elements.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
}

function sendBtn(event) {
  event.preventDefault();
  const saveField = localStorage.getItem('feedback-form-state');

  if (saveField) {
    const parceSaveField = JSON.parse(saveField);
    console.log(parceSaveField);
    localStorage.removeItem('feedback-form-state');
    formEl.elements.email.value = '';
    formEl.elements.message.value = '';
  }
}

function checkLocalSt() {
  const saveField = localStorage.getItem('feedback-form-state');

  if (saveField) {
    const parceSaveField = JSON.parse(saveField);
    formEl.elements.email.value = parceSaveField.email;
    formEl.elements.message.value = parceSaveField.message;
  }
}
