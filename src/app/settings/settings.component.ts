import { Component, OnInit } from '@angular/core';
import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit{
  constructor(
    private feedService: FeedService
  ){}

  public feedData: Object[] = [];
  ngOnInit(): void {
    this.feedData = this.feedService.feedData;
  }
}
