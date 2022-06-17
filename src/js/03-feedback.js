var throttle = require('lodash.throttle');



const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const email = document.querySelector('.feedback-form [autofocus]');


const KEY_STORAGE = "feedback-form-state";
const formData = {
    message: textarea.value,
    email: email.value,
};

const formMove = (e) => {
    e.preventDefault();
    
    if (formData.email === "" || formData.message === "") {// проверка на заполнение форми // в тз не было написано, что бы все поля были заполнены
        return alert("Заполните все поля");
    }
    else {
        console.log('отправляем форму'); console.log(JSON.parse(localStorage.getItem(KEY_STORAGE)));
    }
    e.currentTarget.reset(); localStorage.removeItem(KEY_STORAGE);
};
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
