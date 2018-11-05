export const SignUpFormValidationMessages = {
    FIRST_NAME: [
        { type: 'required', message: 'First Name is required' },
        { type: 'minlength', message: 'First Name must be at least 5 characters long' },
        { type: 'maxlength', message: 'First Name cannot be more than 25 characters long' },
        // { type: 'pattern', message: 'Your First Name must contain only numbers and letters' },
        // { type: 'validUsername', message: 'Your First Name has already been taken' }
    ],
    LAST_NAME: [
        { type: 'required', message: 'Last Name is required' },
        { type: 'minlength', message: 'Last Name must be at least 5 characters long' },
        { type: 'maxlength', message: 'Last Name cannot be more than 10 characters long' },
        // { type: 'pattern', message: 'Your Last Name must contain only numbers and letters' },
        // { type: 'validUsername', message: 'Your Last Name has already been taken' }
    ],
    EMAIL: [
        { type: 'required', message: 'Email is required' },
        { type: 'pattern', message: 'Enter a valid email' }
    ],
    PASSWORD: [
        { type: 'required', message: 'Password is required' },
        { type: 'minlength', message: 'Password must be at least 5 characters long' },
        { type: 'maxlength', message: 'Password cannot be more than 10 characters long' },
    ],
    CONFIRMATION_PSWD: [
        { type: 'required', message: 'Confirmation password is required' },
        { type: 'validatePassword', message: 'Passowrd does not match' }

    ],
}