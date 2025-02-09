import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormRecord,
  NonNullableFormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';
interface UserFormGroup {
  email?: (string | ValidationErrors)[];
  name?: string[];
  address: FormGroup<AddressFormGroup>;
  skills: FormArray<FormControl<string>>;
}
interface AddressFormGroup {
  street: FormControl<string | null>;
  city: FormControl<string | null>;
  state: FormControl<string | null>;
  zip: FormControl<string | null>;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  styles: ``,
  standalone: false,
})
export class AppComponent {
  title = 'Coding Bible library';
  formContol = new FormControl<string | null>(null);
  fb = inject(FormBuilder);

  form2 = new FormRecord<FormControl<string | null>>({
    name: new FormControl(''),
  }); // empty object
  form = this.fb.group({
    email: [2, [Validators.required]],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    skills: new FormArray<FormControl<string>>([]),
  });

  get formKeys() {
    return Object.keys(this.form2.controls);
  }
  ngOnInit() {}
  submit() {
    if (this.form.invalid) return;
    console.log(this.form.value);
  }
  addControl() {
    const controlName = `control${this.formKeys.length + 1}`;
    this.form2.addControl(controlName, new FormControl(''));
  }

  removeControl(controlName: string) {
    this.form2.removeControl(controlName);
  }
}
