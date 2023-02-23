import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  banner: Array<object> = [
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

  bestSeller: Array<object> = [
    {
      image: './assets/images/product_1.jpg',
      thumbImage: './assets/images/product_1.jpg',
      title: '福壽山茶王【精緻茶】',
      alt: 'alt of image',
    }, 
    {
      image: './assets/images/product_2.jpg', // Support base64 image
      thumbImage: './assets/images/product_2.jpg', // Support base64 image
      title: '大禹嶺山皇【精緻茶】', //Optional: You can use this key if want to show image with title
      alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    },
    {
      image: './assets/images/product_3.jpg', // Support base64 image
      thumbImage: './assets/images/product_3.jpg', // Support base64 image
      title: '福壽山茶王', //Optional: You can use this key if want to show image with title
      alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    },
    {
      image: './assets/images/product_4.jpg', // Support base64 image
      thumbImage: './assets/images/product_4.jpg', // Support base64 image
      title: '福壽山紅茶', //Optional: You can use this key if want to show image with title
      alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    },
    {
      image: './assets/images/product_1.jpg',
      thumbImage: './assets/images/product_1.jpg',
      title: '福壽山茶王【精緻茶】',
      alt: 'alt of image',
    }, 
    {
      image: './assets/images/product_2.jpg', // Support base64 image
      thumbImage: './assets/images/product_2.jpg', // Support base64 image
      title: '大禹嶺山皇【精緻茶】', //Optional: You can use this key if want to show image with title
      alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    },
    {
      image: './assets/images/product_3.jpg', // Support base64 image
      thumbImage: './assets/images/product_3.jpg', // Support base64 image
      title: '福壽山茶王', //Optional: You can use this key if want to show image with title
      alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    },
    {
      image: './assets/images/product_4.jpg', // Support base64 image
      thumbImage: './assets/images/product_4.jpg', // Support base64 image
      title: '福壽山紅茶', //Optional: You can use this key if want to show image with title
      alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    }
  ];

  teaGiftBox: Array<object> = [
    {
      image: './assets/images/product_5.jpg',
      thumbImage: './assets/images/product_5.jpg',
      title: '【品牌茶葉禮盒】自由配',
      alt: 'alt of image',
    }, 
    {
      image: './assets/images/product_6.jpg', // Support base64 image
      thumbImage: './assets/images/product_6.jpg', // Support base64 image
      title: '【暖心茶山禮盒】自由配', //Optional: You can use this key if want to show image with title
      alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    }
  ];

}
