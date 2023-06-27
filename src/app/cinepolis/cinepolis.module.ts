import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexCinepolisComponent } from './index-cinepolis/index-cinepolis.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
// import de lo necesario para un radio button
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    IndexCinepolisComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    FormsModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    IndexCinepolisComponent
  ]
})
export class CinepolisModule { }
