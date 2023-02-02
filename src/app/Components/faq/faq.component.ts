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
    '"How quickly will I make my money back?"',
    '“Do I need money to start?”',
    '“Does my age really not matter?”',
    '“I know nothing about the skills you teach. Is it a problem?”',
    "“I don't have a lot of time available, can I still apply?”",
  ];
  headerInfo = [
    'It depends on how seriously you take HU.',
    'Not necessarily.\n \n A lot of our students chose copywriting and freelancing, which are \nbusinesses without money requirements.',
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
      } else {
        document.querySelector('img.img').classList.remove('rotated');
      }
    }
    this.hideText = !this.hideText;
  }
}
