import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-container',
  templateUrl: './component-container.component.html',
  styleUrl: './component-container.component.scss'
})
export class ComponentContainerComponent {
  @Input()
  public component: any = [];
  
}
