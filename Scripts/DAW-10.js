document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('subscription-form');
    const submitButton = document.getElementById('submit-button');
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const closeModal = document.getElementById('close-modal');

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

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
            rule: value => value === document.getElementById('password').value,
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
            sendData(formData);
        } else {
            alert('Por favor, corrige los errores antes de enviar el formulario.');
        }
    });

    function sendData(data) {
        const queryParams = new URLSearchParams(data).toString();
        const url = `https://jsonplaceholder.typicode.com/users${queryParams}`;

        fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(responseData => {
            modalMessage.textContent = `Suscripción exitosa: ${JSON.stringify(responseData, null, 2)}`;
            modal.style.display = 'block';
            localStorage.setItem('subscriptionData', JSON.stringify(data));
        })
        .catch(error => {
            modalMessage.textContent = `Error en la suscripción: ${error.message}`;
            modal.style.display = 'block';
        });
    }

    function loadSavedData() {
        const savedData = localStorage.getItem('subscriptionData');
        if (savedData) {
            const data = JSON.parse(savedData);
            Object.keys(data).forEach(field => {
                const input = document.getElementById(field);
                if (input) {
                    input.value = data[field];
                }
            });
        }
    }

    loadSavedData();
});
