import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mouse-behauviur',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mouse-behauviur.component.html',
  styleUrl: './mouse-behauviur.component.css'
})
export class MouseBehauviurComponent {
  @ViewChild('mouselement', { static: true, read: ElementRef }) mouseElement!: ElementRef

  @HostListener("document:mousemove", ["$event"])
  handleMouseEvent(event: MouseEvent) {
    // console.log(event)
    this.mouseElement.nativeElement.style.left = event.pageX + "px"
    this.mouseElement.nativeElement.style.top = event.pageY + "px"
  }


}
