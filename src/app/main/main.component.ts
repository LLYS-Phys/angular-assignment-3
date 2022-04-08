import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  buttonVal = false
  buttonClicks = []
  counterStop = false

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(){
    this.buttonVal = true
    this.buttonClicks.push(this.buttonClicks.length + 1)
  }


}
