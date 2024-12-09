import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit{
  @Input()
  public component: any = [];
  
  ngOnInit(): void {
    console.log(this.component)
  }
}
