import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule, MatIcon} from '@angular/material/icon';
@NgModule({
  imports: [MatIconModule,MatCardModule,MatButtonModule,MatToolbarModule,MatExpansionModule,MatInputModule,MatProgressBarModule],
  exports: [MatIconModule,MatCardModule,MatButtonModule,MatToolbarModule,MatExpansionModule,MatInputModule,MatProgressBarModule]
})
export class MaterialModule { }
