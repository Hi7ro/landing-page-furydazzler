import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.scss'],
})
export class CopyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
