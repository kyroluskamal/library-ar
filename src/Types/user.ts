import { FormArray, FormControl, FormGroup } from '@angular/forms';

export class User {
  id: number = 63;
  firstName: string = 'John';
  lastName: string = 'Doe';
  email: string = 'Jhon@gmail.com';
  address: any = {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001',
  };
  role: string = 'admin';
}

export type ModelFormGroup<T> = FormGroup<{
  [K in keyof T]: T[K] extends Array<infer U>
    ? U extends object
      ? FormArray<ModelFormGroup<U>> // Supports array of objects (mapped to FormGroup)
      : FormArray<FormControl<U>> // Supports array of primitive types (mapped to FormControl)
    : FormControl<T[K]>; // For non-array properties
}>;

export type ModelFormArray<T> = FormArray<ModelFormGroup<T>>;
