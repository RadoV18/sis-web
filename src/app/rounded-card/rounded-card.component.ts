import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rounded-card',
  templateUrl: './rounded-card.component.html',
  styleUrls: ['./rounded-card.component.css']
})
export class RoundedCardComponent implements OnInit {
  @Input() imagePath: string;
  @Input() regional: string;
  @Input() link: string;

  constructor() {

  }

  ngOnInit(): void {
  }

}
