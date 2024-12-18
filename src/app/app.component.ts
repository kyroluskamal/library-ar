import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

//clearValidators
//removeValidators
//removeAsyncValidators

//setValidators
//addValidators
//setAsyncValidators
//addAsyncValidators
//updateValueAndValidity
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  styles: ``,
  standalone: false,
})
export class AppComponent {
  title = 'Coding Bible library';
  valdiatoMinleng = Validators.minLength(5);
  fb = inject(FormBuilder);
  form = this.fb.group({
    address: ['', [Validators.required]],
    skills: ['dd', [Validators.required, this.valdiatoMinleng]],
    addAddressAndSkills: [true],
  });
  ngOnInit() {
    this.form.controls.addAddressAndSkills.valueChanges.subscribe((checked) => {
      if (!checked) {
        this.form.controls.address.clearValidators();
        this.form.controls.skills.removeValidators(this.valdiatoMinleng);
      } else {
        this.form.controls.address.setValidators([Validators.required]);
        this.form.controls.skills.addValidators([this.valdiatoMinleng]);
      }
      this.form.updateValueAndValidity();
    });
  }
  submit() {
    if (this.form.invalid) return;
    console.log(this.form.value);
  }
}
