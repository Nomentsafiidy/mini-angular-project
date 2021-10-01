import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    constructor() {}

    ngOnInit(): void {
        this.fabricDrawRect();
    }

    drawRect() {
        console.log('drawRect work fine !!');
        // reference canvas element (with id="c")
        var canvasEl = document.getElementById('work-space') as HTMLCanvasElement;

        // get 2d context to draw on (the "bitmap" mentioned earlier)
        var ctx = canvasEl?.getContext('2d');

        if (ctx) {
            ctx.fillStyle = '#e5e5e5';
            // set fill color of context
            ctx.fillStyle = 'red';

            // create rectangle at a 100,100 point, with 20x20 dimensions
            ctx?.fillRect(100, 100, 20, 20);
        }
    }

    fabricDrawRect() {
        console.log('fabric function work!!');
        // create a wrapper around native canvas element (with id="c")
        var canvas = new fabric.Canvas('work-space');

        // create a rectangle object
        var rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'red',
            width: 20,
            height: 20,
        });

        // "add" rectangle onto canvas
        canvas.add(rect);
        rect.set('selectable', true);
    }
}
