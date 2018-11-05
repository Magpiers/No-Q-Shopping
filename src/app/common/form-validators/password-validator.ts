import { FormGroup } from '@angular/forms';

export class PasswordValidator {
    static isSamePassword(fc: FormGroup) {
        debugger;
        if (fc.value.toLowerCase() === "abc123" || fc.value.toLowerCase() === "123abc") {
            return ({ validUsername: true });
        } else {
            return (null);
        }
    }
}