import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexDistanciasComponent } from './index-distancias/index-distancias.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexDistanciasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule
  ],
  exports: [
    IndexDistanciasComponent
  ]
})
export class DistanciasModule { }