export const LoginFormValidationMessages = {
    USER_NAME: [
        { type: 'required', message: 'First Name is required' },
        { type: 'minlength', message: 'First Name must be at least 5 characters long' },
        { type: 'maxlength', message: 'First Name cannot be more than 25 characters long' },
        // { type: 'pattern', message: 'Your First Name must contain only numbers and letters' },
        // { type: 'validUsername', message: 'Your First Name has already been taken' }
    ],
    PASSWORD: [
        { type: 'required', message: 'Password is required' },
        { type: 'minlength', message: 'Password must be at least 5 characters long' },
        { type: 'maxlength', message: 'Password cannot be more than 10 characters long' },
    ]
}