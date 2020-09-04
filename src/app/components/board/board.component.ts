import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
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
      this.swapTwoBoxes(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    }

  }

  swapTwoBoxes(previousContainerData, containerData, previousIndex, currentIndex){
    if (currentIndex == 8){
      currentIndex = currentIndex - 1;
    }
    let oldTarget = previousContainerData[previousIndex];
    previousContainerData[previousIndex] = containerData[currentIndex];
    containerData[currentIndex] = oldTarget;
  }

}
