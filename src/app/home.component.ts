import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <h1>Please Select A Notes List From The Navbar</h1>
    </div>
  `,
  styles: [
    `
    body {
      padding-top: 70px;
    }
  `
  ],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
