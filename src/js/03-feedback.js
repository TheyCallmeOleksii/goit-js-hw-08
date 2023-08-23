import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(changeFields, 500));
formEl.addEventListener('submit', sendBtn);

const STORAGE_KEY = 'feedback-form-state';

checkLocalSt();

let obj = {};

function changeFields(event) {
  obj[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
}

function sendBtn(event) {
  event.preventDefault();
  console.log(obj);
  obj = {};
  localStorage.removeItem(STORAGE_KEY);
  event.target.reset();
}

function checkLocalSt() {
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
