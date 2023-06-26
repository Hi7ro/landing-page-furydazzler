import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  hideText = true;
  rotate = false;

  headerText = [
    '',
    '“”',
    '“”',
    "“”",
  ];
  headerInfo = [
    '',
    '',
    `
  It really doesn’t. <br />
  <br />
  Instead of getting the newest videogame just to find it boring in a
  week, you can shock your friends and family by becoming the kid who’s
  leveling up in real life.
  '
    `,
    // Of course not. <br />
    // <br />
    // This is a mentoring program, and you are here to learn from us. <br />
    // <br />
    // Just follow our step-by-step lessons and guidance, and you will start a
    // profitable business.
    // `,
    // `
    // Rule #1 of The Real World is SPEED. <br />
    // <br />
    // The methods we teach are designed for rapid execution. <br />
    // <br />
    // So all you need is a minimum of 30 minutes a day to listen to your <br>
    // professors and apply what you’ve learned.
    // `,
  ];

  constructor() {}

  ngOnInit(): void {}

  rotated() {}

  showText(num: number) {
    for (let i = num; i <= this.headerText.length; i++) {
      if (this.hideText == false) {
        document.querySelector('img.img').classList.add('rotated');
        this.hideText = !this.hideText;
      } else {
        document.querySelector('img.img').classList.remove('rotated');
        this.hideText = !this.hideText;
      }
    }
  }
}
