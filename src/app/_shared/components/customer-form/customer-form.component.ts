import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICustomer } from '../../mocks';

export interface ICustomerDialogData {
  customer: ICustomer;
  mode: 'NEW' | 'EDIT';
}

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  public form!: FormGroup;
  public numberPattern: RegExp = /^[0-9]\d*$/;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ICustomerDialogData,
    public dialogRef: MatDialogRef<CustomerFormComponent>,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: [''],
      address: this._getAddressForm(),
      contact: this._getContactForm(),
      notes: ['', [Validators.maxLength(500)]],
    });

    if (this.data.mode === 'EDIT') {
      const { firstName, lastName, notes } = this.data.customer;
      this.form.patchValue({
        firstName,
        lastName,
        notes,
      });
      this.form.updateValueAndValidity();
    }
  }

  get headerText(): string {
    return this.data.mode === 'EDIT'
      ? `${this.firstName?.value} ${this.form.get('lastName')?.value}`
      : "New Customer";
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get contact() {
    return this.form.get('contact') as FormGroup;
  }

  submit(): void {
    if (this.form.valid) this.dialogRef.close(this.form.value);
  }

  getFirstNameError() {
    return this.firstName?.hasError('required')
      ? 'First name is required!'
      : 'Something went wrong!';
  }

  getPhoneError() {
    const control = this.contact.controls['phone'];
    return control.hasError('maxlength')
      ? 'Maximum 12 characters allowed'
      : control.hasError('pattern')
        ? 'Only number allowed'
        : 'Phone number is required';
  }

  private _getAddressForm(): FormGroup {
    const form = this._formBuilder.group({
      street: [''],
      zipCode: [null],
      city: [''],
    });

    if (this.data.mode === 'EDIT') {
      const { zipCode, street, city } = this.data.customer?.address;
      form.patchValue({ zipCode, street, city });
    }

    return form;
  }

  private _getContactForm(): FormGroup {
    const form = this._formBuilder.group({
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(this.numberPattern),
          Validators.maxLength(12),
        ],
      ],
    });

    if (this.data.mode === 'EDIT') {
      const { phone } = this.data.customer?.contact;
      form.patchValue({ phone });
    }

    return form;
  }
}
