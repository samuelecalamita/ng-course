import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paragraphVisibility: boolean = false;
  toggleNumberClicks = [];

  toggleParagraphVisibility() {
    this.paragraphVisibility = !this.paragraphVisibility;
    this.toggleNumberClicks.push(new Date());
  }
}
