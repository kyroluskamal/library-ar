import { Directive, forwardRef } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from '../CustomValidation/customvalidtors';

@Directive({
  selector: '[emailAsync]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => EmailAsyncDirective),
      multi: true,
    },
  ],
})
export class EmailAsyncDirective implements AsyncValidator {
  constructor() {}
  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return CustomValidators.AsyncEmailAvaliabilityValidator2(control);
  }
}
