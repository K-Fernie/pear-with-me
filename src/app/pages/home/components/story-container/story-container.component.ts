import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
    selector: 'app-story-container',
    templateUrl: './story-container.component.html',
    styleUrls: ['story-container.component.css']
})
export class StoryContainerComponent {
    resourceList = ["Cody", "Alicia", "Katy", "Sanjeev", "Sara", "Rajibul", "Spencer"];

    onDrop(event: CdkDragDrop<string[]>) {
        console.log("Dropped")
        if (event.previousContainer === event.container) {
            // If the item was dropped within the same container
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            // If the item was dropped in a different container
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
}
