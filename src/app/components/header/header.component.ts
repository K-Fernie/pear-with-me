import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: []
})
export class HeaderComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): void {
    }

    onSwapPears() {
        console.log("SWAPPING PEARS");
    }

    onClearPears() {
        console.log("Clearing Pears");
    }

}
