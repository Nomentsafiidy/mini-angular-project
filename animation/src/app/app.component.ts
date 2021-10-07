import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'animation';
    date!: number;

    constructor() {
        this.date = new Date().getTime();
    }
}
