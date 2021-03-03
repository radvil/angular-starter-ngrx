import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// ng materials
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ShellComponent } from './shell.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    ShellComponent,
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
		// ng materials
		MatButtonModule,
		MatMenuModule,
		MatToolbarModule,
		MatIconModule,
		MatListModule,
		MatProgressBarModule,
		MatSidenavModule,
		MatSnackBarModule,
		MatToolbarModule,
  ],
  exports: [
    ShellComponent,
    TopbarComponent,
    SidebarComponent,
    FooterComponent
  ],
})
export class ShellModule { }
