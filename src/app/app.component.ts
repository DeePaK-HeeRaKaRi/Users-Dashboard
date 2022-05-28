import {  AfterViewInit,Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    // console.log(this.headline.nativeElement.innerHTML)
  }
  title = 'admin';

  @ViewChild('headline')
  headline!: ElementRef;

  // viewchild will be initialized only with ngAfterInit

   
}
