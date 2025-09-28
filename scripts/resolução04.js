const form = document.getElementById('validation-form');
const inputs = form.querySelectorAll('input');

const validationRules = {
    'nome' : [
        {
            validate: (value) => value.trim() !== '',
            message: 'O campo nome deve ser obrigatório.'
        }
    ],

    'email' : [
        {
            validate: (value) => value.trim() !== '',
            message: 'O campo de email é obrigatório.'
        },
        {
            validate: (value) => value.includes('@'),
            message: 'O e-mail precisa conter "@".'
        }
    ],

    'senha' : [
        {
            validate: (value) => value.trim() !== '',
            message: 'O campo senha é obrigatório.'
        },
        {
            validate: (value) => value.length >= 6,
            message: 'A senha precisa ter mais de 6 caracteres.'
        }
    ]
}

form.addEventListener('submit' , (event) => {
    event.preventDefault();

    let isFormValid = true;

    inputs.forEach(input => {
        const isInputValid = validateField(input);
        if(!isInputValid){
            isFormValid = false;
        }
    });

    if(isFormValid){ 
        alert("Formulário válido! Pronto pra enviar");
    }
}); 

function validateField(inputElement){
    const rules = validationRules[inputElement.id];
    if (!rules) return true;

    for (const rule of rules){
        const value = inputElement.value;

        if(!rule.validate(value)){
            setError(inputElement , rule.message);
            return false;
        }
    }

    setSuccess(inputElement);
    return true
}

function setError(input, message) {
    const inputGroup = input.parentElement;
    const errorMessage = inputGroup.querySelector('.error-message');

    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
    errorMessage.innerText = message;
}

function setSuccess(input) {
    const inputGroup = input.parentElement;
    inputGroup.classList.remove('error');
    inputGroup.classList.add('success');
}