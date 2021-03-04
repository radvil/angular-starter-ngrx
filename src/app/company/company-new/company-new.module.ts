import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyNewComponent } from './company-new.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
// import { MatMomentDateModule } from '@angular/material-moment-adapter'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CompanyService } from '../services/company.service';


@NgModule({
  declarations: [CompanyNewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // MatMomentDateModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    RouterModule.forChild([
      {
        path: '',
        component: CompanyNewComponent,
      }
    ]),
  ],
})
export class CompanyNewModule { }
