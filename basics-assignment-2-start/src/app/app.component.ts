import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string =  "";
  isValid: boolean = false;

  handleClick() {
    this.username = "";
    this.setButtonState();
  }

  setButtonState() {
    this.isValid = !!this.username;
  }
}
