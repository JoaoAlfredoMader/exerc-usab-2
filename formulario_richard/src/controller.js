const form = document.getElementById('myForm');
const clearBtn = document.getElementById('clearBtn');
const submitBtn = document.getElementById('submitBtn');
const errorMessages = document.getElementById('errorMessages');
const jsonData = document.getElementById('jsonData');

clearBtn.addEventListener('click', () => {
    form.reset();
    errorMessages.innerHTML = '';
    jsonData.innerHTML = '';
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    errorMessages.innerHTML = '';

    const name = document.getElementById('name').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const age = document.getElementById('age').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const birthdate = document.getElementById('birthdate').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    const errors = [];

    if (name === '') {
        errors.push('Nome é obrigatório');
    }

    if (cpf === '') {
        errors.push('CPF é obrigatório');
    }

    if (age === '') {
        errors.push('Idade é obrigatória');
    }

    if (phone === '') {
        errors.push('Telefone é obrigatório');
    }

    if (birthdate === '') {
        errors.push('Data de Nascimento é obrigatória');
    }

    if (email === '') {
        errors.push('E-mail é obrigatório');
    }

    if (password === '') {
        errors.push('Senha é obrigatória');
    }

    if (confirmPassword === '') {
        errors.push('Confirme a Senha é obrigatório');
    }

    if (password !== confirmPassword) {
        errors.push('As senhas não coincidem');
    }

    if (errors.length > 0) {
        errors.forEach(error => {
            const errorDiv = document.createElement('div');
            errorDiv.innerText = error;
            errorMessages.appendChild(errorDiv);
        });
    } else {
        const formData = {
            nome: name,
            cpf: cpf,
            idade: age,
            telefone: phone,
            data_de_nascimento: birthdate,
            email: email,
            senha: password
        };
        jsonData.value = JSON.stringify(formData, null, 2);
    }
});