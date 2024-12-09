import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-item',
  templateUrl: './component-item.component.html',
  styleUrl: './component-item.component.scss'
})
export class ComponentItemComponent implements OnInit {
  @Input()
  public componentType = null;

  @Input()
  public componentData = null;

  ngOnInit(): void {
    console.log('componenet Data is', this.componentData)
  }
}
