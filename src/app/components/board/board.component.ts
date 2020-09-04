import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, transferArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Box } from '../../_models/box';
import { board } from 'src/app/_data/board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  rows: Box[][];

  constructor() {
    this.rows = board;
  }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event.previousContainer.data);
      console.log(event.container.data);
      console.log(event.previousIndex);
      console.log(event.currentIndex);
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex)
    }

  }

  swapTwoRows(previousContainerData, containerData, previousIndex, currentIndex){
    previousContainerData[previousIndex] = containerData[currentIndex];
    let temp =  previousContainerData[previousIndex];
    containerData[currentIndex] = temp;
  }

}
