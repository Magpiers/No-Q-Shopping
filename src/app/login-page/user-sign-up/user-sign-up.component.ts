import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { SignUpFormValidationMessages } from '../../common/signUp-form-validation-messages';
import { PasswordValidator } from '../../common/form-validators/password-validator';
import { INVALID } from '@angular/forms/src/model';

@Component({
  selector: 'app-user-sign-up',
  styleUrls: ['./user-sign-up.component.css'],
  templateUrl: './user-sign-up.component.html'
})
export class UserSignUpComponent implements OnInit {

  private validationConstraints = SignUpFormValidationMessages;

  selectedForm: string;
  signUpForm: FormGroup;
  errorModal: BsModalRef;

  constructor(
    private fb: FormBuilder,
    private bsModalService: BsModalService) {

    // initializing form variables
    this.signUpForm = this.fb.group({
      confirmationPassword: ['', Validators.compose([
        Validators.required,
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      firstName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
      ])],
      lastName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
      ])],
    }, (formGroup: FormGroup) => {
      return PasswordValidator.isSamePassword(this.signUpForm);
    });
  }

  ngOnInit(): void {
    this.selectedForm = 'SIGN_UP';
  }

  onClickSignUpSubmit(errorModal: TemplateRef<any>): void {
    if (this.signUpForm.status === 'INVALID') {
      this.errorModal = this.bsModalService.show(errorModal);
    }
  }

  openErrorModal(errorModal: TemplateRef<any>): void {
    this.errorModal = this.bsModalService.show(errorModal);
  }

  clearFormValues(): void {
    // this.signsUpForm.get()
  }
}
