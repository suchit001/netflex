import { Component, OnInit } from '@angular/core';
import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent implements OnInit{
  constructor(
    private feedService: FeedService
  ){}
  public feedData: any[] = [];

  ngOnInit(): void {
    this.feedData = this.feedService.feedData;
  }
}
