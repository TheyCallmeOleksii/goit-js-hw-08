import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(changeFields, 500));
formEl.addEventListener('submit', sendBtn);

const STORAGE_KEY = 'feedback-form-state';

checkLocalSt();

let obj = {};

function changeFields(event) {
  obj[event.target.name] = event.target.value.trim();
  // obj.email = formEl.elements.email.value;
  // obj.message = formEl.elements.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
}

function sendBtn(event) {
  event.preventDefault();
  // const saveField = localStorage.getItem('feedback-form-state');
  console.log(obj);
  obj = {};
  localStorage.removeItem(STORAGE_KEY);
  event.target.reset();

  // if (saveField) {
  //   const parceSaveField = JSON.parse(saveField);
  //   console.log(parceSaveField);
  //   localStorage.removeItem('feedback-form-state');
  //   formEl.elements.email.value = '';
  //   formEl.elements.message.value = '';
  // }
}

// function checkLocalSt() {
//   const saveField = localStorage.getItem('feedback-form-state');

//   if (saveField) {
//     const parceSaveField = JSON.parse(saveField);
//     formEl.elements.email.value = parceSaveField.email;
//     formEl.elements.message.value = parceSaveField.message;
//   }
// }

function checklocalSt() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return;
    obj = JSON.parse(data);
    Object.entries(obj).forEach(([key, val]) => {
      formEl.elements[key].value = val;
    });
  } catch (error) {
    console.log(error.message);
  }
}
