import {Component} from '@angular/core';
import {CdkDragDrop} from "@angular/cdk/drag-drop";

@Component({
    selector: 'app-story-container',
    templateUrl: './story-container.component.html',
    styleUrls: ['story-container.component.css']
})
export class StoryContainerComponent {

    groups = ['Pears Forever', 'Pear Force 2', 'Pear Me Up Scotty', 'Pear of The Rings'];
    posts: { [group: string]: string[] } = {};

    onDrop(event: CdkDragDrop<string[]>) {
        console.log("Dropped")
    }

    onAddStory(event: any) {
        console.log(event);
        if (!this.posts[event]) {
            this.posts[event] = ['Testing New'];
        } else {
            this.posts[event].push('TESTING NEW POST');
        }
    }
}
