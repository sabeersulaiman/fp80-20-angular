import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dog } from 'src/app/models/dog.model';

@Component({
    selector: 'app-dog-viewer',
    templateUrl: './dog-viewer.component.html',
    styleUrls: ['./dog-viewer.component.scss']
})
export class DogViewerComponent implements OnInit {
    @Input()
    dog: Dog;

    @Output()
    delete = new EventEmitter<Dog>();

    constructor() {}

    ngOnInit() {}
}
