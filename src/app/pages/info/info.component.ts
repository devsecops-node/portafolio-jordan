import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

}
