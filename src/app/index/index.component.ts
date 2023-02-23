import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  imageObject: Array<object> = [
    {
      image: './assets/images/banner_1.jpg',
      thumbImage: './assets/images/banner_1.jpg',
      title: '100% 台灣茶葉',
      alt: 'alt of image',
    }, 
    {
      image: './assets/images/banner_2.jpg', // Support base64 image
      thumbImage: './assets/images/banner_2.jpg', // Support base64 image
      title: '絕無混充任何進口茶', //Optional: You can use this key if want to show image with title
      alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    }
  ];

}
