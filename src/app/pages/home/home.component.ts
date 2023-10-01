import {Component} from '@angular/core';
import {CdkDragDrop, CdkDragEnd, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    dragPosition: "static" | "fixed" = "static";
    resourceList = ["Cody", "Alicia", "Katy", "Sanjeev", "Sara", "Rajibul", "Spencer"];

// ...

    dragStarted(): void {
        this.dragPosition = "fixed";
        console.log("Dragging");
    }

    dragEnded(event: CdkDragEnd) {
        const draggedItem = event.source.element.nativeElement;
        draggedItem.style.position = 'static';
    }

    drop(event: CdkDragDrop<string[]>): void {
        const draggedItem = event.item.data;
        if (event.previousContainer === event.container) {
            // If the item is dropped within the same container, just move it within the array
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            // If the item is dropped in a different container, transfer it between arrays
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        }

    }

}
