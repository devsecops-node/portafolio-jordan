import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MouseBehauviurComponent } from '../../components/mouse-behauviur/mouse-behauviur.component';
import { TransitionPageComponent } from '../../components/transition-page/transition-page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MouseBehauviurComponent, TransitionPageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  @ViewChild("detect", { static: true, read: ElementRef }) spanSelector!: ElementRef
  show_text: boolean = true


  overSpan(event:MouseEvent){
  console.log(this.spanSelector.nativeElement)
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.show_text = false
    }, 2000)
  }
}
