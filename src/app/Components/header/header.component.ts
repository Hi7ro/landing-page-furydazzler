import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isPaused: boolean = true;
  @Input() isPlaying: boolean = false;

  headline = ['The Real World', 'Escape The Matrix', 'Change Your Life NOW!'];
  video = '../../assets/modern university.mp4';

  showHeadline = true;
  typedOut = false;
  currentLine = 0;

  autoplay() {
    let overlay: any = document.getElementById('overlay');
    let headerVideo: any = document.getElementById('my_video');
    headerVideo.autoplay = true;
    headerVideo.muted = true;
  }

  play() {
    let overlay: any = document.getElementById('overlay');
    let headerVideo: any = document.getElementById('my_video');
    this.isPaused = !this.isPaused;
    this.isPlaying = !this.isPlaying;

    if (headerVideo.autoplay) {
      headerVideo.autoplay = false;
      headerVideo.currentTime = 0;
      overlay.classList = 'fadeOut';
      headerVideo.play();
      headerVideo.muted = false;
    } else {
      overlay.classList = 'fadeOut';
      headerVideo.play();
    }

    console.log('is Playing: ', this.isPlaying);
  }

  pause() {
    let overlay: any = document.getElementById('overlay');
    let headerVideo: any = document.getElementById('my_video');

    this.isPlaying = false;
    headerVideo.pause();

    overlay.classList = 'fadeIn';
    console.log('is Playing: ', this.isPlaying);
  }

  updateHeadline() {
    setInterval(() => {
      this.currentLine++;
      this.currentLine = this.currentLine % this.headline.length;
      this.showHeadline = false;

      setInterval(() => {
        this.typedOut = true;
      }, 2000);
      setTimeout(() => {
        this.showHeadline = true;
      }, 1);
    }, 4000);
  }

  ngOnInit(): void {
    this.updateHeadline();
    this.autoplay();
  }
}
