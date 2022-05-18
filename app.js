const addFormEvents = () => {
    const firstName = document.querySelector('input#first-name');
    const lastName = document.querySelector('input#last-name');
    const email = document.querySelector('input#email');
    const phoneNumber = document.querySelector('input#phone-number');
    const zipPostalCode = document.querySelector('input#zip-postal-code');
    const password = document.querySelector('input#password');
    const confirmPassword = document.querySelector('input#confirm-password');

    firstName.addEventListener('focusout', () => {
        if (!firstName.checkValidity()) {
            firstName.setCustomValidity('Required');
            firstName.classList.add("invalid-input");
            firstName.reportValidity();
        }
    });
    firstName.addEventListener('input', () => {
        firstName.setCustomValidity('');
        firstName.classList.remove("invalid-input");
    });
    lastName.addEventListener('focusout', () => {
        if (!lastName.checkValidity()) {
            lastName.setCustomValidity('Required');
            lastName.classList.add("invalid-input");
            lastName.reportValidity();
        }
    })
    lastName.addEventListener('input', () => {
        lastName.setCustomValidity('');
        lastName.classList.remove("invalid-input");
    });
    email.addEventListener('focusout', () => {
        if (!email.checkValidity()) {
            email.setCustomValidity('Required format: john.smith@example.com');
            email.classList.add("invalid-input");
            email.reportValidity();
        }
    })
    email.addEventListener('input', () => {
        if (!email.validity.typeMismatch) {
            email.setCustomValidity("");
            email.classList.remove("invalid-input");
        }
    });
    phoneNumber.addEventListener('focusout', () => {
        if (!phoneNumber.checkValidity()) {
            phoneNumber.setCustomValidity('Required format: 123-456-7890');
            phoneNumber.classList.add("invalid-input");
            phoneNumber.reportValidity();
        }
    })
    phoneNumber.addEventListener('input', () => {
        if (!phoneNumber.validity.patternMismatch) {
            phoneNumber.setCustomValidity('');
            phoneNumber.classList.remove("invalid-input");
        }
    });
    zipPostalCode.addEventListener('focusout', () => {
        if (!zipPostalCode.checkValidity()) {
            zipPostalCode.setCustomValidity('Required format: 12345 or A2A 2A2');
            zipPostalCode.classList.add("invalid-input");
            zipPostalCode.reportValidity();
        }
    })
    zipPostalCode.addEventListener('input', () => {
        if (!zipPostalCode.validity.patternMismatch) {
            zipPostalCode.setCustomValidity('');
            zipPostalCode.classList.remove("invalid-input");
        }
    });
    password.addEventListener('focusout', () => {
        if (!password.checkValidity()) {
            password.setCustomValidity('Minimum eight characters with at least one number and one letter');
            password.classList.add("invalid-input");
            password.reportValidity();
        }
    })
    password.addEventListener('input', () => {
        if (!password.validity.patternMismatch) {
            password.setCustomValidity('');
            password.classList.remove("invalid-input");
        }
    });
    confirmPassword.addEventListener('focusout', () => {
        if (confirmPassword.value !== password.value) {
            confirmPassword.setCustomValidity('Password does not match');
            confirmPassword.classList.add("invalid-input");
            confirmPassword.reportValidity();
        }
    })
    confirmPassword.addEventListener('input', () => {
        if (confirmPassword.value === password.value) {
            confirmPassword.setCustomValidity('');
            confirmPassword.classList.remove("invalid-input");
        }
    });
};

addFormEvents();