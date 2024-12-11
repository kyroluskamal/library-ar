import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export class CustomValidators {
  static passwordMatch(formgroup: AbstractControl): ValidationErrors | null {
    const fg = formgroup as FormGroup;
    const password = fg.controls.password;
    const confirmPassword = fg.controls.confirmPassword;

    console.log(password, confirmPassword);
    return password?.value === confirmPassword?.value
      ? null
      : { passwordMatch: true };
  }
  static passwordMatch2(): ValidatorFn {
    return (formgroup: AbstractControl): ValidationErrors | null => {
      const fg = formgroup as FormGroup;
      const password = fg.controls.password;
      const confirmPassword = fg.controls.confirmPassword;
      return password?.value === confirmPassword?.value
        ? null
        : { passwordMatch: true };
    };
  }


  static minAge18(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;
      const birthdate = new Date(control.value);
      const today = new Date();
      let age = new Date().getFullYear() - birthdate.getFullYear();

      const monthdiff = today.getMonth() - birthdate.getMonth();
      if (
        monthdiff < 0 ||
        (monthdiff === 0 && today.getDate() < birthdate.getDate())
      ) {
        age--;
      }

      return age >= 18 ? null : { minAge18: true };
    };
  }
  // static minAge18(control: AbstractControl): ValidationErrors | null {
  //   if (!control.value) return null;
  //   const birthdate = new Date(control.value);
  //   const age = new Date().getFullYear() - birthdate.getFullYear();
  //   return age >= 18 ? null : { minAge18: true };
  // }

  static minAge(age: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;
      const birthdate = new Date(control.value);
      const userAge = new Date().getFullYear() - birthdate.getFullYear();
      return userAge >= age ? null : { minAge: true };
    };
  }
}
