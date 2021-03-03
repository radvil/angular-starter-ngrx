import { ValidatorFn, AbstractControl } from '@angular/forms';

export function pastDateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    let forbidden = true;
    if (control.value) {
      const value = Date.parse(control.value);
      const minDate = Date.now() - 86400000; // minus one day in ms
      if (value < minDate) forbidden = false;
    }
    return forbidden ? { 'pastDate': true } : null;
  }
}