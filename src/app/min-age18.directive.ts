import { Directive, forwardRef, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { CustomValidators } from '../CustomValidation/customvalidtors';

@Directive({
  selector: '[minAge18]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MinAge18Directive),
      multi: true,
    },
  ],
})
export class MinAge18Directive implements Validator {
  constructor() {}
  validate(control: AbstractControl): ValidationErrors | null {
    return CustomValidators.minAge18(control);
  }
}
