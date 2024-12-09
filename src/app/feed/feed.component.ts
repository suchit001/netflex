import { Component } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent {
  public feedData = [
    {
      "asset-type": 'banner-image',
      "width": 'full',
      "order": 1,
      "layout": 'hero-banner',
    },
    {
      'asset-type': 'movie',
      "width": 'half',
      "layout": 'grid',
      // "mobileLayout": "Grid",
      "order": 2,
      "data": [],
      "title": 'Recent release',
      "meta": {
        "items": 3,
        "mobileItems": 2,
      },
    },
    {
      'asset-type': 'series',
      "width": 'half',
      "layout": 'grid',
      // "mobileLayout": "Grid",
      "order": 3,
      "data": [],
      "title": 'Popular Series',
      "meta": {
        "items": 3,
        "mobileItems": 2,
      },
    },
    {
      'asset-type': 'movies',
      "width": 'full',
      "layout": 'rail',
      // "mobileLayout": "Rail",
      "order": 4,
      "title": 'Top picks for you',
    },
  ];
}
