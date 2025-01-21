import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor() { }
  
  public feedData: Object[] = [
    {
      "asset-type": 'banner-image',
      "width": 'full',
      "order": 1,
      "layout": 'banner',
      "data": {
        "imageUrl": "https://img.freepik.com/free-vector/online-cinema-banner-with-open-clapper-board-film-strip_1419-2242.jpg",
        // "ctaLink": ""
      }
    },
    {
      'asset-type': 'movie',
      "width": 'half',
      "layout": 'grid',
      // "mobileLayout": "Grid",
      "order": 2,
      "data": [{
        "name": "Avengers",
        "imageUrl": "https://cdnb.artstation.com/p/assets/images/images/051/181/161/large/brendon-isaiah-bengtson-spiderman-iconic-hightogame-thumbnail.jpg?1656635653",
        "id": "1"
      }, {
        "name": "Avengers",
        "imageUrl": "https://cdnb.artstation.com/p/assets/images/images/051/181/161/large/brendon-isaiah-bengtson-spiderman-iconic-hightogame-thumbnail.jpg?1656635653",
        "id": "2"
      }, {
        "name": "Avengers",
        "imageUrl": "https://cdnb.artstation.com/p/assets/images/images/051/181/161/large/brendon-isaiah-bengtson-spiderman-iconic-hightogame-thumbnail.jpg?1656635653",
        "id": ""
      }, {
        "name": "Avengers",
        "imageUrl": "https://cdnb.artstation.com/p/assets/images/images/051/181/161/large/brendon-isaiah-bengtson-spiderman-iconic-hightogame-thumbnail.jpg?1656635653",
        "id": ""
      }, {
        "name": "Avengers",
        "imageUrl": "https://cdnb.artstation.com/p/assets/images/images/051/181/161/large/brendon-isaiah-bengtson-spiderman-iconic-hightogame-thumbnail.jpg?1656635653",
        "id": ""
      }, {
        "name": "Avengers",
        "imageUrl": "https://cdnb.artstation.com/p/assets/images/images/051/181/161/large/brendon-isaiah-bengtson-spiderman-iconic-hightogame-thumbnail.jpg?1656635653",
        "id": ""
      }],
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
      "data": [{
        "name": "Avengers",
        "imageUrl": "https://cdnb.artstation.com/p/assets/images/images/051/181/161/large/brendon-isaiah-bengtson-spiderman-iconic-hightogame-thumbnail.jpg?1656635653",
        "id": "1"
      }, {
        "name": "Avengers",
        "imageUrl": "https://cdnb.artstation.com/p/assets/images/images/051/181/161/large/brendon-isaiah-bengtson-spiderman-iconic-hightogame-thumbnail.jpg?1656635653",
        "id": "2"
      }, {
        "name": "Avengers",
        "imageUrl": "https://cdnb.artstation.com/p/assets/images/images/051/181/161/large/brendon-isaiah-bengtson-spiderman-iconic-hightogame-thumbnail.jpg?1656635653",
        "id": ""
      }, {
        "name": "Avengers",
        "imageUrl": "https://cdnb.artstation.com/p/assets/images/images/051/181/161/large/brendon-isaiah-bengtson-spiderman-iconic-hightogame-thumbnail.jpg?1656635653",
        "id": ""
      }, {
        "name": "Avengers",
        "imageUrl": "https://cdnb.artstation.com/p/assets/images/images/051/181/161/large/brendon-isaiah-bengtson-spiderman-iconic-hightogame-thumbnail.jpg?1656635653",
        "id": ""
      }, {
        "name": "Avengers",
        "imageUrl": "https://cdnb.artstation.com/p/assets/images/images/051/181/161/large/brendon-isaiah-bengtson-spiderman-iconic-hightogame-thumbnail.jpg?1656635653",
        "id": ""
      }],
      "title": 'Popular Series',
      "meta": {
        "items": 3,
        "mobileItems": 2,
      },
    },
    {
      'asset-type': 'movie',
      "width": 'full',
      "layout": 'rail',
      // "mobileLayout": "Rail",
      "order": 4,
      "title": 'Top picks for you',
      "meta": {
        "items": 6,
        "mobileItems": 2,
      },
      "data": [{
        "name": "Avengers",
        "imageUrl": "https://cdnb.artstation.com/p/assets/images/images/051/181/161/large/brendon-isaiah-bengtson-spiderman-iconic-hightogame-thumbnail.jpg?1656635653",
        "id": "1"
      }, {
        "name": "Avengers",
        "imageUrl": "https://cdnb.artstation.com/p/assets/images/images/051/181/161/large/brendon-isaiah-bengtson-spiderman-iconic-hightogame-thumbnail.jpg?1656635653",
        "id": "2"
      }, {
        "name": "Avengers",
        "imageUrl": "https://cdnb.artstation.com/p/assets/images/images/051/181/161/large/brendon-isaiah-bengtson-spiderman-iconic-hightogame-thumbnail.jpg?1656635653",
        "id": ""
      }, {
        "name": "Avengers",
        "imageUrl": "https://cdnb.artstation.com/p/assets/images/images/051/181/161/large/brendon-isaiah-bengtson-spiderman-iconic-hightogame-thumbnail.jpg?1656635653",
        "id": ""
      }, {
        "name": "Avengers",
        "imageUrl": "https://cdnb.artstation.com/p/assets/images/images/051/181/161/large/brendon-isaiah-bengtson-spiderman-iconic-hightogame-thumbnail.jpg?1656635653",
        "id": ""
      }, {
        "name": "Avengers",
        "imageUrl": "https://cdnb.artstation.com/p/assets/images/images/051/181/161/large/brendon-isaiah-bengtson-spiderman-iconic-hightogame-thumbnail.jpg?1656635653",
        "id": ""
      }],
    },
    {
      'asset-type': 'movie',
      "width": 'full',
      "layout": 'rail',
      // "mobileLayout": "Rail",
      "order": 5,
      "title": 'Top picks for you',
      "meta": {
        "items": 6,
        "mobileItems": 2,
      },
      "data": [{
        "name": "Avengers",
        "imageUrl": "https://cdnb.artstation.com/p/assets/images/images/051/181/161/large/brendon-isaiah-bengtson-spiderman-iconic-hightogame-thumbnail.jpg?1656635653",
        "id": "1"
      }, {
        "name": "Avengers",
        "imageUrl": "https://cdnb.artstation.com/p/assets/images/images/051/181/161/large/brendon-isaiah-bengtson-spiderman-iconic-hightogame-thumbnail.jpg?1656635653",
        "id": "2"
      }, {
        "name": "Avengers",
        "imageUrl": "https://cdnb.artstation.com/p/assets/images/images/051/181/161/large/brendon-isaiah-bengtson-spiderman-iconic-hightogame-thumbnail.jpg?1656635653",
        "id": ""
      }, {
        "name": "Avengers",
        "imageUrl": "https://cdnb.artstation.com/p/assets/images/images/051/181/161/large/brendon-isaiah-bengtson-spiderman-iconic-hightogame-thumbnail.jpg?1656635653",
        "id": ""
      }, {
        "name": "Avengers",
        "imageUrl": "https://cdnb.artstation.com/p/assets/images/images/051/181/161/large/brendon-isaiah-bengtson-spiderman-iconic-hightogame-thumbnail.jpg?1656635653",
        "id": ""
      }, {
        "name": "Avengers",
        "imageUrl": "https://cdnb.artstation.com/p/assets/images/images/051/181/161/large/brendon-isaiah-bengtson-spiderman-iconic-hightogame-thumbnail.jpg?1656635653",
        "id": ""
      }],
    }
  ];
}
