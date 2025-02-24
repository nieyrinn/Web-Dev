import { Injectable } from '@angular/core';
import { Product } from './product.model'; 
import { filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
    private products: { [key: string]: Product[] } = {     
        "Toys":
         [
    {
      id: 1,
      name: 'Hello Kitty BRICKS',
      description: 'Mini constructor with 106 details, ideal for Valentine gift',
      price: 263,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: 'assets/images/img1.jpg',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 2,
      name: 'Winnie Pooh BRICKS',
      description: 'Mini constructor, 97 details, ideal gift for kids',
      price: 263,
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: 'assets/images/img2.jpg',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 3,
      name: 'Spange Bob BRICKS',
      description: 'Mini constructor with 96 details, ideal gift for kids',
      price: 263,
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: 'assets/images/img3.jpg',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 4,
      name: 'Aliens BRICKS',
      description: 'Mini constructor with 178 details, ideal gift for kids',
      price: 263,
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: 'assets/images/img4.jpg',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 5,
      name: 'Patrick Star BRICKS',
      description: 'Mini constructor with 117 details, ideal gift for kids',
      price: 263,
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: 'assets/images/img5.jpg',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 6,
      name: 'My Melody BRICKS',
      description: 'Mini constructor with 123 details, ideal for Valentine gift',
      price: 263,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: 'assets/images/img6.jpg',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 7,
      name: 'Pochacco BRICKS',
      description: 'Mini constructor with 110 details, ideal for Valentine gift',
      price: 263,
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: 'assets/images/img7.jpg',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 8,
      name: 'Goofy BRICKS',
      description: 'Mini constructor with 93 details, ideal gift for kids',
      price: 263,
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: 'assets/images/img8.jpg',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 9,
      name: 'Tiger BRICKS',
      description: 'Mini constructor with 122 details, ideal gift for kids',
      price: 263,
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: 'assets/images/img9.jpg',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 10,
      name: 'Mario Bros BRICKS',
      description: 'Mini constructor with 114 details, ideal gift for kids',
      price: 263,
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/mini-konstruktor-bricks-30085817-759992-detalei-106-sht-116271866/?c=750000000',
      image: 'assets/images/img10.jpg',
      currentImageIndex: 0,
      likes: 0
    }
    ],
        "Laptops": [
          { id: 11, 
            name: " Pink Apple MacBook", 
            price: 500000, 
            image: 'assets/images/laptop3.jpeg', 
            likes: 0, 
            description: "Pink Mac with 8 processors", 
            rating: 4.8, 
            link: "https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63-100797845/?c=750000000", 
            currentImageIndex: 0 
        },
          { id: 12, 
            name: " PINK LG", 
            price: 150000, 
            image: 'assets/images/laptop1.jpeg', 
            likes: 0, 
            description: "LG ideal for study", 
            rating: 4.7, 
            link: "https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63-100797845/?m=6198001&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gad_source=1&gbraid=0AAAAAC7-v7i5CYI_SZfbh23BkFh6XNWg_&gclid=CjwKCAiAzvC9BhADEiwAEhtlN_dYLmyr6U5oXgzrSEYtpF5AbXWpzYgmVDkXssmJYblke5CZBLkBAhoCPAMQAvD_BwE", 
            currentImageIndex: 0 
        },
          { id: 13, 
            name: " PINK ASUS", 
            price: 399000, 
            image: 'assets/images/laptop4.png', 
            likes: 0, 
            description: "ASUS", 
            rating: 4.9, 
            link: "https://www.nbplaza.com.my/asus-laptop/12892-asus-vivobook-go-14-e410k-aek732ws-14-fhd-laptop-rose-pink-celeron-n4500-8gb-512gb-ssd-intel-w11-hsm365-.html", 
            currentImageIndex: 0 
      },
              { id: 14, 
                name: " PINK Laptop", 
                price: 150000, 
                image: 'assets/images/laptop6.jpeg', 
                likes: 0, 
                description: "LG ideal for study", 
                rating: 4.2, 
                link: "https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63-100797845/?m=6198001&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gad_source=1&gbraid=0AAAAAC7-v7i5CYI_SZfbh23BkFh6XNWg_&gclid=CjwKCAiAzvC9BhADEiwAEhtlN_dYLmyr6U5oXgzrSEYtpF5AbXWpzYgmVDkXssmJYblke5CZBLkBAhoCPAMQAvD_BwE", 
                currentImageIndex: 0 
            },
            { 
              id: 15, 
              name: " Computer Constructor", 
              price: 150000, 
              image: 'assets/images/laptop5.jpeg', 
              likes: 0, 
              description: "Smart watch Apple Watch Series 9 GPS S/M 45 mm pink", 
              rating: 4.7, 
              link: "https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63-100797845/?m=6198001&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gad_source=1&gbraid=0AAAAAC7-v7i5CYI_SZfbh23BkFh6XNWg_&gclid=CjwKCAiAzvC9BhADEiwAEhtlN_dYLmyr6U5oXgzrSEYtpF5AbXWpzYgmVDkXssmJYblke5CZBLkBAhoCPAMQAvD_BwE", 
              currentImageIndex: 0 
          },
          { id: 16, 
            name: " Pink Apple MacBook", 
            price: 500000, 
            image: 'assets/images/laptop3.jpeg', 
            likes: 0, 
            description: "Pink Mac with 8 processors", 
            rating: 4.8, 
            link: "https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63-100797845/?c=750000000", 
            currentImageIndex: 0 
        },
          { id: 17, 
            name: " PINK LG", 
            price: 150000, 
            image: 'assets/images/laptop1.jpeg', 
            likes: 0, 
            description: "LG ideal for study", 
            rating: 4.5, 
            link: "https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63-100797845/?m=6198001&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gad_source=1&gbraid=0AAAAAC7-v7i5CYI_SZfbh23BkFh6XNWg_&gclid=CjwKCAiAzvC9BhADEiwAEhtlN_dYLmyr6U5oXgzrSEYtpF5AbXWpzYgmVDkXssmJYblke5CZBLkBAhoCPAMQAvD_BwE", 
            currentImageIndex: 0 
        },
          { id: 18, 
            name: " PINK ASUS", 
            price: 399000, 
            image: 'assets/images/laptop4.png', 
            likes: 0, 
            description: "ASUS", 
            rating: 4.6, 
            link: "https://www.nbplaza.com.my/asus-laptop/12892-asus-vivobook-go-14-e410k-aek732ws-14-fhd-laptop-rose-pink-celeron-n4500-8gb-512gb-ssd-intel-w11-hsm365-.html", 
            currentImageIndex: 0 
        },
            { id: 19, 
            name: " PINK Laptop", 
            price: 150000, 
            image: 'assets/images/laptop6.jpeg', 
            likes: 0, 
            description: "LG ideal for study", 
            rating: 4.1, 
            link: "https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63-100797845/?m=6198001&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gad_source=1&gbraid=0AAAAAC7-v7i5CYI_SZfbh23BkFh6XNWg_&gclid=CjwKCAiAzvC9BhADEiwAEhtlN_dYLmyr6U5oXgzrSEYtpF5AbXWpzYgmVDkXssmJYblke5CZBLkBAhoCPAMQAvD_BwE", 
            currentImageIndex: 0 
            },
            { 
            id: 20, 
            name: " Computer Constructor", 
            price: 150000, 
            image: 'assets/images/laptop5.jpeg', 
            likes: 0, 
            description: " Comp Series 9 GPS S/M 45 mm pink", 
            rating: 4.7, 
            link: "https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63-100797845/?m=6198001&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gad_source=1&gbraid=0AAAAAC7-v7i5CYI_SZfbh23BkFh6XNWg_&gclid=CjwKCAiAzvC9BhADEiwAEhtlN_dYLmyr6U5oXgzrSEYtpF5AbXWpzYgmVDkXssmJYblke5CZBLkBAhoCPAMQAvD_BwE", 
            currentImageIndex: 0 
            }
            ],
            "Headphones": [
              {
                id: 21, 
                name: "LG ping headphones", 
                price: 5000, 
                image: 'assets/images/head1.webp', 
                likes: 0, 
                description: "Headphones 9 GPS S/M 45 mm pink", 
                rating: 4.5, 
                link: "https://kaspi.kz/shop/p/apple-airpods-max-2-fioletovyi-128589567/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7i5CYI_SZfbh23BkFh6XNWg_&gclid=CjwKCAiAzvC9BhADEiwAEhtlN_dYLmyr6U5oXgzrSEYtpF5AbXWpzYgmVDkXssmJYblke5CZBLkBAhoCPAMQAvD_BwE", 
                currentImageIndex: 0 
              },
              {
                id: 22, 
                name: "Apple Pink Air", 
                price: 150000, 
                image: 'assets/images/head2.jpeg', 
                likes: 0, 
                description: "Headphones Series 9 GPS S/M 45 mm pink", 
                rating: 4.8, 
                link: "https://kaspi.kz/shop/p/apple-airpods-max-2-fioletovyi-128589567/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7i5CYI_SZfbh23BkFh6XNWg_&gclid=CjwKCAiAzvC9BhADEiwAEhtlN_dYLmyr6U5oXgzrSEYtpF5AbXWpzYgmVDkXssmJYblke5CZBLkBAhoCPAMQAvD_BwE", 
                currentImageIndex: 0 
              },
              {
                id: 23, 
                name: "UWU headphones", 
                price: 4500, 
                image: 'assets/images/head3.jpeg', 
                likes: 0, 
                description: "Headphones Series 9 GPS S/M 45 mm pink", 
                rating: 4.6, 
                link: "https://kaspi.kz/shop/p/razer-barracuda-x-quartz-pink-rozovyi-104671092/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7i5CYI_SZfbh23BkFh6XNWg_&gclid=CjwKCAiAzvC9BhADEiwAEhtlN_dYLmyr6U5oXgzrSEYtpF5AbXWpzYgmVDkXssmJYblke5CZBLkBAhoCPAMQAvD_BwE", 
                currentImageIndex: 0 
              },
              {
                id: 24, 
                name: "SONY", 
                price: 130000, 
                image: 'assets/images/head4.webp', 
                likes: 0, 
                description: "Headphones Series 9 GPS S/M 45 mm pink", 
                rating: 4.9, 
                link: "https://kaspi.kz/shop/p/sony-wh-ch520-bezhevyi-113518244/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7i5CYI_SZfbh23BkFh6XNWg_&gclid=CjwKCAiAzvC9BhADEiwAEhtlN_dYLmyr6U5oXgzrSEYtpF5AbXWpzYgmVDkXssmJYblke5CZBLkBAhoCPAMQAvD_BwE", 
                currentImageIndex: 0 
              },
              {
                id: 25, 
                name: "Smart Watch", 
                price: 250000, 
                image: 'assets/images/head5.jpeg', 
                likes: 0, 
                description: "Headphones Series 9 GPS S/M 45 mm pink", 
                rating: 4.2, 
                link: "https://kaspi.kz/shop/p/apple-airpods-max-2-fioletovyi-128589567/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7i5CYI_SZfbh23BkFh6XNWg_&gclid=CjwKCAiAzvC9BhADEiwAEhtlN_dYLmyr6U5oXgzrSEYtpF5AbXWpzYgmVDkXssmJYblke5CZBLkBAhoCPAMQAvD_BwE", 
                currentImageIndex: 0 
              },
              {
                id: 26, 
                name: "LG ping headphones", 
                price: 5000, 
                image: 'assets/images/head1.webp', 
                likes: 0, 
                description: "Headphones Series 9 GPS S/M 45 mm pink", 
                rating: 4.5, 
                link: "https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63-100797845/?m=6198001&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gad_source=1&gbraid=0AAAAAC7-v7i5CYI_SZfbh23BkFh6XNWg_&gclid=CjwKCAiAzvC9BhADEiwAEhtlN_dYLmyr6U5oXgzrSEYtpF5AbXWpzYgmVDkXssmJYblke5CZBLkBAhoCPAMQAvD_BwE", 
                currentImageIndex: 0 
              },
              {
                id: 27, 
                name: "Apple Pink Air", 
                price: 150000, 
                image: 'assets/images/head2.jpeg', 
                likes: 0, 
                description: "Headphones Series 9 GPS S/M 45 mm pink", 
                rating: 4.4, 
                link: "https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63-100797845/?m=6198001&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gad_source=1&gbraid=0AAAAAC7-v7i5CYI_SZfbh23BkFh6XNWg_&gclid=CjwKCAiAzvC9BhADEiwAEhtlN_dYLmyr6U5oXgzrSEYtpF5AbXWpzYgmVDkXssmJYblke5CZBLkBAhoCPAMQAvD_BwE", 
                currentImageIndex: 0 
              },
              {
                id: 28, 
                name: "UWU headphones", 
                price: 4500, 
                image: 'assets/images/head3.jpeg', 
                likes: 0, 
                description: "Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears", 
                rating: 4.8, 
                link: "https://kaspi.kz/shop/p/razer-barracuda-x-quartz-pink-rozovyi-104671092/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7i5CYI_SZfbh23BkFh6XNWg_&gclid=CjwKCAiAzvC9BhADEiwAEhtlN_dYLmyr6U5oXgzrSEYtpF5AbXWpzYgmVDkXssmJYblke5CZBLkBAhoCPAMQAvD_BwE", 
                currentImageIndex: 0 
              },
              {
                id: 29, 
                name: "SONY", 
                price: 130000, 
                image: 'assets/images/head4.webp', 
                likes: 0, 
                description: "Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears", 
                rating: 4.7, 
                link: "https://kaspi.kz/shop/p/sony-wh-ch520-bezhevyi-113518244/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7i5CYI_SZfbh23BkFh6XNWg_&gclid=CjwKCAiAzvC9BhADEiwAEhtlN_dYLmyr6U5oXgzrSEYtpF5AbXWpzYgmVDkXssmJYblke5CZBLkBAhoCPAMQAvD_BwE", 
                currentImageIndex: 0 
              },
              {
                id: 30, 
                name: "Smart Watch", 
                price: 250000, 
                image: 'assets/images/head5.jpeg', 
                likes: 0, 
                description: "Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears", 
                rating: 4.2, 
                link: "https://kaspi.kz/shop/p/apple-airpods-max-2-fioletovyi-128589567/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7i5CYI_SZfbh23BkFh6XNWg_&gclid=CjwKCAiAzvC9BhADEiwAEhtlN_dYLmyr6U5oXgzrSEYtpF5AbXWpzYgmVDkXssmJYblke5CZBLkBAhoCPAMQAvD_BwE", 
                currentImageIndex: 0 
              }
            ], 
            "Cameras": [
              {
                id: 31, 
                name: "Camera LIMIT", 
                price: 250000, 
                image: 'assets/images/camera1.jpeg', 
                likes: 0, 
                description: "Camera Series 9 GPS S/M 45 mm pink", 
                rating: 4.9, 
                link: "https://kaspi.kz/shop/p/fujifilm-instax-mini-12-rozovyi-109477187/?m=Sulpak&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gad_source=1&gbraid=0AAAAAC7-v7i5cNaCy5T-h0GqNu7vc0L3V&gclid=CjwKCAiAzvC9BhADEiwAEhtlN-itFhP0d8E1iDAu5kC2QKAHA6wcQZiAlv2E2Y9zPOc4qNHQp0gr5RoCa-MQAvD_BwE", 
                currentImageIndex: 0 
              },
              {
                id: 32, 
                name: "Camera MIMIBOX", 
                price: 50000, 
                image: 'assets/images/camera2.jpg', 
                likes: 0, 
                description: "Camera Series 9 GPS S/M 45 mm pink", 
                rating: 4.6, 
                link: "https://kaspi.kz/shop/p/fujifilm-instax-mini-12-rozovyi-109477187/?m=Sulpak&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gad_source=1&gbraid=0AAAAAC7-v7i5cNaCy5T-h0GqNu7vc0L3V&gclid=CjwKCAiAzvC9BhADEiwAEhtlN-itFhP0d8E1iDAu5kC2QKAHA6wcQZiAlv2E2Y9zPOc4qNHQp0gr5RoCa-MQAvD_BwE", 
                currentImageIndex: 0 
              },
              {
                id: 33, 
                name: "Camera TOY", 
                price: 5000, 
                image: 'assets/images/camera3.webp', 
                likes: 0, 
                description: "Camera Series 9 GPS S/M 45 mm pink", 
                rating: 4.2, 
                link: "https://kaspi.kz/shop/p/fujifilm-instax-mini-12-rozovyi-109477187/?m=Sulpak&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gad_source=1&gbraid=0AAAAAC7-v7i5cNaCy5T-h0GqNu7vc0L3V&gclid=CjwKCAiAzvC9BhADEiwAEhtlN-itFhP0d8E1iDAu5kC2QKAHA6wcQZiAlv2E2Y9zPOc4qNHQp0gr5RoCa-MQAvD_BwE", 
                currentImageIndex: 0 
              },
              {
                id: 34, 
                name: "Camera CANON", 
                price: 150000, 
                image: 'assets/images/camera4.jpeg', 
                likes: 0, 
                description: "Camera Series 9 GPS S/M 45 mm pink", 
                rating: 4.9, 
                link: "https://kaspi.kz/shop/p/fujifilm-instax-mini-12-rozovyi-109477187/?m=Sulpak&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gad_source=1&gbraid=0AAAAAC7-v7i5cNaCy5T-h0GqNu7vc0L3V&gclid=CjwKCAiAzvC9BhADEiwAEhtlN-itFhP0d8E1iDAu5kC2QKAHA6wcQZiAlv2E2Y9zPOc4qNHQp0gr5RoCa-MQAvD_BwE", 
                currentImageIndex: 0 
              },
              {
                id: 35, 
                name: "Camera SONY", 
                price: 250000, 
                image: 'assets/images/camera5.jpg', 
                likes: 0, 
                description: "Camera 9 GPS S/M 45 mm pink", 
                rating: 4.8, 
                link: "https://kaspi.kz/shop/p/fujifilm-instax-mini-12-rozovyi-109477187/?m=Sulpak&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gad_source=1&gbraid=0AAAAAC7-v7i5cNaCy5T-h0GqNu7vc0L3V&gclid=CjwKCAiAzvC9BhADEiwAEhtlN-itFhP0d8E1iDAu5kC2QKAHA6wcQZiAlv2E2Y9zPOc4qNHQp0gr5RoCa-MQAvD_BwE", 
                currentImageIndex: 0 
              },
              {
                id: 36, 
                name: "Camera LIMIT", 
                price: 25000, 
                image: 'assets/images/camera1.jpeg', 
                likes: 0, 
                description: "Smart watch Apple Watch Series 9 GPS S/M 45 mm pink", 
                rating: 4.9, 
                link: "https://kaspi.kz/shop/p/fujifilm-instax-mini-12-rozovyi-109477187/?m=Sulpak&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gad_source=1&gbraid=0AAAAAC7-v7i5cNaCy5T-h0GqNu7vc0L3V&gclid=CjwKCAiAzvC9BhADEiwAEhtlN-itFhP0d8E1iDAu5kC2QKAHA6wcQZiAlv2E2Y9zPOc4qNHQp0gr5RoCa-MQAvD_BwE", 
                currentImageIndex: 0 
              },
              {
                id: 37, 
                name: "Smart Watch", 
                price: 50000, 
                image: 'assets/images/camera2.jpg', 
                likes: 0, 
                description: "Smart watch Apple Watch Series 9 GPS S/M 45 mm pink", 
                rating: 4.2, 
                link: "https://kaspi.kz/shop/p/fujifilm-instax-mini-12-rozovyi-109477187/?m=Sulpak&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gad_source=1&gbraid=0AAAAAC7-v7i5cNaCy5T-h0GqNu7vc0L3V&gclid=CjwKCAiAzvC9BhADEiwAEhtlN-itFhP0d8E1iDAu5kC2QKAHA6wcQZiAlv2E2Y9zPOc4qNHQp0gr5RoCa-MQAvD_BwE", 
                currentImageIndex: 0 
              },
              {
                id: 38, 
                name: "Smart Watch", 
                price: 5000, 
                image: 'assets/images/camera3.webp', 
                likes: 0, 
                description: "Smart watch Apple Watch Series 9 GPS S/M 45 mm pink", 
                rating: 4.8, 
                link: "https://kaspi.kz/shop/p/fujifilm-instax-mini-12-rozovyi-109477187/?m=Sulpak&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gad_source=1&gbraid=0AAAAAC7-v7i5cNaCy5T-h0GqNu7vc0L3V&gclid=CjwKCAiAzvC9BhADEiwAEhtlN-itFhP0d8E1iDAu5kC2QKAHA6wcQZiAlv2E2Y9zPOc4qNHQp0gr5RoCa-MQAvD_BwE", 
                currentImageIndex: 0 
              },
              {
                id: 39, 
                name: "Smart Watch", 
                price: 150000, 
                image: 'assets/images/camera4.jpeg', 
                likes: 0, 
                description: "Smart watch Apple Watch Series 9 GPS S/M 45 mm pink", 
                rating: 4.9, 
                link: "https://kaspi.kz/shop/p/fujifilm-instax-mini-12-rozovyi-109477187/?m=Sulpak&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gad_source=1&gbraid=0AAAAAC7-v7i5cNaCy5T-h0GqNu7vc0L3V&gclid=CjwKCAiAzvC9BhADEiwAEhtlN-itFhP0d8E1iDAu5kC2QKAHA6wcQZiAlv2E2Y9zPOc4qNHQp0gr5RoCa-MQAvD_BwE", 
                currentImageIndex: 0 
              },
              {
                id: 40, 
                name: "Smart Watch", 
                price: 250000, 
                image: 'assets/images/camera5.jpg', 
                likes: 0, 
                description: "Smart watch Apple Watch Series 9 GPS S/M 45 mm pink", 
                rating: 4.4, 
                link: "https://kaspi.kz/shop/p/fujifilm-instax-mini-12-rozovyi-109477187/?m=Sulpak&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gad_source=1&gbraid=0AAAAAC7-v7i5cNaCy5T-h0GqNu7vc0L3V&gclid=CjwKCAiAzvC9BhADEiwAEhtlN-itFhP0d8E1iDAu5kC2QKAHA6wcQZiAlv2E2Y9zPOc4qNHQp0gr5RoCa-MQAvD_BwE", 
                currentImageIndex: 0 
              }
            ],
            "Smt-watches": [ 
              {
                id: 41, 
                name: "Smart Watch", 
                price: 250000, 
                image: 'assets/images/smrt1.jpeg', 
                likes: 0, 
                description: "Smart watch Apple Watch Series 9 GPS S/M 45 mm pink", 
                rating: 4.8, 
                link: "https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-rozovyi-130113986/?m=Xiaomi&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gad_source=1&gbraid=0AAAAAC7-v7i5cNaCy5T-h0GqNu7vc0L3V&gclid=CjwKCAiAzvC9BhADEiwAEhtlN9SHQnQW5xBjNnSkJrzNTgIuaJqRf-bK1mesJ4B-txB1hOKJDTVRUhoCS2oQAvD_BwE", 
                currentImageIndex: 0 
            },
            {
              id: 42, 
              name: "Smart Watch", 
              price: 250000, 
              image: 'assets/images/smrt2.jpg', 
              likes: 0, 
              description: "Smart watch Apple Watch Series 9 GPS S/M 45 mm pink", 
              rating: 4.7, 
              link: "https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-rozovyi-130113986/?m=Xiaomi&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gad_source=1&gbraid=0AAAAAC7-v7i5cNaCy5T-h0GqNu7vc0L3V&gclid=CjwKCAiAzvC9BhADEiwAEhtlN9SHQnQW5xBjNnSkJrzNTgIuaJqRf-bK1mesJ4B-txB1hOKJDTVRUhoCS2oQAvD_BwE", 
              currentImageIndex: 0 
          },
          {
            id: 43, 
            name: "Smart Watch", 
            price: 250000, 
            image: 'assets/images/smrt3.webp', 
            likes: 0, 
            description: "Smart watch Apple Watch Series 9 GPS S/M 45 mm pink", 
            rating: 4.6, 
            link: "https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-rozovyi-130113986/?m=Xiaomi&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gad_source=1&gbraid=0AAAAAC7-v7i5cNaCy5T-h0GqNu7vc0L3V&gclid=CjwKCAiAzvC9BhADEiwAEhtlN9SHQnQW5xBjNnSkJrzNTgIuaJqRf-bK1mesJ4B-txB1hOKJDTVRUhoCS2oQAvD_BwE", 
            currentImageIndex: 0 
        },
              {
                id: 44, 
                name: "Smart Watch", 
                price: 250000, 
                image: 'assets/images/smrt4.webp', 
                likes: 0, 
                description: "Smart watch Apple Watch Series 9 GPS S/M 45 mm pink", 
                rating: 4.5, 
                link: "https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-rozovyi-130113986/?m=Xiaomi&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gad_source=1&gbraid=0AAAAAC7-v7i5cNaCy5T-h0GqNu7vc0L3V&gclid=CjwKCAiAzvC9BhADEiwAEhtlN9SHQnQW5xBjNnSkJrzNTgIuaJqRf-bK1mesJ4B-txB1hOKJDTVRUhoCS2oQAvD_BwE", 
                currentImageIndex: 0 
            },
              {
                id: 45, 
                name: "Smart Watch", 
                price: 250000, 
                image: 'assets/images/smrt5.webp', 
                likes: 0, 
                description: "Smart watch Apple Watch Series 9 GPS S/M 45 mm pink", 
                rating: 4.3, 
                link: "https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-rozovyi-130113986/?m=Xiaomi&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gad_source=1&gbraid=0AAAAAC7-v7i5cNaCy5T-h0GqNu7vc0L3V&gclid=CjwKCAiAzvC9BhADEiwAEhtlN9SHQnQW5xBjNnSkJrzNTgIuaJqRf-bK1mesJ4B-txB1hOKJDTVRUhoCS2oQAvD_BwE", 
                currentImageIndex: 0 
            }, 
            {
              id: 46, 
              name: "Smart Watch", 
              price: 250000, 
              image: 'assets/images/smrt1.jpeg', 
              likes: 0, 
              description: "Smart watch Apple Watch Series 9 GPS S/M 45 mm pink", 
              rating: 4.9, 
              link: "https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-rozovyi-130113986/?m=Xiaomi&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gad_source=1&gbraid=0AAAAAC7-v7i5cNaCy5T-h0GqNu7vc0L3V&gclid=CjwKCAiAzvC9BhADEiwAEhtlN9SHQnQW5xBjNnSkJrzNTgIuaJqRf-bK1mesJ4B-txB1hOKJDTVRUhoCS2oQAvD_BwE", 
              currentImageIndex: 0 
          },
          {
            id: 47, 
            name: "Smart Watch", 
            price: 250000, 
            image: 'assets/images/smrt2.jpg', 
            likes: 0, 
            description: "Smart watch Apple Watch Series 9 GPS S/M 45 mm pink", 
            rating: 4.7, 
            link: "https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-rozovyi-130113986/?m=Xiaomi&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gad_source=1&gbraid=0AAAAAC7-v7i5cNaCy5T-h0GqNu7vc0L3V&gclid=CjwKCAiAzvC9BhADEiwAEhtlN9SHQnQW5xBjNnSkJrzNTgIuaJqRf-bK1mesJ4B-txB1hOKJDTVRUhoCS2oQAvD_BwE", 
            currentImageIndex: 0 
        },
        {
          id: 48, 
          name: "Smart Watch", 
          price: 250000, 
          image: 'assets/images/smrt3.webp', 
          likes: 0, 
          description: "Smart watch Apple Watch Series 9 GPS S/M 45 mm pink", 
          rating: 4.8, 
          link: "https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-rozovyi-130113986/?m=Xiaomi&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gad_source=1&gbraid=0AAAAAC7-v7i5cNaCy5T-h0GqNu7vc0L3V&gclid=CjwKCAiAzvC9BhADEiwAEhtlN9SHQnQW5xBjNnSkJrzNTgIuaJqRf-bK1mesJ4B-txB1hOKJDTVRUhoCS2oQAvD_BwE", 
          currentImageIndex: 0 
        },
              {
              id: 49, 
              name: "Smart Watch", 
              price: 250000, 
              image: 'assets/images/smrt4.webp', 
              likes: 0, 
              description: "Smart watch Apple Watch Series 9 GPS S/M 45 mm pink", 
              rating: 4.5, 
              link: "https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-rozovyi-130113986/?m=Xiaomi&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gad_source=1&gbraid=0AAAAAC7-v7i5cNaCy5T-h0GqNu7vc0L3V&gclid=CjwKCAiAzvC9BhADEiwAEhtlN9SHQnQW5xBjNnSkJrzNTgIuaJqRf-bK1mesJ4B-txB1hOKJDTVRUhoCS2oQAvD_BwE", 
              currentImageIndex: 0 
              },
              {
              id: 50, 
              name: "Smart Watch", 
              price: 250000, 
              image: 'assets/images/smrt5.webp', 
              likes: 0, 
              description: "Smart watch Apple Watch Series 9 GPS S/M 45 mm pink", 
              rating: 4.7, 
              link: "https://kaspi.kz/shop/p/xiaomi-smart-band-9-pro-rozovyi-130113986/?m=Xiaomi&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gad_source=1&gbraid=0AAAAAC7-v7i5cNaCy5T-h0GqNu7vc0L3V&gclid=CjwKCAiAzvC9BhADEiwAEhtlN9SHQnQW5xBjNnSkJrzNTgIuaJqRf-bK1mesJ4B-txB1hOKJDTVRUhoCS2oQAvD_BwE", 
              currentImageIndex: 0 
              }  
            ]
      };

  getProductsByCategory(categoryName: string) {
    return this.products[categoryName as keyof typeof this.products] || [];
  }

  getProductById(productId: number) {
    return Object.values(this.products).flat().find(p => p.id === productId);
  }

  likeProduct(productId: number) {
    const product = this.getProductById(productId);
    if (product) 
      product.likes = product.likes ? 0:1;
  }
  deleteProduct(productId: number) {
    for(let category in this.products) {
      this.products[category] == this.products[category].filter((p: Product) => p.id == productId);
    }
  }   
}
