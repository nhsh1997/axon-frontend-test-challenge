import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Box } from '../../models/box';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  boxes: Box[] = [
    { id: 1, color: '#ff5733'},
    { id: 2, color: '#55efc4'},
    { id: 1, color: '#ff5733'},
    { id: 2, color: '#55efc4'},
    { id: 1, color: '#ff5733'},
    { id: 2, color: '#55efc4'},
    { id: 1, color: '#ff5733'},
    { id: 2, color: '#55efc4'},
    { id: 1, color: '#ff5733'},
    { id: 2, color: '#55efc4'},
  ];

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.boxes, event.previousIndex, event.currentIndex);
  }

}
