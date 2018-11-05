import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { LoginFormValidationMessages } from '../../common/login -form-validation-messages';

@Component({
  selector: 'app-user-sign-in',
  styleUrls: ['./user-sign-in.component.css'],
  templateUrl: './user-sign-in.component.html'
})
export class UserSignInComponent implements OnInit {

  readonly validationMessages = LoginFormValidationMessages;
  @Output() openErrorModal: any = new EventEmitter();
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      password: ['', Validators.compose([
        Validators.required,
      ])],
      userNameOrEmail: ['', Validators.compose([
        Validators.required,
      ])],
    });
  }
  ngOnInit(): void { }

  onClickLoginSubmit(): void {
    if (this.loginForm.status === 'INVALID') {
      this.openErrorModal.emit(true);
    }
  }
}
