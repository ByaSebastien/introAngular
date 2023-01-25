import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component {

  monFormulaire: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.monFormulaire = this._fb.group({
      lastname: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      firstname: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      birthdate: [null, [Validators.required, this.majeurValidator()]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]],
      phone: [null, []],
      siblings: [null, [Validators.required, Validators.min(0)]],
      country: ['', Validators.required],
      single: [null, []]
    })
  }

  submitForm(): void {
    if (this.monFormulaire.valid) {
      console.log("Formulaire valide : Envoyé");
      console.log(this.monFormulaire.value);
    } else {
      console.log("Formulaire invalide : Pas envoyé");
      this.monFormulaire.markAllAsTouched();
    }
  }

  majeurValidator(): ValidatorFn | null {
    return (control: AbstractControl) => {
      if (control.value !== '' && control.value !== null) {
        let todayYear = new Date().getFullYear();
        let inputYear = new Date(control.value).getFullYear();

        if (todayYear - inputYear < 18) {
          return { mineur: true }
        }
      }
      return null;
    }
  }
}
