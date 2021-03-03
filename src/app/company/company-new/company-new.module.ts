import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyNewComponent } from './company-new.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CompanyService } from '../services/company.service';


@NgModule({
  declarations: [CompanyNewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CompanyNewComponent,
      }
    ]),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
  ],
  providers: [
    CompanyService,
  ],
})
export class CompanyNewModule { }
