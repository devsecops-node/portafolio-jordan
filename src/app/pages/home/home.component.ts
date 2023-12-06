import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  @ViewChild("mouselement", { static: true, read: ElementRef }) mouselement!: ElementRef
  @ViewChild("detect", { static: true, read: ElementRef }) spanSelector!: ElementRef
  show_text: boolean = true
  @HostListener("document:mousemove", ["$event"])

  handleMouseEvent(event: MouseEvent) {
    this.mouselement.nativeElement.style.left = event.pageX + "px"
    this.mouselement.nativeElement.style.top = event.pageY + "px"
  }

  overSpan(event:MouseEvent){
  console.log(this.spanSelector.nativeElement)
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.show_text = false
    }, 2000)
  }
}
