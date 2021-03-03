import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { Observable } from 'rxjs';
import { CompanyService } from '../services/company.service';
import { pastDateValidator } from 'src/app/_shared/utils';

@Component({
  selector: 'app-company-new',
  templateUrl: './company-new.component.html',
  styleUrls: ['./company-new.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class CompanyNewComponent implements OnInit {
  public form!: FormGroup;
  public designations$!: Observable<{ key: number, label: string }[]>;
  public skills$!: Observable<string[]>;

  constructor(
    private _formBuilder: FormBuilder,
    private _companyService: CompanyService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.designations$ = this._companyService.getDesignations();
    this.skills$ = this._companyService.getSkills();
    this.form = this._formBuilder.group({
      companyName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.maxLength(100), Validators.email]],
      address: [''],
      phoneNumber: ['', [Validators.required, Validators.maxLength(15)]],
      empInfo: this._formBuilder.array([])
    });
    this.addEmployeeFormGroup();
  }

  get empInfo(): FormArray {
    return this.form.get('empInfo') as FormArray;
  }

  submitForm(): void {
    console.log(this.form.value);
    this._companyService.addCompany(this.form.value);
  }

  cancelSubmit(): void {
    this._router.navigate(['company-list']);
  }

  addEmployeeFormGroup(): void {
    this.empInfo.push(
      this._formBuilder.group({
        empName: ['', [Validators.required, Validators.maxLength(25)]],
        designation: [''],
        joinDate: ['', [Validators.required, pastDateValidator()]],
        email: ['', [Validators.required, Validators.maxLength(100), Validators.email]],
        phoneNumber: ['', [Validators.required, Validators.maxLength(15)]],
        skillInfo: this._formBuilder.array([]),
        educationInfo: this._formBuilder.array([])
      })
    );
    this.form.updateValueAndValidity();
  }

  removeEmployeeFormGroup(empIndex: number): void {
    this.empInfo.removeAt(empIndex);
    this.form.updateValueAndValidity();
  }

  getEmployeeControl(empIndex: number, fieldName: string): AbstractControl {
    return (this.empInfo.controls[empIndex] as FormGroup).controls[fieldName];
  }

  getEmployeeControlError(empIndex: number, fieldName: string): string {
    const control = this.getEmployeeControl(empIndex, fieldName);

    if (fieldName === 'empName') {
      if (control.hasError('required')) return "Employee\'s name is required";
      else if (control.hasError('maxlength')) return "Maximum 25 characters";
    }
    if (fieldName === 'joinDate') {
      if (control.hasError('required')) return "Employee\'s join date is required";
      else if (control.hasError('pastDate')) return "Only past date allowed";
    }
    else if (fieldName === 'email') {
      if (control.hasError('required')) return "Employee\'s email is required";
      else if (control.hasError('email')) return "Invalid email format";
      else if (control.hasError('maxlength')) return "Maximum 100 characters";
    }
    else if (fieldName === 'phoneNumber') {
      if (control.hasError('required')) return "Employee\'s phone number is required";
      else if (control.hasError('maxlength')) return "Maximum 15 characters";
    }

    return "Please recheck employee validation";
  }

  // #region skillInfo
  getSkillInfo(empIndex: number): FormArray {
    return (<FormArray>(<FormArray>this.empInfo.controls[empIndex]).get('skillInfo'))
  }

  getSkillInfoControl(empIdx: number, skillIdx: number, fieldName: string): AbstractControl {
    return (<FormGroup>this.getSkillInfo(empIdx).controls[skillIdx]).controls[fieldName];
  }

  getSkillInfoControlError(empIdx: number, skillIdx: number, fieldName: string): string {
    const control = this.getSkillInfoControl(empIdx, skillIdx, fieldName);
    if (fieldName === 'skillRating') {
      return control.hasError('min') ? "Minimum value is 1" : "Max value is 5";
    }
    return "Please recheck skill validation";
  }

  addSkillFormGroup(empIndex: number) {
    const skillFormGroup = this._formBuilder.group({
      skillName: [''],
      skillRating: [null, [Validators.min(1), Validators.max(5)]]
    });
    this.getSkillInfo(empIndex).push(skillFormGroup);
    this.form.updateValueAndValidity();
  }

  removeSkillFormGroup(empIdx: number, skillIdx: number): void {
    this.getSkillInfo(empIdx).removeAt(skillIdx);
    this.form.updateValueAndValidity();
  }
  // #endregion

  // #region educationInfo
  getEducationInfo(empIndex: number): FormArray {
    return (<FormArray>(<FormArray>this.empInfo.controls[empIndex]).get('educationInfo'))
  }

  getEducationInfoControl(empIdx: number, eduIdx: number, fieldName: string): AbstractControl {
    return (<FormGroup>this.getEducationInfo(empIdx).controls[eduIdx]).controls[fieldName];
  }

  getEducationInfoControlError(empIdx: number, eduIdx: number, fieldName: string): string {
    const control = this.getEducationInfoControl(empIdx, eduIdx, fieldName);
    if (fieldName === 'instituteName') {
      return control.hasError('maxlength') ? "Maximum 50 characters" : "Institute name is required";
    }
    if (fieldName === 'courseName') {
      return control.hasError('maxlength') ? "Maximum 25 characters" : "Course name is required";
    }
    return "Please recheck education validation";
  }

  addEducationFormGroup(empIndex: number) {
    const educationFormGroup = this._formBuilder.group({
      instituteName: ['', [Validators.required, Validators.maxLength(50)]],
      courseName: ['', [Validators.required, Validators.maxLength(25)]],
      completedYear: ['', ]
    });
    this.getEducationInfo(empIndex).push(educationFormGroup);
    this.form.updateValueAndValidity();
  }

  removeEducationFormGroup(empIdx: number, eduIdx: number): void {
    this.getEducationInfo(empIdx).removeAt(eduIdx);
    this.form.updateValueAndValidity();
  }
  // #endregion

  getControlError(fieldName: string): string {
    const control = this.form.get(fieldName);

    if (fieldName === 'companyName') {
      if (control?.hasError('required')) return 'Company name is required';
      else if (control?.hasError('maxlength')) return 'Maximum 50 characters';
    }

    if (fieldName === 'email') {
      if (control?.hasError('required')) return 'Email is required';
      else if (control?.hasError('maxlength')) return 'Maximum 100 characters';
      else if (control?.hasError('email')) return 'Not a valid email format';
    }

    if (fieldName === 'phoneNumber') {
      if (control?.hasError('required')) return 'Phone number is required';
      else if (control?.hasError('maxlength')) return 'Maximum 15 characters';
    }

    if (fieldName === 'empName') { // TODO: error msg doesn't work!
      if (control?.hasError('required')) return 'Employeer name is required';
      else if (control?.hasError('maxlength')) return 'Maximum 25 characters';
    }

    return "Please recheck form validation";
  }
}
