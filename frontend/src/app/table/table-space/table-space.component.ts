import { Component, OnInit, Input } from '@angular/core';
import { Card } from '@app/models/card';

@Component({
  selector: 'table-space',
  templateUrl: './table-space.component.html',
  styleUrls: ['./table-space.component.scss']
})
export class TableSpaceComponent implements OnInit {
  @Input() tableCards: Card[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
