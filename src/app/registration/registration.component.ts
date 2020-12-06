import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  fg: FormGroup;
  signedUp: boolean;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)]],
      firstName: [''],
      lastName: [''],
      password: ['', [Validators.required, Validators.pattern(/(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*(){}":>?<~!"№;%:?*()]).{6,}/)]],
      passwordRep: ['', [Validators.required, Validators.pattern(/(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*(){}":>?<~!"№;%:?*()]).{6,}/)]],
    });
  }

  isControlValid(controlName: string): boolean {
    const control = this.fg.controls[controlName];
    if (!control.touched) {
      return true
    }
    else {
      return !control.invalid;
    }
  };

  isPasswordsTheSame(): boolean {
    return this.fg.controls['password'].value === this.fg.controls['passwordRep'].value;
  };

  isBoughtPasswordsValid(): boolean {
    return this.isControlValid('password') && this.isControlValid('passwordRep');
  };

  isHighlightPwdHelp(): boolean {
    if (this.isBoughtPasswordsValid()){
      if (this.isPasswordsTheSame()) {
        return true;
      }
    }
    return false;
  };

  signUp() {
    if (this.fg.valid) {
      this.signedUp = true
      console.log(this.fg.value)
    }
  }

}
