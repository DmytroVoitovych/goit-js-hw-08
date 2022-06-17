var throttle = require('lodash.throttle');



const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const email = document.querySelector('.feedback-form [autofocus]');


const KEY_STORAGE = "feedback-form-state";
const formData = {
    message: textarea.value,
    email: email.value,
};

const formMove = (e) => { e.preventDefault(); console.log('отправляем форму'); e.currentTarget.reset(); localStorage.removeItem(KEY_STORAGE); console.log(formData) };
form.addEventListener('submit', formMove);

form.addEventListener('input', throttle((e) => {
    
    
     formData[e.target.name] = e.target.value; 
    // if(formData)
    localStorage.setItem(KEY_STORAGE, JSON.stringify(formData));
    
}, 500));

 const saveTextArea = () => {
    const saveMessage = JSON.parse(localStorage.getItem(KEY_STORAGE));
    
    if (saveMessage)
    {
        textarea.value = saveMessage.message;
        email.value = saveMessage.email;
       
    } 
    
};
saveTextArea();
//hhh
