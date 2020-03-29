import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() counterOutput = new EventEmitter<number>();
  private counter: number = 0;
  private intervalId = null;

  onStartGame() {
    this.intervalId = setInterval(() => {
      this.counter += 1;
      this.counterOutput.emit(this.counter);
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.intervalId)
   }
}
