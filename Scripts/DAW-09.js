document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('subscription-form');

    const fullName = document.getElementById('full-name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const age = document.getElementById('age');
    const phone = document.getElementById('phone');
    const address = document.getElementById('address');
    const city = document.getElementById('city');
    const postalCode = document.getElementById('postal-code');
    const dni = document.getElementById('dni');
    const submitButton = document.getElementById('submit-button');
    const formTitle = document.getElementById('form-title');

    const validationRules = {
        'full-name': {
            rule: value => value.length > 6 && value.includes(' '),
            message: 'El nombre completo debe tener más de 6 letras y al menos un espacio.'
        },
        email: {
            rule: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            message: 'El email debe tener un formato válido.'
        },
        password: {
            rule: value => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value),
            message: 'La contraseña debe tener al menos 8 caracteres, formados por letras y números.'
        },
        'confirm-password': {
            rule: value => value === password.value,
            message: 'Las contraseñas no coinciden.'
        },
        age: {
            rule: value => Number.isInteger(Number(value)) && Number(value) >= 18,
            message: 'La edad debe ser un número entero mayor o igual a 18.'
        },
        phone: {
            rule: value => /^\d{7,}$/.test(value),
            message: 'El teléfono debe tener al menos 7 dígitos sin espacios, guiones ni paréntesis.'
        },
        address: {
            rule: value => value.length >= 5 && value.includes(' '),
            message: 'La dirección debe tener al menos 5 caracteres con letras, números y un espacio.'
        },
        city: {
            rule: value => value.length >= 3,
            message: 'La ciudad debe tener al menos 3 caracteres.'
        },
        'postal-code': {
            rule: value => value.length >= 3,
            message: 'El código postal debe tener al menos 3 caracteres.'
        },
        dni: {
            rule: value => /^\d{7,8}$/.test(value),
            message: 'El DNI debe ser un número de 7 u 8 dígitos.'
        }
    };

    Object.keys(validationRules).forEach(field => {
        const input = document.getElementById(field);
        input.addEventListener('blur', () => validateField(input, field));
        input.addEventListener('focus', () => clearErrorMessage(field));
    });

    function validateField(input, field) {
        const { rule, message } = validationRules[field];
        if (!rule(input.value)) {
            showErrorMessage(field, message);
        } else {
            clearErrorMessage(field);
        }
    }

    function showErrorMessage(field, message) {
        const errorMessage = document.getElementById(`error-${field}`);
        errorMessage.textContent = message;
    }

    function clearErrorMessage(field) {
        const errorMessage = document.getElementById(`error-${field}`);
        errorMessage.textContent = '';
    }

    submitButton.addEventListener('click', () => {
        let isValid = true;
        const formData = {};
        Object.keys(validationRules).forEach(field => {
            const input = document.getElementById(field);
            validateField(input, field);
            if (!validationRules[field].rule(input.value)) {
                isValid = false;
            } else {
                formData[field] = input.value;
            }
        });

        if (isValid) {
            alert(`Formulario enviado con éxito:\n${JSON.stringify(formData, null, 2)}`);
        } else {
            alert('Por favor, corrige los errores antes de enviar el formulario.');
        }
    });

    fullName.addEventListener('keydown', updateFormTitle);
    fullName.addEventListener('focus', updateFormTitle);

    function updateFormTitle() {
        formTitle.textContent = `HOLA ${fullName.value.toUpperCase()}`;
    }
});
