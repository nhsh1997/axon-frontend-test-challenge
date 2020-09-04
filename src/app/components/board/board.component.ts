import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, transferArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Box } from '../../models/box';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  lists: Box[][] = [
    [
      { id: 1, color: '#ff5733'},
      { id: 2, color: '#55efc4'},
      { id: 1, color: '#ff5733'},
      { id: 2, color: '#55efc4'},
      { id: 1, color: '#ff5733'},
      { id: 2, color: '#55efc4'},
      { id: 1, color: '#ff5733'},
      { id: 2, color: '#55efc4'},
    ],
    [
      { id: 1, color: '#ff5733'},
      { id: 2, color: '#55efc4'},
      { id: 1, color: '#ff5733'},
      { id: 2, color: '#55efc4'},
      { id: 1, color: '#ff5733'},
      { id: 2, color: '#55efc4'},
      { id: 1, color: '#ff5733'},
      { id: 2, color: '#55efc4'},
    ],
    [
      { id: 1, color: '#ff5733'},
      { id: 2, color: '#55efc4'},
      { id: 1, color: '#ff5733'},
      { id: 2, color: '#55efc4'},
      { id: 1, color: '#ff5733'},
      { id: 2, color: '#55efc4'},
      { id: 1, color: '#ff5733'},
      { id: 2, color: '#55efc4'},
    ],
    [
      { id: 1, color: '#ff5733'},
      { id: 2, color: '#55efc4'},
      { id: 1, color: '#ff5733'},
      { id: 2, color: '#55efc4'},
      { id: 1, color: '#ff5733'},
      { id: 2, color: '#55efc4'},
      { id: 1, color: '#ff5733'},
      { id: 2, color: '#55efc4'},
    ]
  ];

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
