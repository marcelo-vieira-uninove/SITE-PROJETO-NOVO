import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BanerComponent implements OnInit {
  
  mostrarVideo = false;
  @ViewChild('videoPlayer') videoplayer: ElementRef | any;

  constructor() {  }
  
  ngOnInit(): void {

  }
    toggleVideo() {
      this.mostrarVideo = true;
      this.videoplayer.nativeElement.play();
   }
}
