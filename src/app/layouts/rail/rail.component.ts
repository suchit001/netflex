import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rail',
  templateUrl: './rail.component.html',
  styleUrl: './rail.component.scss'
})
export class RailComponent {
  @Input()
  public component: any = [];
}
